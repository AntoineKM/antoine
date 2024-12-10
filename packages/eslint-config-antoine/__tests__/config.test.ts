import eslintrcConfig, { flatConfig } from "../src";

interface FlatESLintConfig {
  files?: string[];
  plugins?: Record<string, unknown>;
  languageOptions?: {
    ecmaVersion?: number;
    sourceType?: string;
    parser?: unknown;
    parserOptions?: {
      ecmaFeatures?: {
        jsx?: boolean;
      };
    };
  };
  settings?: {
    react?: {
      version?: string;
    };
  };
  rules?: Record<string, unknown>;
  linterOptions?: {
    reportUnusedDisableDirectives?: string;
  };
}

describe("ESLint V8 Configuration (eslintrc)", () => {
  test("has valid ecmaVersion", () => {
    expect(eslintrcConfig.parserOptions?.ecmaVersion).toBe(2022);
  });

  test("extends standard configs", () => {
    const extendsList = [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ];
    expect(eslintrcConfig.extends).toEqual(extendsList);
  });

  test("has TypeScript parser configuration", () => {
    expect(eslintrcConfig.parser).toBe("@typescript-eslint/parser");
  });

  test("has all required plugins", () => {
    const requiredPlugins = ["react", "@typescript-eslint"];
    expect(eslintrcConfig.plugins).toEqual(expect.arrayContaining(requiredPlugins));
  });

  test("has react settings", () => {
    expect(eslintrcConfig.settings?.react?.version).toBe("detect");
  });
});

describe("ESLint V9 Configuration (flat config)", () => {
  const configs = flatConfig as FlatESLintConfig[];

  test("includes base configurations", () => {
    expect(configs.length).toBeGreaterThan(1);
    expect(configs[0]).toBeDefined();
  });

  test("has correct language options in base config", () => {
    const baseConfig = configs.find(
      (config) => config.languageOptions?.ecmaVersion === 2022
    );
    
    expect(baseConfig).toBeDefined();
    expect(baseConfig?.languageOptions).toMatchObject({
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    });
  });

  test("has TypeScript and React configuration", () => {
    const tsReactConfig = configs.find((config) => {
      const hasTypeScriptFiles = config.files?.some(pattern => 
        pattern.includes("*.{ts,tsx}")
      );
      const hasPlugins = config.plugins && 
        "@typescript-eslint" in config.plugins && 
        "react" in config.plugins;
      
      return hasTypeScriptFiles && hasPlugins;
    });

    expect(tsReactConfig).toBeDefined();
    expect(tsReactConfig?.settings?.react?.version).toBe("detect");
  });

  test("includes Prettier config", () => {
    const lastConfig = configs[configs.length - 1];
    expect(lastConfig).toBeDefined();
  });

  test("TypeScript rules are properly configured", () => {
    const tsConfig = configs.find((config) => 
      config.rules?.["@typescript-eslint/no-unused-vars"]
    );

    expect(tsConfig).toBeDefined();
    expect(tsConfig?.rules?.["@typescript-eslint/no-explicit-any"]).toBe("warn");
  });
});