// Create a file at src/types/tailwindcss-flatten-color-palette.d.ts

declare module 'tailwindcss/lib/util/flattenColorPalette' {
    function flattenColorPalette(palette: any): any;
    export default flattenColorPalette;
  }
  