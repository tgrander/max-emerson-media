import React from "react"
import { css } from "@emotion/core"
import Scrollspy from "react-scrollspy"

export const desktopNavWidth = 169

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
      <Scrollspy
        componentTag="nav"
        items={["above-the-fold", "director", "writer", "personality", "press"]}
        currentClassName="is-current-section"
        css={css`
          display: flex;
          flex-direction: column;
          text-align: right;
          list-style: none;
          & > :not(:last-child) {
            margin-bottom: 60px;
          }
          a {
            color: black;
            font-size: 24px;
            cursor: pointer;
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
    </nav>
  )
}

export default DesktopSideNav
