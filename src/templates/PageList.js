import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const PageList = ({ data }) => {
    const nodes = data.allWordpressPost.nodes

    return (
        <Layout>
            <ul>
                {nodes.map(post => (
                    <li key={post.wordpress_id}>
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query AllPosts {
        allWordpressPost {
            nodes {
                wordpress_id
                title
                link
                slug
                excerpt
            }
        }
    }
`

export default PageList
