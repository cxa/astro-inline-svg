/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
