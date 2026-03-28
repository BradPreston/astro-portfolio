import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import importX from 'eslint-plugin-import-x';
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    ...eslintPluginAstro.configs['flat/recommended'],
    globalIgnores(['**/*.d.ts']),
    {
        files: ['src/**/*.ts'],
        plugins: {
            'import-x': importX,
        },
        languageOptions: {
            parser: tsParser
        },
        rules: {
            'no-unused-vars': 'warn',
            'quotes': ['warn', 'double'],
            'semi': ['warn', 'always'],
            'object-curly-spacing': ['warn', 'always'],
            'import-x/order': ['warn', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            }],
        }
    },
    {
        files: ['src/**/*.astro'],
        plugins: {
            'import-x': importX,
        },
        rules: {
            'no-unused-vars': 'warn',
            'quotes': ['warn', 'double'],
            'semi': ['warn', 'always'],
            'object-curly-spacing': ['warn', 'always'],
            'import-x/order': ['warn', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            }],
        }
    }
]);