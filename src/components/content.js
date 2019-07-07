import React from "react"
import { css } from "@emotion/core"

import Image from "../components/image"
import MobileHeader from "./content/mobile-header"

const Content = () => {
  return (
    <section
      css={css`
        flex: 1;
      `}
    >
      <MobileHeader />
      <div style={{ marginBottom: `1.45rem` }}>
        <Image query={maxImageQuery} />
      </div>
      <section
        css={css`
          padding: 0 8px;
        `}
      >
        <h1
          css={css`
            margin-bottom: 8px;
          `}
        >
          Director
        </h1>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          Max directed his first debut film Hooked in 2016. Dorem ipsom dolor.
        </p>
      </section>
    </section>
  )
}

const maxImageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "max-white.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Content
