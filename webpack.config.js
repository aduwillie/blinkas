import path from 'path'
const config = {
    entry: "./src/frontend/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}
export default config
