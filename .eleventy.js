module.exports = function(eleventyConfig) {
    // non-11ty-template files
    eleventyConfig.addPassthroughCopy('src/assets/')
    eleventyConfig.addPassthroughCopy('src/css/')

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    }
}
