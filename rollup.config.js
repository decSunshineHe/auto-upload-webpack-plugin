import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: [
    {
      name: "upload-server-webpack-plugin",
      file: "dist/index.cjs.js",
      exports: "default",
      format: "cjs",
    },
  ],
  plugins: [
    getBabelOutputPlugin({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
      ],
    }),
    terser(),
  ],
};
