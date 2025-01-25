import { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
};

export default config;
