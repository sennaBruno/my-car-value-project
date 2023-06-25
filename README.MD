# My car value

This is a simple project to predict the value of a car based on its features and values.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```

## Usage

To install the dependencies, run the following command:

```bash
npm install
```

To setup the database, run the following command:

```bash
npm run typeorm migration:generate -- -n initial-schema -o
```

To run the database, run the following command:

```bash
npm run typeorm migration:run
```

To run the project, run the following command:

```bash
npm run start:dev
```

To run the tests, run the following command:

```bash
npm run test
```

## Using the API

To use the API, you can use the the files inside the app folder that ends with .http.
You can use the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for VSCode to run the requests.

OR

Simple use postmen or insomnia to run the requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)
