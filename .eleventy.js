module.exports = function(eleventyConfig) {
    // non-11ty-template files
    eleventyConfig.addPassthroughCopy('src/assets/')
    eleventyConfig.addPassthroughCopy('src/css/')

    return {
        dir: {
            includes: "_includes",
            input: "src",
            output: "_site"
        },
        templateFormats: ["html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    }
}
