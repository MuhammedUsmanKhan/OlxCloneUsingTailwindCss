/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.html"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.9rem',
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        // 'display': ['Oswald', ...],
        // 'body': ['"Open Sans"', ...],
      },
      backgroundImage: {
        'borderimage': "url('/main/images/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg')",
        'PlusImage': "url('/main/images/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg')",
        'logoOfGreatersymbol':"url('/main/images/greatersignicon.svg')",
        'BacktoTopicon':"url('/main/images/backToTopIcon_noinline.7b82f4f094ade4510834eaf20d4ce5ab.svg')",
      }
    },
  },
  plugins: [],
}
