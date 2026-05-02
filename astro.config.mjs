// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://bradpreston.com',
  trailingSlash: "ignore",
  integrations: [mdx(), icon()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto',
      cssVariable: '--roboto',
      weights: [400, 500, 700, 900],
      styles: ['italic', 'normal']
    }
  ]
});