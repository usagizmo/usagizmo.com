const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // When not using Web fonts
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Yu Gothic", YuGothic, "BIZ UDPGothic", Meiryo, sans-serif',
        // sans: '-apple-system, blinkMacSystemFont, Helvetica, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "BIZ UDPGothic", Meiryo, sans-serif',
        sans: 'Jost, Inter, yakuhanjp_Noto, Noto Sans JP, sans-serif',
        inter: 'Inter, yakuhanjp_Noto, Noto Sans JP, sans-serif',
        mono: 'Source Code Pro, Noto Sans JP, monospace',
        keycode: 'Lucida Grande',
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        divider: 'rgb(var(--color-divider) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        subtext: 'rgb(var(--color-subtext) / <alpha-value>)',
        'text-link': 'rgb(var(--color-text-link) / <alpha-value>)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // for pre-code
            'pre > code': {
              padding: '0 !important',
              margin: 0,
              color: theme('colors.zinc.100'),
              backgroundColor: 'transparent !important',
            },
            // for image
            'a:has(img) + br': {
              display: 'none',
            },
            'p:has(img)': {
              margin: '40px 0 !important',
              fontSize: 15,
              textAlign: 'center',
              color: theme('colors.zinc.300'),
            },
            // for checkbox
            'li > input[type="checkbox"]': {
              margin: 0,
            },
            'li:has(input[type="checkbox"]:checked)': {
              textDecoration: 'line-through',
              opacity: 0.5,
            },
            'li li': {
              opacity: 1,
            },
          },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('target-blank', '&[target="_blank"]');
    }),
    require('@tailwindcss/typography'),
  ],
};
