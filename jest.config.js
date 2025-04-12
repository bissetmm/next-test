// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!(react|next)/)"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testMatch: [
    "<rootDir>/app/**/__tests__/**/*.test.[jt]s?(x)",
    "<rootDir>/app/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
};
