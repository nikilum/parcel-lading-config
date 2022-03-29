const path = require("path");

const pugPluginAlias = require("pug-alias");

module.exports = {
    plugins: [
        pugPluginAlias({
            "@": "src/assets",
            "#": "src/components"
        })
    ],
    basedir: path.resolve('')
}
