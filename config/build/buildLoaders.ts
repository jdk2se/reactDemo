import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export default function (options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPah: string) => Boolean(resPah.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        fileLoader,
        svgLoader,
        tsLoader,
        cssLoader,
    ]
}