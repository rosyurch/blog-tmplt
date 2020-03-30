import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
    const nodes = data.allWordpressPost.nodes

    return (
        <Layout>
            <SEO title="Home" />
            <ul>
                {nodes.map(post => (
                    <li key={post.wordpress_id}>
                        <Link to={`/post/${post.slug}`}>
                            <h3
                                dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                        </Link>
                        <div
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></div>
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

export default IndexPage
