# AI usage

I used AI a lot on TripList, and I want to be honest about that. Claude helped me
with the first wireframe ideas. GitHub Copilot did most of the coding. When
Copilot gave me something I did not understand, I asked GPT to explain it.

The final calls were mine. the design, the colors, where things go, and how the
trip planning flows.

## 1. How I used AI

### 2026-09-23 - Wireframe ideas and city home screen

- **Tool:** Claude for the first wireframe, then GitHub Copilot to build the screen.
- **What I asked for:** Wireframe ideas. I also told it where I wanted things to
  go. Then I asked Copilot to build the home screen and adjust it.
- **What it gave back:** A starting layout and a home screen about Angeles City.
- **What I kept, what I changed, and why:** I used the ideas as a starting point.
  Then I picked the colors, where things sit, and the flow myself.
- **Commit:** https://github.com/brammms/TripList/commit/702f48a

### 2026-09-23 - Destination status and map integration

- **Tool:** GitHub Copilot.
- **What I asked for:** I wanted every destination to have a status: Next, OTW, or
  Done. I also said Google Maps was important to me.
- **What it gave back:** Status buttons, saved statuses, map pins, and the code
  that connects the map.
- **What I kept, what I changed, and why:** I kept the status flow and the map
  because they help you plan a trip in order.
- **Commit:** https://github.com/brammms/TripList/commit/4c7618f

### 2026-09-23 - Improve the trip map display

- **Tool:** GitHub Copilot.
- **What I asked for:** A UI that matched better, and a map preview where the pins
  show the names of the places.
- **What it gave back:** New styling for the map and the trip page, plus changes
  to the destination and map components.
- **What I kept, what I changed, and why:** I kept asking for layout changes until
  the map worked together with the trip details and did not feel like a
  separate thing.
- **Commit:** https://github.com/brammms/TripList/commit/26b1127

### 2026-09-23 - Add a map location to destinations

- **Tool:** GitHub Copilot.
- **What I asked for:** A way to pick a place on the map and add it to the trip's
  destinations.
- **What it gave back:** A flow where you pick a spot, it looks up the place
  details, and then it adds that place to the trip.
- **What I kept, what I changed, and why:** I kept it because adding a place
  straight from the map fits the trip guide I wanted to make.
- **Commit:** https://github.com/brammms/TripList/commit/26b1127

### 2026-09-24 - Match the map to the trip details

- **Tool:** GitHub Copilot.
- **What I asked for:** I wanted the map to line up with the destinations,
  activities, and trip notes. After that I asked to make it bigger.
- **What it gave back:** A wider map column, with the map styled to sit next to
  the trip planning info.
- **What I kept, what I changed, and why:** I kept adjusting the size and layout
  because the map is a main part of the guide.
- **Commit:** https://github.com/brammms/TripList/commit/2b6414a

### 2026-09-24 - Make empty trip maps useful

- **Tool:** GitHub Copilot.
- **What I asked for:** What should users see on the map when a trip has no
  destinations yet? I wanted famous places they could visit.
- **What it gave back:** A map centered on Angeles City with pins for famous
  places, and a list where users can add them.
- **What I kept, what I changed, and why:** I kept it so a new trip does not open
  to a blank map.
- **Commit:** https://github.com/brammms/TripList/commit/26fb1c3

### 2026-09-24 - Improve the trip cards

- **Tool:** GitHub Copilot.
- **What I asked for:** Trip cards that feel less plain, with backgrounds that fit
  Angeles City and travel.
- **What it gave back:** Pictures of places and more trip details on the cards.
- **What I kept, what I changed, and why:** I kept the changes that made trips
  easier to recognize and made the list feel less empty.
- **Commit:** https://github.com/brammms/TripList/commit/97e0c3d

### 2026-10-06 - Explain and fix the map fallback

- **Tool:** GitHub Copilot. I also used GPT when I did not understand a suggestion.
- **What I asked for:** Why the map was not showing. I said I needed the real map
  in the trip screen.
- **What it gave back:** First it talked about the missing Google Maps key and a
  text-only fallback. After I pushed back, it changed the trip screen to show an
  embedded map.
- **What I kept, what I changed, and why:** I kept the map inside the app, in the
  map area. TripList is supposed to guide you through a trip, not only list
  places.
- **Commit:** https://github.com/brammms/TripList/commit/d8f2f77

## 2. Where the AI got it wrong

### Case 1 - The first UI did not fit my idea

- **What it gave me:** An early UI suggestion that I tried out.
- **What was wrong with it:** It felt plain, and it did not look like what I had
  in mind.
- **What I did instead:** I told Copilot what to change in the layout and the
  city design. I picked the final colors and placement myself.
- **Commit:** https://github.com/brammms/TripList/commit/702f48a

### Case 2 - The map fallback was not enough

- **What it gave me:** It treated the missing map as a setup problem, and it
  showed a fallback instead of the map in the trip screen.
- **What was wrong with it:** I wanted the map to be part of the guide screen, not
  just a message or a separate link.
- **What I did instead:** I told it the map had to show in the map area. After
  that, the screen was changed to show an embedded map.
- **Commit:** https://github.com/brammms/TripList/commit/d8f2f77

### Case 3 - The empty starter trip was still not useful

- **What it gave me:** At first it said the empty map was just a browser storage
  difference in the copied project.
- **What was wrong with it:** That explanation did not fix anything. A fresh copy
  of the project still opened with an empty starter trip.
- **What I did instead:** I told it that it still was not working. Then the
  starter trip data was fixed, so the first run has example places with map
  coordinates.
- **Commit:** https://github.com/brammms/TripList/commit/7ef398e

## 3. Who wrote what

The design, the colors, where things go, and the trip flow are my decisions. Here
is the code I wrote myself, and one part that the AI wrote that I understand.

### Written by me

- **File:** `client/src/components/organisms/TripMap.jsx` (my contribution was
  deciding and testing how the map should work; Copilot helped write the code)
- **Commit:** https://github.com/brammms/TripList/commit/d8f2f77
- **What it does and why it is built this way:** I wanted the map to appear in
  the trip screen and help users follow their destinations. When the first
  version showed a fallback instead of the map, I tested it and asked for the
  map to appear directly in its area. I chose this behavior because TripList is
  meant to guide a trip, not only list places. Copilot helped implement the
  code, so I am describing my design and testing work, not claiming I wrote the
  whole file by hand.

### The AI-written part I understand best

- **File:** client/src/components/organisms/TripMap.jsx
- **Commit:** https://github.com/brammms/TripList/commit/d8f2f77
- **What it does and why we kept it:** It shows the map area on the trip page and
  the places that belong to the trip. I kept it because the map is a big part
  of how TripList guides you through a trip. It also like shows that the system is reliable because I figured and made it work with that. Also it is a very huge help for the users of the system.