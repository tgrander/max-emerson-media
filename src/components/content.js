import React from "react"
import { css } from "@emotion/core"

import Image from "../components/image"
import MobileHeader from "./content/mobile-header"
import Video from "./video"

import { desktopNavWidth } from "./desktop-nav"

const Content = () => {
  return (
    <section
      css={css`
        flex: 1;
        @media only screen and (min-width: 768px) {
          margin-left: ${desktopNavWidth + 55}px;
        }
      `}
    >
      <MobileHeader />
      <div style={{ marginBottom: `1.45rem` }}>
        <Image query={maxImageQuery} />
      </div>
      <section css={css``}>
        <h1
          css={css`
            padding: 0;
          `}
        >
          Director
        </h1>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          Max directed his first debut film{" "}
          <a href="https://itunes.apple.com/us/movie/hooked/id1386676698">
            Hooked
          </a>{" "}
          in 2018.
        </p>
        <Video
          videoSrcURL="https://www.youtube.com/embed/QS7RF45_r0I"
          videoTitle="Max Emerson director reel"
        />
      </section>
      <section css={css``}>
        <h1
          css={css`
            padding: 0;
          `}
        >
          Writer
        </h1>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          Max is a writer
        </p>
        <Video
          videoSrcURL="https://www.youtube.com/embed/QS7RF45_r0I"
          videoTitle="Max Emerson director reel"
        />
      </section>
      <section css={css``}>
        <h1
          css={css`
            padding: 0;
          `}
        >
          Personality
        </h1>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          Host and actor
        </p>
        <Video
          videoSrcURL="https://www.youtube.com/embed/QS7RF45_r0I"
          videoTitle="Max Emerson director reel"
        />
        <Video
          videoSrcURL="https://www.youtube.com/embed/R3X846u3BLo"
          videoTitle="Max Emerson director reel"
        />
      </section>
      <section css={css``}>
        <h1
          css={css`
            padding: 0;
          `}
        >
          Press
        </h1>
        <p
          css={css`
            font-size: 14px;
          `}
        >
          He has lots of press
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
