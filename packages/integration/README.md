# Integration Tests

### 🚨 My test stuck, what should I do?

`ts-jest` unluckily, is a very sensitive tool. If our TypeScript code contains any warning or any error, then `jest` will freeze. Furthermore, we don't see any information about that on the console. To debug that problem we should set the environment variable [TS_JEST_LOG](https://kulshekhar.github.io/ts-jest/docs/debugging/).

Linux/MacOS:

`export TS_JEST_LOG=ts-jest.log`

Now we can run tests:

`yarn run test`

After that, in `ts-jest.log` file you can find `TSError` phrase. Here you will find TypeScript errors.
