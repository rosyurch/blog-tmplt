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

    const numOfPosts = blogPosts.length
    const postsPerPage = 3
    const numOfPages = Math.ceil(numOfPosts / postsPerPage)
    const PageList = path.resolve('./src/templates/PostsPage.js')
    Array.from({ length: numOfPages }).forEach((page, index) => {
        const pageNumber = index + 1
        if (index === 0) return
        createPage({
            path: `/posts/${pageNumber}`,
            component: PageList,
            context: {
                skip: index * postsPerPage,
                limit: postsPerPage,
                pageNumber,
                hasNextPage: pageNumber < numOfPages,
            },
        })
    })
}
