import React from "react"
import { css } from "@emotion/core"

import Image from "../components/image"

const Content = () => {
  return (
    <section
      css={css`
        flex: 1;
      `}
    >
      <div
        css={css`
          @media only screen and (min-width: 768px) {
            display: none;
          }
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 16px;
            margin-bottom: 0;
          `}
        >
          Max Emerson
        </h1>
        <div
          css={css`
            text-align: center;
            font-size: 12px;
            margin-bottom: 12px;
          `}
        >
          Writer, director, internet person
        </div>
      </div>

      <div style={{ marginBottom: `1.45rem` }}>
        <Image query={maxColorImageQuery} />
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

const maxColorImageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "max-color.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Content
