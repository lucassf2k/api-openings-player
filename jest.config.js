module.exports = {
  roots: ["<rootDir>/test"],
  collectCoverageFrom: ["<rootDir>/test/**/*.ts"],
  coverageDirectory: "coverage",
  testEnviroment: "node",
  transform: {
    ".+\\.ts$": "ts-node",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/test/$1",
  },
}
