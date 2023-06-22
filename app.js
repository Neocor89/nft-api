const express = require("express");
const cors = require("cors");

//: CREATING ROUTES
const nftRouter = require("./Api/Routers/nftRouter");
const userRouter = require("./Api/Routers/userRouter");

//: IMPLEMENTING MIDDLEWARE
const app = express();
app.use(express.json({ limit: "100kb" }));

app.use(cors());
app.options("*", cors());

//: IMPLEMENTING ROUTES
app.use("/api/v1/NFTs", nftRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
