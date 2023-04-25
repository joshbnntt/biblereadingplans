


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("RedeemerSpring2023BibleReadingPlan.xml");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.setTemplateFormats("html,md,njk");

    return {
        dir: {
            input: "src",
            output: "_site",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}