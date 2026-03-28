// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  projectId: 'y17lk0lc',
  dataset: 'production',
  apiVersion: '2026-03-01',
  plugins: [structureTool()],
  schema
})