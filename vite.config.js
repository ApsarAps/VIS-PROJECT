import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            fredoka: ['Fredoka', 'sans-serif'],
          },
          colors: {
            primaryBlue: '#0057FF',
            softBlue: '#E3EDFF',
            softPink: '#FDEDEC',
            mintGreen: '#C8FADD',
            lavender: '#F4F6FF',
            softYellow: '#FFF6D3',
            skyBlue: '#D5EAFF',
            black: '#000000',
          },
        },
      },
    })
  ],
})
