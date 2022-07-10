import React from 'react';
import { Link, graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from '../../components/Layout';

export default function Projects({ data }) {
  const projects = data.project.nodes
  const contact = data.contact.siteMetadata.contact
  
  return (
    <Layout>
      <div id="projects" className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className='projects'>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } for a quote!</p>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    project: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          featured {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumb {
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
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`