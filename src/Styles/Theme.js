// The theme object holding values that can be accessed globally by styled-components
export const Theme = {
  colors: {
    primaryBg: "beige",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  desktop: {
    rows: "auto auto 1fr auto",
    columns: "repeat(3, 1fr)",
    area: `
    "a a a"
    "b c c"
    "b d d"
    "e e e"
              `,
  },
  desktopTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
  tablet: {
    rows: "auto auto 1fr auto",
    columns: "repeat(2, auto)",
    area: `
      "a b"
      "c c"
      "d d"
      "e e"
              `,
  },
  tabletTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
  mobile: {
    rows: "auto auto 1fr auto auto",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
      "d d"
      "e e"
              `,
  },
  mobileTwo: {
    rows: "",
    columns: "",
    area: `
              
              `,
  },
};
