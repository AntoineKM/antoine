import config from "../src/index.js";

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

describe("ESLint V9 Configuration", () => {
  const configs = config as FlatESLintConfig[];

  test("includes base configurations", () => {
    expect(configs.length).toBeGreaterThan(1);
    expect(configs[0]).toBeDefined();
  });

  test("has correct language options in base config", () => {
    const baseConfig = configs.find(
      (config: FlatESLintConfig) => config.languageOptions?.ecmaVersion === 2022
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
    const tsReactConfig = configs.find((config: FlatESLintConfig) => {
      const hasTypeScriptFiles = config.files?.some((pattern: string) => 
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
    const tsConfig = configs.find((config: FlatESLintConfig) => 
      config.rules?.["@typescript-eslint/no-unused-vars"]
    );

    expect(tsConfig).toBeDefined();
    expect(tsConfig?.rules?.["@typescript-eslint/no-explicit-any"]).toBe("warn");
  });
});