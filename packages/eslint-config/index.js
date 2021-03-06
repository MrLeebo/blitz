module.exports = {
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y", "cypress"],
  rules: {
    "import/no-anonymous-default-export": "error",
    "import/no-webpack-loader-syntax": "off",
    "react/react-in-jsx-scope": "off", // React is always in scope with Blitz
    "jsx-a11y/anchor-is-valid": "off", //Doesn't play well with Blitz/Next <Link> usage
    "jsx-a11y/label-has-associated-control": "off", //Doesn't play well with form libraries
  },
  env: {
    es2020: true,
    "cypress/globals": true,
  },
  ignorePatterns: [".next/", ".blitz/"],
}
