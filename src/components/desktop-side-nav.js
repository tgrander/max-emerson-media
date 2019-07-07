import React from "react"
import { css } from "@emotion/core"

const DesktopSideNav = () => {
  return (
    <nav
      css={css`
        height: 100%;
        width: 200px;
        background-color: #fff;
        margin-left: 30px;
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
        <a>Director</a>
        <a>Writer</a>
        <a>Personality</a>
        <a>Press</a>
      </section>
    </nav>
  )
}

export default DesktopSideNav
