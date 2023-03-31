/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'hippie-blue': '#4D96A9',
        violet: '#855FB1',
        'dark-blue': '#28283D',
        gray: '#87879D',
        aqua: '#8FE3F9',
        'light-purple': '#D9B8FF',
        'snow-white': '#FAFAFA',
        'blue-hover': '#71C0D4',
        'purple-hover': '#B18BDD'
      },
      borderRadius: {
        btn: '29px',
        image: '8px'
      }
    },
    fontSize: {
      h1: '4rem',
      h2: '2.5rem',
      body: '1.125rem'
    },
    lineHeight: {
      h1: '4rem',
      h2: '2.75rem',
      body: '1.625rem'
    },
    letterSpacing: {
      overline: '4px'
    },
    backgroundImage: {
      footer: 'url("/mobile/image-footer.jpg")',
      'footer-tablet': 'url("/tablet/image-footer.jpg")',
      'footer-desktop': 'url("/desktop/image-footer.jpg")'
    },
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif']
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
