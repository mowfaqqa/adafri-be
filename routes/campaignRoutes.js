const express = require("express");
const router = express.Router();
const {
  createCampaign,
  getCampaigns,
  getSingleCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");
const validateCampaign = require("../middleware/validate");

router.post("/campaigns", validateCampaign, createCampaign);
router.get("/campaigns", getCampaigns);
router.get("/campaigns/:id", getSingleCampaign);
router.put("/campaigns/:id", validateCampaign, updateCampaign);
router.delete("/campaigns/:id", deleteCampaign);

module.exports = router;
