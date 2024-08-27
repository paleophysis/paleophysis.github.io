const { DateTime } = require("luxon");
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
require('dotenv').config();

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('.src/style.css');
    eleventyConfig.addPassthroughCopy('.src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter("renderRichTextAsHtml", (value) => {
        return documentToHtmlString(value);
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
