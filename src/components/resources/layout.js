import React from 'react'
import Sidebar from './sidebar'
import { Row, Col, Divider, BackTop } from 'antd'
import SEO from '../seo'
import Header from '../shared/header'
import css from '@emotion/css'
import PropTypes from 'prop-types';

const Layout = ({ children, link, title, resource }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <Row>
        <Col sm={24} md={6}>
          <Sidebar link={link} resource={resource} />
        </Col>
        <Col sm={24} md={18}>
          <main>
            <section css={css`
              position: relative;
              min-height: 500px;
              padding: 0 170px 144px 64px;
              overflow: hidden;
              background: #fff;

              @media (max-width: 767px) {
                padding: 0 20px 144px 20px;
              }
            `}>
              <article className="markdown-section" id="main">
                <h1>{title}</h1>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: children}} />
              </article>
            </section>
          </main>
        </Col>
      </Row>
      <BackTop />
    </>
  )
}

Layout.propTypes =  {
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  resource: PropTypes.object.isRequired
}

export default Layout
