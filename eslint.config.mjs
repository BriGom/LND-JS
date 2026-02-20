import globals from "globals";
import pluginJs from "@eslint/js";

// --- CONFIGURACIÓN MAESTRA DE ESLINT ---
export default [
  { 
    files: ["**/*.js"], 
    languageOptions: { globals: { ...globals.browser, ...globals.node } } 
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",  // Solo avisa, no corta el flujo
      "no-undef": "error", // Error si la variable no existe
      "semi": ["error", "always"], // Puntos y coma obligatorios
      "quotes": ["error", "double"], // Comillas dobles siempre
      "prefer-const": "error", // Fuerza el uso de const
      "indent": ["error", 2],  // 2 espacios de sangría
      "eqeqeq": "error" // Comparación estricta === 
    }
  }
];
