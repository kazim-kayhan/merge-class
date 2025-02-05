/** @type {import('ts-jest').JestConfigWithTsJest} **/
const config = {
  testEnvironment: 'node',
  transform: {
    '^.+.ts?$': ['ts-jest', {}],
  },
}

export default config
