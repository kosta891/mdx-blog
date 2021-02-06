import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

// ...GatsbyImageSharpFluid
const IndexPage = ({data}) => {
  const {allMdx:{nodes: posts}} = data
  console.log(data);
  return (
  <Layout>
    <Hero showPerson/>
    <Posts posts={posts} title='recenty published'/>
  </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          slug
          date(formatString: "D MMMM YYYY")
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
