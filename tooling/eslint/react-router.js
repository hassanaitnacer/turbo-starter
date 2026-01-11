import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import pluginReactRefresh from "eslint-plugin-react-refresh"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import { config as baseConfig } from "./base.js"

/**
 * A custom ESLint configuration for React Router apps.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  ...baseConfig,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      "jsx-a11y": pluginJsxA11y,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,

      // React Router v7 / Vite HMR rule
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: [
            "meta",
            "links",
            "headers",
            "loader",
            "action",
            "clientLoader",
            "clientAction",
          ],
        },
      ],

      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",

      // Enforce accessibility best practices
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
  {
    ignores: [
      "build/**",
      "dist/**",
      ".react-router/**",
      "public/**",
      "routeTree.gen.ts", // If using Typegen
    ],
  },
]
