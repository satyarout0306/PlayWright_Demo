# Playwright POM Framework for Sauce Demo Checkout Flow

## Overview

This project contains a Playwright Page Object Model (POM) framework designed to automate the checkout flow on the Sauce Demo website. The test suite covers the scenario of a user selecting items and completing a successful checkout. The framework is built using TypeScript.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name


## Install Dependencies:
    ```sh
    npm install 
    ```

## Project Structure

├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── CompletePage.ts
├── tests
│   └── login.test.ts
├── utils
│   ├── constants.ts
│   └── testConfig.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json

	•	tests/: Contains the test files.
	•	pages/: Contains the Page Object Model (POM) classes.
	•	utils/constants.ts: Contains constants such as URLs and credentials.
	•	utils/testConfig.ts: test configuration file.
    •	playwright.config.ts: Playwright configuration file.
    •	package.json: Define project dependencies.


## Running Tests

To run the tests, use the following command:
  ``` sh 
    npx playwright test 
 ```
This will execute all the tests in the project.

## Reporting

To generate and view the test report:

    ```sh
    npx playwright show-report
    ```

## Additional Resources

    [Playwright Documentation](https://playwright.dev/docs/intro).
    [TypeScript Documentation](https://www.typescriptlang.org/docs/).

