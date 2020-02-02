# Sherlock

## Setup

### Database
Sherlock uses [MongoDB](https://www.mongodb.com/) as its database connection, implementing [Mongoose](https://mongoosejs.com/) to interact with with Mongo. This connection is done through two environment variables, found in the `.env.example` file: `DB_NAME` and `DB_URI`. You can generate the `DB_URI` from the free trier on the MongoDB website.

### Watson
Watson is the command-line interface included with Sherlock. It provides a number of helpful commands that can assist you while you build your application.

#### Migrations
By running `watson.js --migration --create={name}`, you are able to create a migration file, which can then be found in the `./database` folder. The migrations files contain the `name` of the collection, which you are adding to your MongoDB, along with its attributes (instructions of supported Mongoose schema types can be found in the Mongoose [documentation](https://mongoosejs.com/docs/schematypes.html)).

Once created and configured, by running `watson.js --migration --run` Watson will interact with Hudson to create the MongoDB collection and generate a model within the project (these will the be found in `./app/models`). 

### Hudson
Hudson is the wrapper that allows for easy interaction between your application and your MongoDB instants. 

#### Models
All models within a Sherlock project extend the base `Model` module. This uses the schema set on your models to `create`, `delete`, `edit` and `get` MongoDB documents. 

## Assets
To compile assets `run build`.

### Frontend
Sherlock uses [React](https://reactjs.org/) for its frontend code base.

### Styling
By default Sherlock has [Bulma](https://bulma.io/) installed as its CSS framework. 

## Testing
Sherlock uses [mocha](https://mochajs.org/) as its default testing package. An alias for its script has been added to the `package.json`, therefore in order to run the project tests enter `npm test` in the your terminal. 

#### How it works?
Sherlock's tests have been setup to run in the project's `./tests` folder, where you will find an `example` test file. 