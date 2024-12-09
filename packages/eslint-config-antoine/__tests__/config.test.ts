import type { Linter } from "eslint";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config: Linter.Config = require("../dist/index");

describe("ESLint Configuration", () => {
  test("has valid ecmaVersion for both v8 and v9", () => {
    expect(config.parserOptions?.ecmaVersion).toBe(2022);
  });

  test("extends standard configs compatible with both versions", () => {
    const extendsList = [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "universe/native",
    ];
    expect(config.extends).toEqual(extendsList);
  });

  test("has TypeScript parser configuration", () => {
    expect(config.parser).toBe("@typescript-eslint/parser");
  });

  test("has all required plugins", () => {
    const requiredPlugins = ["react", "@typescript-eslint", "prettier"];
    expect(config.plugins).toEqual(expect.arrayContaining(requiredPlugins));
  });

  test("has react settings", () => {
    expect(config.settings?.react?.version).toBe("detect");
  });

  test("rule severity uses string literals instead of numbers", () => {
    const hasNumberSeverity = (obj: Record<string, unknown>): boolean => {
      return Object.entries(obj).some(([_, value]) => {
        if (Array.isArray(value)) {
          return typeof value[0] === "number";
        }
        return typeof value === "number";
      });
    };

    expect(hasNumberSeverity(config.rules || {})).toBe(false);
  });
});
