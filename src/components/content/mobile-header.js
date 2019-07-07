import React, { Component } from "react"
import { css } from "@emotion/core"

const MobileHeader = () => {
  return (
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
  )
}

export default MobileHeader
