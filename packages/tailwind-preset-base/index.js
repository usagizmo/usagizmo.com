module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // When not using Web fonts
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Yu Gothic", YuGothic, "BIZ UDPGothic", Meiryo, sans-serif',
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", Meiryo, sans-serif',
        sans: 'Jost, Inter, yakuhanjp_Noto, Noto Sans JP, sans-serif',
        mono: 'Source Code Pro, Noto Sans JP, monospace',
        keycode: 'Lucida Grande',
      },
    },
    colors: {
      background: 'rgb(var(--color-background) / <alpha-value>)',
      divider: 'rgb(var(--color-divider) / <alpha-value>)',
      text: 'rgb(var(--color-text) / <alpha-value>)',
      subtext: 'rgb(var(--color-subtext) / <alpha-value>)',
      'text-link': 'rgb(var(--color-text-link) / <alpha-value>)',
    },
  },

  plugins: [],
};
