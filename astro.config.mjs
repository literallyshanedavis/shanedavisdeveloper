import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://shanedavis.co.uk',
  output: 'static',
  adapter: vercelServerless(),
});