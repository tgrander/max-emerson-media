import React from "react"
import { css } from "@emotion/core"

export const desktopNavWidth = 200

const DesktopSideNav = () => {
  return (
    <nav
      css={css`
        position: fixed;
        height: 100%;
        width: ${desktopNavWidth}px;
        background-color: #fff;
        margin-right: 55px;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      `}
    >
      <h1
        css={css`
          text-align: left;
          margin-top: 16px;
          margin-bottom: 0;
          color: black;
        `}
      >
        Max Emerson
      </h1>
      <div
        css={css`
          text-align: left;
          font-size: 14px;
          margin-bottom: 50px;
        `}
      >
        Writer, director, internet person
      </div>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          text-align: right;
          & > :not(:last-child) {
            margin-bottom: 60px;
          }
        `}
      >
        <a css={linkCss}>Director</a>
        <a css={linkCss}>Writer</a>
        <a css={linkCss}>Personality</a>
        <a css={linkCss}>Press</a>
      </section>
    </nav>
  )
}

const linkCss = css`
  font-size: 24px;
  cursor: pointer;
`

export default DesktopSideNav
