module.exports = function(eleventyConfig) {
    // non-11ty template files
    eleventyConfig.addPassthroughCopy('./src/tufte.css')

    // default output is _site
    return {
        dir: {
            input: "src"
        }
    }
}
