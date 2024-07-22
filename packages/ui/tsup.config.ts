import { defineConfig, type Options } from "tsup";
import { sassPlugin, postcssModules } from 'esbuild-sass-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';


const styleModule = (cssText: string, nonce?: string) => `\
const css = \`${cssText.replace(/([$`\\])/g, '\\$1')}\`;
if(css && typeof document !== 'undefined') {
    const style = document.createElement("style");
    if(${nonce}) {
        style.setAttribute("nonce", ${nonce});
    }
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}
export {css};
`;

export default defineConfig((options: Options) => ({
    esbuildPlugins: [svgrPlugin(), sassPlugin({
        type: styleModule,
        style: 'compressed'
    })],
    treeshake: true,
    minify: true,
    clean: true,
    entry: [
        "./src/index.ts", // import { Card } from "@repo/ui/atoms/Card";
        "./src/atoms/index.ts", // import { Icons, IconSize } from "@repo/ui/atoms";
        "./src/atoms/**/index.ts" // import { Icon } from "@repo/ui/atoms/Icon";
    ],
    format: ['cjs', 'esm'],
    dts: true,
    external: ['react'],
    splitting: false,
    sourcemap: false,
    injectStyle: true,
    ...options,
}));