/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/pages/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        greenUF: '#256B49',
        greenUF2: '#077059',
        greenUF3: '#05604a',
        greenUF4: '#04503b',
        greenUF5: '#023f2c',
        greenUF6: '#002f1d',
      },
    },
  },
  plugins: [],
}

