const express = require("express");
const nftController = require("../Controllers/nftController");
const router = express.Router();

//: GET ALL NFTS AND POST REQUEST ON THE SAME ROUTER
router.route("/").get(nftController.getAllNfts).post(nftController.createNft);

router.route("/:id").get(nftController.getNft);

module.exports = router;