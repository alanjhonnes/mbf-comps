module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.spec.json"
    }
  },
  setupFilesAfterEnv: ['./jest-setup.ts'],
  roots: ["<rootDir>/projects"],
  collectCoverageFrom: ["projects/**/src/lib/**/*.ts"],
  testMatch: [
    "**/*.spec.ts",
  ],
  preset: "jest-preset-angular",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  coveragePathIgnorePatterns: [
    ".*(spec|const|config|mock|module|public-api|index|mock|model|stories).ts",
    "dist"
  ],
  modulePathIgnorePatterns: [
    "dist"
  ],
};
