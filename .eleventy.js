module.exports = function(eleventyConfig) {
    // non-11ty-template files
    eleventyConfig.addPassthroughCopy('src/assets/')
    eleventyConfig.addPassthroughCopy('src/css/')

    // eleventy-dev-server options
    eleventyConfig.setServerOptions({
        watch: ["src/**/*.html", "_site/**/*.html"]
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    }
}
