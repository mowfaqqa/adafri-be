
# Campaign Management API

## Overview
The Campaign Management API is a RESTful API that allows users to create, retrieve, update, and delete advertising campaigns. It also provides the ability to fetch real-time performance statistics for each campaign by integrating with an external advertising platform.

## Data Structure
Each campaign has the following fields:

- **title**: The name of the campaign
- **budget**: The amount allocated for the campaign
- **startDate**: The start date of the campaign
- **endDate**: The end date of the campaign
- **status**: The status of the campaign (either `"active"` or `"inactive"`)
- **statistics**: Performance metrics for the campaign, including impressions, clicks, and ctr (click-through rate)
- **platformId**: An optional identifier used to fetch real-time statistics from an external advertising platform

## Endpoints

### Create a New Campaign
- **POST** `/api/campaigns`
- Requires `title`, `budget`, `startDate`, and `endDate` in the request body
- Returns the created campaign object

### Retrieve All Campaigns
- **GET** `/api/campaigns`
- Returns an array of campaign objects

### Retrieve a Specific Campaign
- **GET** `/api/campaigns/:id`
- Retrieves the details of a specific campaign
- If the campaign has a `platformId`, the API will fetch real-time statistics from the external platform and update the campaign's `statistics` field
- Returns the campaign object

### Update an Existing Campaign
- **PUT** `/api/campaigns/:id`
- Requires `title`, `budget`, `startDate`, and `endDate` in the request body
- Returns the updated campaign object

### Delete a Campaign
- **DELETE** `/api/campaigns/:id`
- Deletes a campaign
- Returns an empty object

## Error Handling
The API provides comprehensive error handling, including:
- **Validation errors** (e.g., missing required fields, invalid dates)
- **Resource not found errors** (e.g., campaign not found)
- **General server errors**

Errors are returned with appropriate HTTP status codes and a consistent response format.

## External API Integration
The API integrates with an external advertising platform to fetch real-time campaign performance statistics. The `AdPlatformService` class handles the integration, and the `GET /api/campaigns/:id` endpoint uses this service to update the campaign's `statistics` field.

## Running the API

1. **Install dependencies**:
   ```bash
   npm install express mongoose dotenv
   ```

2. **Create a `.env` file** with the MongoDB connection string:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

3. **Run the server**:
   ```bash
   node app.js
   ```

The API will start running on the specified port (default is 3000).