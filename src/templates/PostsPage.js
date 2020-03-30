import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
`

const PostsPage = ({ data, pageContext }) => {
    const nodes = data.allWordpressPost.nodes
    const { pageNumber, hasNextPage } = pageContext

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
            <div>
                <Link to={pageNumber === 2 ? '/' : `/posts/${pageNumber - 1}`}>
                    &#8592;Page {pageNumber - 1}
                </Link>{' '}
                {hasNextPage && (
                    <Link to={`/posts/${pageNumber + 1}`}>
                        Page {pageNumber + 1} &#8594;
                    </Link>
                )}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PagePosts($skip: Int!, $limit: Int!) {
        allWordpressPost(limit: $limit, skip: $skip) {
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

export default PostsPage
