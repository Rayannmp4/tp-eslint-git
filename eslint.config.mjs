import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    // Ajoute airbnb-base dans extends, et le plugin import dans plugins
    plugins: {
      import: importPlugin
    },
    extends: [
      ...airbnbBase.extends // inclus toute la config airbnb-base
    ],
    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "single"]
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]);

