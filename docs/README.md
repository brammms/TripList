# TripList

## Overview
TripList helps people plan trips around Angeles City, Pampanga. It is made for tourists and anyone unfamiliar with the area, so they can navigate and explore the city more easily.

Live site: https://hau-6apsi.github.io/TripList/

## Setup and installation

**Install first:**
- Node.js 20 or newer
- npm
- PostgreSQL 17
- Git
- A Google Maps API key (restricted to your domain/app)

**Get the code:**

git clone https://github.com/brammms/TripList.git
cd TripList


**Install dependencies:**

cd client
npm install
cd ../server
npm install


**Environment and configuration**

Create `client/.env`:

VITE_USE_MOCK_API=true
VITE_API_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=your_restricted_google_maps_key


Create `server/.env` (or copy from `.env.example`):

DATABASE_URL=postgres://user:password@localhost:5432/triplist
PORT=4000

Never commit a real password, database URL, or API key.

**Set up and seed the database:**

cd server
npm run db:init


## How to run it

**Client only (demo mode, no database needed):**

cd client
npm run dev

Open `http://localhost:5173`. You should see the TripList home screen with a starter trip already loaded.

**Full stack (client + API):**

cd server
npm run dev

The API runs at `http://localhost:4000`. Then set `VITE_USE_MOCK_API=false` in `client/.env` and start the client as above.

## Features and usage
Main features:
- Create a trip
- Add destinations
- Set destination status to Next, OTW, or Done
- View destinations on Google Maps
- Add a destination directly from the map
- Start Google Maps directions to a destination
- Add activities
- Get local suggestions for sisig, coffee, restaurants, breakfast, desserts, and nightlife
- Add trip notes
- Save trip data in the browser

Main user flow:
1. Open the app.
2. Create a trip, or open the starter trip.
3. Add destinations.
4. Set each destination's status.
5. Add activities.
6. Write notes.
7. Open the map to view destinations.
8. Click Start to get directions.

API endpoints: see [server/README.md](https://github.com/brammms/TripList/blob/main/server/README.md) for the full list of routes.

## Project structure

client/ React and Vite front end
server/ Express and PostgreSQL API
docs/ Reports and project documents
compose.yml Local PostgreSQL and API setup
render.yaml Render deployment blueprint


## Screenshots

<img width="1161" height="584" alt="TripList home screen" src="https://github.com/user-attachments/assets/9dd3f218-e79e-426b-b25d-49848c951050" />

<img width="1106" height="860" alt="TripList trip page with map and destinations" src="https://github.com/user-attachments/assets/d7a0c576-d9ac-421c-9875-67bba5fd1696" />

## Known issues and next steps
- The client currently uses browser storage in demo mode.
- The client is connected to the Express API but not fully tested yet.
- PostgreSQL still needs full end-to-end testing.
- Google Maps needs a restricted API key for all live features to work.
- GitHub Pages needs to be enabled on this personal repository (it currently only works on the old class copy).
- The app should be tested on a phone.

Next steps:
- Finish connecting and testing the API and database.
- Confirm Google Maps is fully working.
- Enable GitHub Pages on this repository and test the live site.
- Test the public website.
- Update this README with the confirmed final live link.

---

See [server/README.md](https://github.com/brammms/TripList/blob/main/server/README.md) for API routes and [AI-USAGE.md](https://github.com/brammms/TripList/blob/main/AI-USAGE.md) for AI use.
