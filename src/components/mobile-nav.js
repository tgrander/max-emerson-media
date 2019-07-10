import React from "react"
import { css } from "@emotion/core"
import Scrollspy from "react-scrollspy"

export const navHeight = 34
export const navBottomSpacingHeight = 25

const MobileBottomNav = () => {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        @media only screen and (min-width: 768px) {
          display: none;
        }
      `}
    >
      <Scrollspy
        componentTag="nav"
        items={["above-the-fold", "director", "writer", "personality", "press"]}
        currentClassName="is-current-section"
        css={css`
          background-color: black;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: ${navHeight}px;
          a {
            font-size: 11px;
            color: white;
            text-decoration: none;
          }
          a.is-current-section {
            color: red;
          }
        `}
      >
        <a
          href="#above-the-fold"
          css={css`
            display: none;
          `}
        ></a>
        <a href="#director">Director</a>
        <a href="#writer">Writer</a>
        <a href="#personality">Personality</a>
        <a href="#press">Press</a>
      </Scrollspy>
      {/* below div used to add extra space to bottom of mobile nav (iPhone X design) */}
      <div
        css={css`
          height: ${navBottomSpacingHeight}px;
          background-color: black;
        `}
      />
    </div>
  )
}

export const phonePortrait = "320px"
export const phoneLandscape = "480px"
export const iPadPortrait = "768"
export const iPadLandscape = "1024px"
export const desktop = "1224px"
export const largeScreen = "1824px"

export default MobileBottomNav
