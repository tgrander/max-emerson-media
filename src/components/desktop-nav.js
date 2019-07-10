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
        items={["director", "writer", "personality", "press"]}
        currentClassName="is-current-section"
        css={css`
          text-align: right;
          list-style: none;
          & > :not(:last-child) {
            margin-bottom: 60px;
          }
          li a {
            color: black;
            font-size: 24px;
            cursor: pointer;
            text-decoration: none;
          }
          li.is-current-section a {
            color: red;
          }
        `}
      >
        <li>
          <a href="#director">Director</a>
        </li>
        <li>
          <a href="#writer">Writer</a>
        </li>
        <li>
          <a href="#personality">Personality</a>
        </li>
        <li>
          <a href="#press">Press</a>
        </li>
      </Scrollspy>
    </nav>
  )
}

export default DesktopSideNav
