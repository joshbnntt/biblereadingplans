


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("RedeemerSpring2023BibleReadingPlan.xml");
    eleventyConfig.addPassthroughCopy("src/admin");
    
    eleventyConfig.addCollection("plans", function(collectionApi) {
        return collectionApi.getFilteredByTags("readingplan").sort((a, b) => {
            return  b.data.title - a.data.title;
      });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}