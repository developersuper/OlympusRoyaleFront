module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue, js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "330px",
      xs: "440px",
      // => @media (min-width: 440px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmg: "900px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      fullhd: "1920px",
      // => @media (min-width: 1920px) { ... }

      "3xl": "1996px",
      // => @media (min-width: 1996px) { ... }

      "4xl": "2200px",
      // => @media (min-width: 2200px) { ... }

      "5xl": "2400px",
      // => @media (min-width: 2200px) { ... }
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      heading: ["Vollkorn", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF;",
      locker_primary: {
        xtra_light: "#E7FFEC",
        light: "#D3F2DA",
        DEFAULT: "#3BD0F5",
        dark: "#0F8AA9",
        xtra_dark: "#064353",
      },
      dashboard_primary: {
        xtra_light: "#FFE1D3",
        light: "#FFA177",
        DEFAULT: "#f57137",
        dark: "#F85842",
        xtra_dark: "#AC1C19",
      },
      launchpad_primary: {
        xtra_light: "#FFE9A8",
        light: "#FFD556",
        DEFAULT: "#EFBD28",
        dark: "#F57824",
        xtra_dark: "#BA6400",
      },
      gray: {
        50: "#EEF6FF",
        100: "#E7ECF2",
        200: "#CDD8E4",
        300: "#9EB2C8",
        400: "#748497",
        500: "#4C5E73",
        600: "#2F455C",
        700: "#1D344E",
        800: "#0E2641",
        900: "#081A2E",
        ct: "#549ba8",
        bc: "#0d5168",
        black: "#000000"
      },
      success: {
        light: "#D3F2DA",
        DEFAULT: "#35F694",
        dark: "#0B531F",
      },
      alert: {
        light: "#FFF2D1",
        DEFAULT: "#FFD337",
        dark: "#C66E00",
      },
      error: {
        light: "#FFD9D9",
        DEFAULT: "#FF4D4D",
        dark: "#960A0A",
      },
    },
    extend: {
      fontSize: {
        "2xs": ".675rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      boxShadow: {
        smooth: "0 5px 10px rgba(0, 0, 0, 0.74)",
        locker_primary: "0px 0px 20px rgba(69, 195, 255, 0.20);",
        dashboard_primary: "0px 0px 20px rgba(230, 153, 50, 0.40);",
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "125": "500px",
        "105": "420px",
      },
      maxWidth: {
        "8": "32px",
        "16": "64px",
        "24": "96px",
        "32": "128px",
        "50": "200px",
        "65": "260px",
        "60": "240px",
        "70": "280px",
        "75": "300px",
        "100": "400px",
        "125": "500px",
        "150": "600px",
      },
      minWidth: {
        "75": "300px",
        "100": "400px",
        "125": "500px",
        "150": "600px",
      },
      width: {
        "75": "300px",
        "84": "336px",
        "88": "352px",
        "100": "400px",
        "125": "500px",
        "150": "600px",
        "175": "700px",
        "200": "800px",
        "225": "900px",
        "250": "1000px",
      },
      height: {
        "75": "300px",
        "84": "336px",
        "86": "344px",
        "88": "352px",
        "100": "400px",
        "125": "500px",
        "140": "560px",
        "142": "568px",
        "150": "600px",
        "154": "616px",
        "162": "648px",
        "164": "664px",
        "175": "700px",
        "200": "800px",
        "225": "900px",
        "250": "1000px",
      },
      minHeight: {
        "8": "32px",
        "16": "64px",
        "24": "96px",
        "32": "128px",
        "50": "200px",
        "60": "240px",
        "75": "300px",
        "84": "336px",
        "86": "344px",
        "88": "352px",
        "100": "400px",
        "125": "500px",
        "140": "560px",
        "142": "568px",
        "150": "600px",
        "154": "616px",
        "162": "648px",
        "164": "664px",
        "175": "700px",
        "200": "800px",
      },
      spacing: {
        "17.5": "70px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
