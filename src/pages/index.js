import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import MobileBottomNav from "../components/mobile-nav"
import DesktopSideNav from "../components/desktop-nav"

import SEO from "../components/seo"
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 30px;
      `}
    >
      <DesktopSideNav />
      <Content />
    </div>
    <MobileBottomNav />
  </Layout>
)

export default IndexPage
