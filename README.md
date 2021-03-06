# Feedback Form

Feedback form allowing an organization to survey participants, customers, students etc. It uses radio buttons for 1-5 ratings and textfield for comment. After each step is completed the user is routed to the next step and results are submited once all steps are completed. Survey results persist in a postgreSQL database and are accssesed through an admin route.

## Built With

* React.js
* Redux
* React-router-dom
* Material-ui
* Node.js
* Axios
* Express
* PG
* PostgreSQL with postico

## Getting Started
Run things locally, in a development environment.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL client like Postico](https://eggerapps.at/postico/)
- [Nodemon](https://nodemon.io/)


### Installing

1. Download repo
2. Create database called 'feedback_form' and run queries in data.sql file
3. Install dependancies 
`npm install`
4. Start express server 
`npm run server`
5. Start react deployment server
`npm run client`
6. Navigate to http://localhost:3000/


## Screen Shot

![screenshot1](/screenshots/screenshot1.png)
![screenshot2](/screenshots/screenshot2.png)

### Completed Features

High level list of items completed.

- [x] Hash routing between steps
- [x] /#/admin route for results display
- [x] Database connection through REST api

### Next Steps

- [ ] Delete of survey results
- [ ] Ability for survey participant to edit answers before submission
- [ ] Protected routes and authentication
