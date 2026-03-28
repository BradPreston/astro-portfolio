// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'y17lk0lc',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    studioBasePath: '/admin'
  }), react()],
});