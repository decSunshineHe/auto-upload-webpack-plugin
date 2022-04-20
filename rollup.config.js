import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: [
    {
      name: "auto-upload-webpack-plugin",
      file: "dist/index.cjs.js",
      exports: "default",
      format: "cjs",
    },
    {
      name: "auto-upload-webpack-plugin",
      file: "dist/index.umd.js",
      format: "umd",
    },
    {
      name: "auto-upload-webpack-plugin",
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
