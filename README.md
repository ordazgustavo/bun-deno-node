# Objective

The objective of this project is to benchmark bun, deno and node to get real performance data

# Benchmarks

Hello World:

Just a `console.log('hi');`

| Command                         |  Mean [ms] | Min [ms] | Max [ms] |    Relative |
| :------------------------------ | ---------: | -------: | -------: | ----------: |
| `node hello.js`                 | 29.5 ± 0.3 |     28.7 |     30.9 | 4.34 ± 0.15 |
| `bun hello.js`                  |  6.8 ± 0.2 |      6.2 |      8.2 |        1.00 |
| `deno run --allow-all hello.js` | 15.1 ± 0.2 |     14.4 |     16.3 | 2.22 ± 0.08 |

TypeScript API typecheck:

Uses the TypeScript API to typecheck multiple files located in the [test-files](./test-files) directory

| Command                         |    Mean [ms] | Min [ms] | Max [ms] |    Relative |
| :------------------------------ | -----------: | -------: | -------: | ----------: |
| `node index.js`                 |  833.4 ± 3.8 |    825.6 |    839.4 | 1.01 ± 0.04 |
| `bun index.js`                  |  972.7 ± 3.7 |    965.4 |    977.2 | 1.17 ± 0.05 |
| `deno run --allow-all index.js` | 827.8 ± 35.9 |    797.4 |    874.1 |        1.00 |
