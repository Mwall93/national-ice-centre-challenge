# Local Development

1. `npm i` within the application to install dependencies
2. run with `npm run dev`

# Requirements

1.  create 3 separate pages that display:

- All events (https://motorpointarenanottingham.com/whats-on/)
- Panthers’ games (https://motorpointarenanottingham.com/nottingham-panthers-
  tickets/)
- Hospitality events (https://motorpointarenanottingham.com/hospitality-experiences/)
<!-- I didn't implement the hospitality events page, as it was slightly vague as to what should be included. I instead focused on other functionality and the other two pages. -->

2. On the “all events” page, the end user should be able to filter the results by category, month,
   and event name.

3. All events must respect their on-sale and off-sale dates.
<!-- I didn't get a chance to add this within time constraints. However, ideally, I believe this should be handled by the BE API rather than FE-->

4. Events with multiple dates must only appear once.

- each date displayed in the following format: Fri 8, Sat 9 & Sun 10 March 2024.
- On the Panthers event listing page, dates should be displayed in this format: 4pm – Sun 11 February 2024.

5. A back-end system that automatically fetches the list of events taking place via the API - GET https://whatson.motorpointarenanottingham.com/api/challenge

- Place this response into some form of caching system (e.g.Redis)
- the front-end should load the cached response rather than calling the API each time
<!-- As I've been using my work laptop for this, I couldn't get a redis implementation setup. I've used local storage, which isn't ideal as it's not shared across multiple sessions, however the implementation in the fetch is similar. -->

# Non-functional requirements

1. Each event listing should be displayed in a very user-friendly way, clearly presenting the event
   information and dates in a readable format.
2. The back-end should convert the response from the API into a more usable and developer friendly format.
<!-- I didn't format the response beyond mapping to a new type (Event) as I wasn't sure what would be relevant later -->

- This formatted copy should be stored in cache (e.g. Redis) for later front-end use

3. Create an endpoint that has auth to get the formatted Ticketek data from the cache. The API keys should be stored in either cache or in a database and should be checked before returning a response.
<!-- Created a proxied request for accessing the API. Ideally I'd set up the API key in something like AWS secrets manager. For now, it's in a .env under "API_KEY" (not committed). -->
4. Logs should also be taken for auditing purposes.
<!-- I wasn't sure of an appropriate logging library which I could use for this, so this hasn't been included. -->

# Out of scope

- Header
- Footer

# Notes

- colors: #004996, #d2430f, #f9f9f9,
- To authenticate with the API, you will need to pass “X-API-Key”
- You will need to generate the link for the event, this can be achieved by passing the “content_id” field to this URL: https://tickets.motorpointarenanottingham.com/shows/Show.aspx?sh={event.content_id }
- To get the images of an event, prepend the following: https://d2gloyfobyb8yo.cloudfront.net/dbimages/ - e.g. https://d2gloyfobyb8yo.cloudfront.net/dbimages/sfx17373.jpg

Assessed Skills

- Next.js / React.js / JavaScript / TypeScript understanding
- API management
- UI & UX skills
- NPM package usage
- Understanding of our brand and business
- Project management through use of Git
- Data presentation (?)
- Documentation skills (?)
- Docker skills (?)
- SASS & BEM knowledge (?)
- Deployment skills (?)

# Future Improvements

1. Unit testing

# Notes to Reviewer

- Due to developing on my work laptop, which doesn't allow me to connect to my personal GH account, everything is in a single commit. This wouldn't be my typical way of working

