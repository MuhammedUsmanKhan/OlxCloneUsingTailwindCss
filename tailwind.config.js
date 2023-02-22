/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.html"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.9rem',
      },
      screens: {
        // 'tablet': '640px',
        // // => @media (min-width: 640px) { ... }
  
        // 'laptop': '1024px',
        // // => @media (min-width: 1024px) { ... }
          // 'md':'769px',
        // 'desktop': '1280px',
        // // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'borderimage': "url('/main/images/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg')",
        'PlusImage': "url('/main/images/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg')",
      }
    },
  },
  plugins: [],
}
