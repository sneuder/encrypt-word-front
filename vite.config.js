import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/main.ts',
        index: './src/page/index.html',
        form: './src/components/form/index.html',
        input: './src/components/input/index.html',
        textarea: './src/components/textarea/index.html',
        notification: './src/components/notification/index.html',
        tab: './src/components/tab/index.html',
      },
    },
  },
})
