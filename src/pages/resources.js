import React from "react"
import Img from "gatsby-image"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from 'prop-types';
import { navigate } from "gatsby"

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }
`

const Header = styled('h1')`
  color: #000;

  .dark-mode & {
    color: #fff;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Resources to learn programming" />
    <Header>Learn Programming Languages</Header>
    <div className="cards-list">
      <div className="card" onClick={() => { navigate("/resources/htmlcss/the-internet/") }}>
        <div className="card_image"><BgImg fluid={data.htmlcss.childImageSharp.fluid} /></div>
        <div className="card_title title-white">
          <p>HTML & CSS</p>
        </div>
      </div>

      <div className="card" onClick={() => { navigate("/resources/javascript/intro/") }}>
        <div className="card_image"><BgImg fluid={data.htmlcss.childImageSharp.fluid} /></div>
        <div className="card_title title-white">
          <p>JavaScript</p>
        </div>
      </div>

      <div className="card" onClick={() => { navigate("/resources/elixir/basics/") }}>
        <div className="card_image"><BgImg fluid={data.htmlcss.childImageSharp.fluid} /></div>
        <div className="card_title title-white">
          <p>Elixir</p>
        </div>
      </div>

      {/* <div className="card" onClick={() => { navigate("/resources/python/set-up-dev/") }}>
        <div className="card_image"><BgImg fluid={data.htmlcss.childImageSharp.fluid} /></div>
        <div className="card_title title-white">
          <p>Python</p>
        </div>
      </div> */}
    </div>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const query = graphql`
query {
  beginners: file(relativePath:{eq: "beginners.jpg"}){
    childImageSharp{
      fluid(duotone: { highlight: "#BB4090", shadow: "#192550" }, maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  htmlcss: file(relativePath:{eq: "htmlcss.jpg"}){
    childImageSharp{
      fluid(duotone: { highlight: "#BB4090", shadow: "#192550" }, maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
