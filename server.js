const mongoose = require("mongoose");
const next = require("next");
const dotenv = require("dotenv");

const dev = process.env.NODE_ENV != "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

/*
TODO > ADDING PINATA API KEY AND DOMAIN NAME AND ENV CONFIG 🚨
  : NOW
    dotenv.config({ path: "./config.env" });
  : BEFORE
    dotenv.config();
*/

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successfully!"));

const port = 3000;

let server;
nextServer.prepare().then(() => {
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
