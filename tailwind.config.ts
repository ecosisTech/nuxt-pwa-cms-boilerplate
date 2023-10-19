export default {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          "primary": "#66cc8a",
          "secondary": "#377cfb",
          "accent": "#ea5234",
          "neutral": "#333c4d",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#66cc8a",
          "secondary": "#377cfb",
          "accent": "#ea5234",
          "neutral": "#E5E6E6",
          "base-100": "#1A1919",
          "base-200": "#0D0D0D",
          "base-300": "#000000",
          "base-content": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  }
}
