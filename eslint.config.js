// @ts-check

import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginTypescript from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/", "**/*.{js,mjs,cjs}"]),
  pluginJs.configs.recommended,
  pluginReactHooks.configs.flat.recommended,

  ...pluginTypescript.configs.recommendedTypeChecked,
  { languageOptions: { parserOptions: { projectService: true } } },

  configPrettier,

  {
    rules: {
      "no-console": "error",
      "react-hooks/exhaustive-deps": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "@typescript-eslint/unbound-method": "off",
    },
  },
]);
