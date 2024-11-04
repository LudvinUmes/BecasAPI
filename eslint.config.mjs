import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    // Ignorar la carpeta dist
    ignores: ['dist/**'],

    // Configuración para archivos JS y TS
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser, // Utiliza el parser de TypeScript
      sourceType: 'module',
      globals: globals.browser, // Variables globales del navegador
    },
    rules: {
      'no-console': 'error', // Prohibir console.log
      'prettier/prettier': 'error', // Asegura que Prettier valide el formato del código
    },
  },
  // Configuración recomendada de ESLint para JavaScript
  pluginJs.configs.recommended,
  // Configuración recomendada de TypeScript-ESLint
  tseslint.configs.recommended,
];
