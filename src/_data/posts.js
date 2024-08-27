const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
});

module.exports = function () {
    return client.getEntries({ content_type: 'post', order: 'sys.createdAt' })
        .then(function (response) {
            const post = response.items
                .map(function (post) {
                    post.fields.date = new Date(post.sys.updatedAt);
                    return post.fields;
                });
            return post;
        })
        .catch(console.error);
};