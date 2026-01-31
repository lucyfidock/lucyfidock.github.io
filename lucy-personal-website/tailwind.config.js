/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all React files
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'light-wisteria': {
          '50': '#fbf7fc',
          '100': '#f6eff8',
          '200': '#edddf1',
          '300': '#dfc3e4',
          '400': '#d0a4d6',
          '500': '#b577be',
          '600': '#9959a0',
          '700': '#804784',
          '800': '#6a3c6c',
          '900': '#58355a',
          '950': '#371a38',
        },
        'pale-slate': {
            '50': '#f9f9f9',
            '100': '#f4f3f4',
            '200': '#eae9eb',
            '300': '#dbd7db',
            '400': '#c2bcc2',
            '500': '#ada5ad',
            '600': '#988f97',
            '700': '#857c83',
            '800': '#6f686e',
            '900': '#5c565c',
            '950': '#3d383c',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],       // text default
        serif: ['Noto Serif', 'serif'],        // serif default
        heading: ['DM Serif Text', 'serif'],   // header default
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.light-wisteria.600'),
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: '1.7',
            
            // Headings - non-bold
            h1: {
              color: theme('colors.light-wisteria.600'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '400',
              fontSize: '2.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              color: theme('colors.light-wisteria.600'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '400',
              fontSize: '2rem',
              marginTop: '1.75rem',
              marginBottom: '0.875rem',
            },
            h3: {
              color: theme('colors.light-wisteria.600'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '400',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: theme('colors.light-wisteria.600'),
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '400',
              fontSize: '1.25rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            
            // Links
            a: {
              color: theme('colors.light-wisteria.500'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.light-wisteria.600'),
              },
            },
            
            // Paragraphs
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            
            // Lists
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            
            // Code
            code: {
              color: theme('colors.light-wisteria.700'),
              backgroundColor: theme('colors.light-wisteria.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.9em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            
            // Code blocks
            pre: {
              backgroundColor: theme('colors.light-wisteria.100'),
              color: theme('colors.light-wisteria.900'),
              padding: '1rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              fontWeight: '400',
              fontSize: '0.875rem',
            },
            
            // Blockquotes
            blockquote: {
              borderLeftColor: theme('colors.light-wisteria.400'),
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: theme('colors.light-wisteria.600'),
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            
            // Strong/Bold
            strong: {
              color: theme('colors.light-wisteria.700'),
              fontWeight: '700',
            },
            
            // Horizontal rules
            hr: {
              borderColor: theme('colors.light-wisteria.200'),
              marginTop: '2rem',
              marginBottom: '2rem',
            },
          },
        },
        
        // Dark mode styles
        dark: {
          css: {
            color: theme('colors.light-wisteria.300'),
            
            p: {
              color: theme('colors.light-wisteria.300'),
            },
            h1: {
              color: theme('colors.light-wisteria.300'),
            },
            h2: {
              color: theme('colors.light-wisteria.300'),
            },
            h3: {
              color: theme('colors.light-wisteria.300'),
            },
            h4: {
              color: theme('colors.light-wisteria.300'),
            },
            
            a: {
              color: theme('colors.light-wisteria.400'),
              '&:hover': {
                color: theme('colors.light-wisteria.300'),
              },
            },
            
            code: {
              color: theme('colors.light-wisteria.300'),
              backgroundColor: theme('colors.pale-slate.900'),
            },
            
            pre: {
              backgroundColor: theme('colors.pale-slate.900'),
              color: theme('colors.light-wisteria.300'),
            },
            
            blockquote: {
              borderLeftColor: theme('colors.light-wisteria.600'),
              color: theme('colors.light-wisteria.400'),
            },
            
            strong: {
              color: theme('colors.light-wisteria.300'),
            },
            
            hr: {
              borderColor: theme('colors.pale-slate.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}