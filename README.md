### 📝 Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 20.11.0** installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

TypeScript will be added as a local dependency to the project, so no need to install it.

### 👷 Installation

```shell
npm install
```

## 🎉 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

> 🚩 **Note**
>
> The app will run on port `8080` (frontend). Please make sure there are no other applications or services running on both ports.
>
> Exercise 1: http://localhost:8080/exercise1
> Exercise 2: http://localhost:8080/exercise2

### ⚗️ How to run the component tests

#### 1 - Start Testing with Cypress

Use the next comand to start the cypress test runner:

```shell
npm run cypress:open
```

#### 2 - Choose mode in Cypress Panel

![Choose mode in Cypress Panel]([readme-resources/firstStep](https://github.com/ajvs0003/mango-technical-test/blob/main/readme-resources/firstStep.png))

#### 3 - Choose the browser

![Choose the browser](https://github.com/ajvs0003/mango-technical-test/blob/main/readme-resources/second-step.png)

#### 4 - Choose the test to run

![Run the tests]([readme-resources/firstStep](https://github.com/ajvs0003/mango-technical-test/blob/main/readme-resources/last-step.png))

> 🚩 **Note**
>
> The test are in the folder `cypress/component` and the test files are named `Range.spec.tsx` and `RangeWithFloats.spec.ts`.

## 🗃️ Additional NPM Scripts

| Script | Description                   |
| ------ | ----------------------------- |
| build  | Start build project with next |
| lint   | Starts lint                   |
