const Campaign = require("../models/campaign");

// ====================
// Ad Platform Services
// ====================

class AdPlatformService {
  static async getStatistics(id) {
    try {
      // simulated API response
      return {
        impressions: Math.floor(Math.random() * 10000),
        clicks: Math.floor(Math.random() * 1000),
        ctr: Math.random() * 5,
      };
    } catch (error) {}
  }
}
// ==========================================
// Campaign Controller Functions
// ==========================================


const createCampaign = async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({
      success: true,
      count: campaigns?.length,
      data: campaigns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

const getSingleCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({
        success: false,
        error: "campaign not found",
      });
    }

    if (campaign._id) {
      const stats = await AdPlatformService.getStatistics(campaign._id);
      campaign.statistics = stats;
      await campaign.save();
    }

    res.status(200).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const updateCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    const campaign = await Campaign.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!campaign) {
      return res.status(404).json({
        success: false,
        error: "Campaign not found",
      });
    }

    res.status(200).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    const campaign = await Campaign.findByIdAndDelete(id);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        error: "Campaign not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// Update the status of a campaign by ID
updateCampaignStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const campaign = await Campaign.updateStatus(parseInt(id, 10), status);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ error: "Error updating campaign status" });
  }
};

module.exports = {
  createCampaign,
  getCampaigns,
  getSingleCampaign,
  updateCampaign,
  deleteCampaign,
  updateCampaignStatus,
};
