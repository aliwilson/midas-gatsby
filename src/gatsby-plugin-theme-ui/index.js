// example theme file

const padding = "2rem";

const theme = {
  breakpoints: [40, 52, 64].map((n) => n + "em"),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "brandon-grotesque, sans-serif",
    heading: "Playfair Display, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [13, 14, 16, 20, 24, 32, 48, 64, 96],
  sizes: {
    wide: 2048,
    container: 1400,
    narrow: 512,
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  text: {
    h1: {
      fontWeight: 800,
    },
  },
  heading: {
    fontWeight: "heading",
  },
  colors: {
    text: "#e0e0e0",
    background: "#151515",
    offblack: "#050505",
    primary: "#c99e41",
    secondary: "#0cf",
    highlight: "#f0c",
    muted: "#011",
    grey: "#919496",
  },
  layout: {
    container: {
      px: padding,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    footer: {
      fontSize: "11px",
      background: "offblack",
      color: "text",
      py: [4, 5],
      textTransform: "uppercase",
    },
    navbar: {
      justifyContent: "center",
    },
    header: {
      background: "offblack",
      py: [3, 4],
      overlaid: {
        position: "absolute",
        zIndex: 10,
        width: "100%",
        background: "transparent",
        py: [3, 4],
      },
    },
    section: {
      margin: "0 auto",
      px: padding,
      py: [3, 5],
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: 400,
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  links: {
    footer: {
      fontSize: "11px",
      color: "grey",
      px: [2, 3],
      textTransform: "uppercase",
      fontWeight: 500,
      letterSpacing: 1,
    },
    nav: {
      px: [2, 3, 4],
      py: 1,
      fontSize: 0,
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: 1,
      lineHeight: 1,
    },
  },
};

export default theme;
