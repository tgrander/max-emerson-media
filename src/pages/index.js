import React from "react"
import { css } from "@emotion/core"

import MobileBottomNav from "../components/mobile-bottom-nav"
import DesktopSideNav from "../components/desktop-side-nav"

import SEO from "../components/seo"
import Content from "../components/content"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
      `}
    >
      <DesktopSideNav />
      <Content />
    </div>
    <MobileBottomNav />
  </>
)

export default IndexPage
