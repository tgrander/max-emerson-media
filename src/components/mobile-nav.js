import React from "react"
import { css } from "@emotion/core"

const MobileBottomNav = () => {
  return (
    <nav css={navStyles}>
      <a css={linkStyles}>Director</a>
      <a css={linkStyles}>Writer</a>
      <a css={linkStyles}>Personality</a>
      <a css={linkStyles}>Press</a>
    </nav>
  )
}

const navStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const linkStyles = css`
  font-size: 11px;
  color: white;
`

export const phonePortrait = "320px"
export const phoneLandscape = "480px"
export const iPadPortrait = "768"
export const iPadLandscape = "1024px"
export const desktop = "1224px"
export const largeScreen = "1824px"

export default MobileBottomNav
