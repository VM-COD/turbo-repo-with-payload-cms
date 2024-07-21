import { defineConfig, type Options } from "tsup";
import { sassPlugin } from 'esbuild-sass-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';

export default defineConfig((options: Options) => ({
    esbuildPlugins: [svgrPlugin(), sassPlugin()],
    treeshake: true,
    entry: ["./src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    external: ["react"],
    injectStyle: true,
    ...options,
}));