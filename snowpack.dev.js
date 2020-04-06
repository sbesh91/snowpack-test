const configs = {
  "webDependencies": [
    "@codemirror/next/view"
  ],
  "installOptions": {
    "dest": "web_modules",
    "clean": false,
    "optimize": false,
    "babel": false,
    "include": "src/**/*.{js,jsx,ts,tsx}",
    "exclude": ["**/__tests__/*", "**/*.@(spec|test).@(js|mjs)"],
    "strict": true,
    "sourceMap": true,
    "remotePackage": [],
    "remoteUrl": "https://cdn.pika.dev"
  },
  "namedExports": {},
  "dedupe": ["lit-element", "lit-html"],
  "rollup": {
    "plugins": []
  }
};

module.exports = configs