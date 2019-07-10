import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Work Sans",
      styles: ["300", "400", "700"],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    p: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    a: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    div: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
  }),
})

export const { scale, rhythm, options } = typography
export default typography
