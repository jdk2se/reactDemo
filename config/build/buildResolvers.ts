import webpack from "webpack";

export default function(src: string): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    };
}