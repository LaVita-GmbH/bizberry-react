import commonjs from "@rollup/plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"

export default {
    external: ["@lavita-io/bizberry-sdk", "react-query", "react", "react-dom"],
    input: "src/index.ts",
    output: [
        {
            dir: "./dist",
            sourcemap: true,
        },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: "tsconfig.json" })],
}
