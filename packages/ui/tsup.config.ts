import { defineConfig, type Options } from "tsup";
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';

export default defineConfig((options: Options) => ({
    esbuildPlugins: [svgrPlugin(), sassPlugin({
        transform: postcssModules({
            scopeBehaviour: "global"
            // ...put here the options for postcss-modules: https://github.com/madyankin/postcss-modules
        })
    })],
    treeshake: true,
    minify: true,
    clean: true,
    entry: [
        "./src/index.ts", // import { Card } from "@repo/ui/atoms/Card";
        "./src/atoms/index.ts", // import { Icons, IconSize } from "@repo/ui/atoms";
        "./src/atoms/**/index.ts" // import { Icon } from "@repo/ui/atoms/Icon";
    ],
    format: ["cjs", "esm"],
    dts: true,
    external: ["react"],
    injectStyle: true,
    ...options,
}));