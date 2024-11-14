// Overview
The campaign management API is a RESTful API that allows users to create, retrieve, update, and delete advertising campaigns. It also provides the ability to fetch real-time performance statistics for each campaign by integrating with an external advertising platform.
 Data Structure
 Each campaign has the following fields:

 title: The name of the campaign
 budget: The amount allocated for the campaign
 startDate: The start date of the campaign
 endDate: The end date of the campaign
 status: The status of the campaign (either "active" or "inactive")
 statistics: Performance metrics for the campaign, including impressions, clicks, and ctr (click-through rate)
 platformId: An optional identifier used to fetch real-time statistics from an external advertising platform

 Endpoints

 POST /api/campaigns

 Create a new campaign
 Requires title, budget, startDate, and endDate in the request body
 Returns the created campaign object

 GET /api/campaigns

 Retrieve a list of all campaigns
 Returns an array of campaign objects

 GET /api/campaigns/:id

 Retrieve the details of a specific campaign
 If the campaign has a platformId, the API will fetch real-time statistics from the external platform and update the campaign's statistics field
 Returns the campaign object

 PUT /api/campaigns/:id

 Update an existing campaign
 Requires title, budget, startDate, and endDate in the request body
 Returns the updated campaign object

 DELETE /api/campaigns/:id

 Delete a campaign
 Returns an empty object

 Error Handling
 The API provides comprehensive error handling, including:

 Validation errors (e.g., missing required fields, invalid dates)
 Resource not found errors (e.g., campaign not found)
 General server errors

 Errors are returned with appropriate HTTP status codes and a consistent response format.
 External API Integration
 The API integrates with an external advertising platform to fetch real-time campaign performance statistics. The AdPlatformService class handles the integration, and the getCampaign endpoint uses this service to update the campaign's statistics field.
 Running the API

 Install dependencies: npm install express mongoose dotenv
 Create a .env file with the MongoDB connection string:
 CopyMONGODB_URI=your_mongodb_connection_string
 PORT=3000

 Run the server: node app.js

 The API will start running on the specified port (default is 3000).
