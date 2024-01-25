import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
