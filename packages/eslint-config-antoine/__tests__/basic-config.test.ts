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

describe("ESLint Config Structure", () => {
  test("exports an array of configuration objects", () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config.length).toBeGreaterThan(0);
  });

  test("includes recommended config", () => {
    // The first item should be the js.configs.recommended
    expect(config[0]).toBeDefined();
  });

  test("includes typescript config", () => {
    // Find the config that has TypeScript files
    const tsConfig = config.find((c: FlatESLintConfig) => 
      c.files && Array.isArray(c.files) && 
      c.files.some((pattern: string) => pattern.includes("ts"))
    );
    expect(tsConfig).toBeDefined();
  });

  test("includes prettier config", () => {
    // The last config should be prettier
    const lastConfig = config[config.length - 1];
    expect(lastConfig).toBeDefined();
  });
});