# ix-learn-typescript

Tutorial inspired by the iX special 2020 - Typescript.

The code can be executed against a real API brought by [https://reqres.in](https://reqres.in).

## Requirements & Setup

* install `node` from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* optional: install `nvm` from [https://github.com/nvm-sh/](https://github.com/nvm-sh/)


## Initialization from scratch

Install typescript using the node package manager `npm`

```
mkdir ix-learn-typescript
cd ix-learn-typescript
npm init -y
npm install typescript
````

install the `tsconfig.json` file with `npx`. In contrast to `npm`, `npx` executes packages.
```
npx tsc --init
```

install node-fetch and types for node-fetch
```
npm install node-fetch
npm install --save-dev @types/node-fetch
```

## Use the existing repository

```
npm install
```

## Compiling and executing

Compile the source:
```
npx tsc
```

Set the compiler to watch mode
```
npx tsc --watch
```

Execute the transpiled program
```
node dist/sample.js
```

