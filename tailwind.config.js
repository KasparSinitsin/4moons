module.exports = {
    content: ['./**/*.{html,js}', './index.html', './bird.html', './dragon.html', './tiger.html', './tortoise.html'],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Noto Serif', 'serif'],
          noto: ['Noto Sans', 'sans-serif'],
          hina: ['Hina Mincho', 'serif'], 
        },
      },
    },
    plugins: [],
  }