# Scylla Cloud Playwright Testing

 Automated tests for Scylla web app

## Overview

This project contains automated front-end tests for Scylla Cloud, focusing on user interaction and functionality verification using Playwright with TypeScript.

## Setup

- Install Playwright and TypeScript.
- Clone the repository or extract the `.zip` file.
- Create a user at [Scylla Cloud](https://cloud.scylladb.com/account/login) if needed.
- Store user credentials in `userData.json`.
- Navigate to the project directory in the terminal.
- Run `npm install` to initialize the project.

## Test Features

1. **User Login**: Validates user authentication process.
2. **New Cluster Creation - Name input check**: Tests the process of creating new clusters including name validation with an alphanumeric and special characters.
3. **New Cluster Creation - Missing name input and navigation check**: Tests the process of creating new cluster and validations for name prerequsites.
4. **New Cluster Creation - Region Pricing**: Verifies if the pricing changes appropriately when different regions are selected.

## Development decisions

- Testing files are stored in the `e2e-tests` directory in `login.spec.ts` & `newCluster.spec.ts` files
- All testing utilities that follow POM (locator, action, assertion functions) are stored in `pages` directory in `login.ts`, `newCluster.ts` and `home.ts` files
- By default playwright has three major browsers enabled for running tests in the `playwright.config.ts` file but I commented out all exepct chromium for a faster development process. This can be uncommented any time.
- Credentials for login are stored in `userData.json` that I added to `.gitignore` becasue they are private data. But they can easily be recreated by following the this structure:

```json
{
  "username": "user@email.com",
  "password": "xxxxxxxxxxxxxx"
}
```

## Running the Tests

- Use `npx playwright test` to execute the tests.
- If you want more control, run `npx playwright test` in terminal with sufix options  --headed or --debug or --ui to have more control and visibility of what is being tested, eg.: `npx playwright test --ui`

## Additional Notes

- Utilization of POM (Page Object Model) for structured and maintainable tests has been followed as much as possible.
- `Node.js` version that was used with this project is `^v20.9.0`
- `@playwright/test` version that was used with this project is `1.40.1`

Refer to individual test files for specific scenarios and implementations.
