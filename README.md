# Sherlock

## Setup

### Database
Sherlock uses [MongoDB](https://www.mongodb.com/) as its database connection, implementing [Mongoose](https://mongoosejs.com/) to interact with with Mongo. This connection is done through two environment variables, found in the `.env.example` file: `DB_NAME` and `DB_URI`. You can generate the `DB_URI` from the free trier on the MongoDB website.

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