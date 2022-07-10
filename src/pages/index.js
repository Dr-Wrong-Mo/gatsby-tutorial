import { Link, graphql } from "gatsby";
import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function IndexPage({ data }) {
  const image = getImage(data.file)
  return (
    <Layout>
      <section id="home" className='header'>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX design & web developer from Kansas City.</p>
          <Link className='btn' to="/projects">My Project</Link>
        </div>
        <GatsbyImage image={image} />
      </section>
    </Layout>
  );
}
// {/* <StaticImage src={image} /> */}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      id
      childImageSharp {
        id
        gatsbyImageData
      }
    }
  }
`