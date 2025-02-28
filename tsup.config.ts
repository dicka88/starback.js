import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/starback.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  globalName: "Starback",
  platform: "browser",
  format: ['cjs','esm','iife']
})
