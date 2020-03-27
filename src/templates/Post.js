import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Post = ({ data }) => {
    const { title, date, content } = data.wordpressPost

    return (
        <Layout>
            <SEO title={title} />
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p>On {date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export const query = graphql`
    query OnePost($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            wordpress_id
            title
            date
            content
        }
    }
`

export default Post
