const validateCampaign = (req, res, next) => {
  const { title, budget, startDate, endDate } = req.body;

  if (!title || !budget || !startDate || !endDate) {
    return res.status(400).json({
      success: false,
      error: "Please provide all required fields",
    });
  }

  if (new Date(startDate) > new Date(endDate)) {
    return res.status(400).json({
      success: false,
      error: "End date must be after start date",
    });
  }

  next();
};

module.exports = validateCampaign;
