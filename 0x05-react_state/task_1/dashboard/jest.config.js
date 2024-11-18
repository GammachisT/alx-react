module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/(?!cheerio)', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
};
