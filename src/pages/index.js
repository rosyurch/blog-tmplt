import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
`

const IndexPage = ({ data }) => {
    const nodes = data.allWordpressPost.nodes

    return (
        <Layout>
            <SEO title="Home" />
            <Ul>
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
            </Ul>
            <Link to="/posts/2">Page 2 &#8594;</Link>
        </Layout>
    )
}

export const query = graphql`
    query IndexPosts {
        allWordpressPost(limit: 3) {
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
