import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Img from "gatsby-image"

export default function ProjectDetails({ data }) {
  // console.log(data.markdownRemark);
  const { html } = data.markdownRemark
  const { title, stack, featured } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div id="project-details" className='details'>
            <h2>{ title }</h2>
            <h3>{ stack }</h3>
            <div className='featured'>
            <Img fluid={ featured.childImageSharp.fluid } />
            </div>
            <div className='html' dangerouslySetInnerHTML={{ __html: html } } />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
