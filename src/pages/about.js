import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ({ data }) => {
    const { title, content } = data.allWordpressPage.nodes[0]

    return (
        <Layout>
            <SEO title="Home" />
            <h1
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export const query = graphql`
    query AboutPage {
        allWordpressPage(filter: { slug: { eq: "about" } }) {
            nodes {
                title
                wordpress_id
                slug
                content
            }
        }
    }
`

export default About
