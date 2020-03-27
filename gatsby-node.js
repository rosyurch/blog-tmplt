/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const Post = path.resolve('./src/templates/Post.js')
    const result = await graphql(`
        {
            allWordpressPost {
                edges {
                    node {
                        slug
                        wordpress_id
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const blogPosts = result.data.allWordpressPost.edges
    blogPosts.forEach(post => {
        createPage({
            path: `/post/${post.node.slug}`,
            component: Post,
            context: {
                id: post.node.wordpress_id,
            },
        })
    })

    // TODO pagination
    const PageList = path.resolve('./src/templates/PageList.js')
    createPage({ path: `/posts`, component: PageList })
}
