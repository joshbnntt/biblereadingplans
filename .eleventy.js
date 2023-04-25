


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("RedeemerSpring2023BibleReadingPlan.xml");


    return {
        dir: {
            input: "src",
            output: "_site",
            markdownTemplateEngine: "njk",
            htmlTemplateEngine: "njk",
        }
    }
}