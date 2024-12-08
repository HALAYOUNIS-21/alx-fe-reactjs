module.exports = {
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
  };