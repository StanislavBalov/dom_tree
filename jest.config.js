module.exports = {
  testEnvironment: 'jest-environment-jsdom', // эмуляция браузерного окружения
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // трансформация JS через Babel
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // мок для CSS
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js', // мок для изображений
  },
};
