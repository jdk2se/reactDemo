import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(template: string): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template,
        }),
        new webpack.ProgressPlugin(),
    ];
}