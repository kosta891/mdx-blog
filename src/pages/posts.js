import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  const{allMdx: {nodes: posts}}= data
  return ( 
  <Layout>
    <Hero />
    <Posts posts={posts} title='all posts' />
  </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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

export default PostsPage
