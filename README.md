This is a web application for traditional dough dishes. The project was developed for the course Angular.

## Installation Guide
### Prerequisites
- Angular CLI
- Node.js
- MongoDB

# USAGE
Consists of two main directories server and client side.
1. Open a terminal and navigate to the server directory using the command `cd server`.
2. Run `npm install` to install all the necessary dependencies from `package.json` files for the server side.
3. Run the command `npm start` to start the server. The server will run on http://localhost:5000
4. Open a new terminal and navigate to the client directory using the command `cd client`.
5. Run `npm install` to install all the necessary dependencies from `package.json` files for the client side.
6. Run the command `ng serve` to start the client. 
When the client setup is complete you can open the following link in your web browser: http://localhost:4200

# API Endpoints
Base URL http://localhost:5000/api. You make the requests to the following endpoints:
## 1.Login
 POST  /user/login
 Request:
 {
    "email": "string",
    "password": "string"
}

## 2. Register
Create a new user by sending a 
POST  /user/register
Request:
{
    "firstName": "string",
    "lastName": "string",
    "username": "string",
    "email": "string",
    "avatar": "string",
    "password": "string"
}

## 3. Logout
Send an authorized GET request to /user/logout.

## 4. Get User Details
Send an authorized GET request to /user/profile.

## 5. Data  Product management
  ### READ 
  An end point is revealed at /catalog, which grants access to information, stored on the service. GET requests to the service will return the following responses:
  GET /catalog - array of all entries in target collection; will return 404 if collection does not exist
  GET /catalog/:id - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response

  ### CREATE
  This request requires authorization.
  Send POST request to /catalog/create to create new entry. ID will be generated automatically.

  ### UPDATE
  This request requires authorization. Only the owner of the resource can edit it.
  Send PUT request to /catalog/:id/edit to update a single entry. Note that the existing entry will be replaced!

  ### DELETE
  This request requires authorization. Only the owner of the resource can delete it.
  Send DELETE request to /catalog/:id to delete a single entry.

## 6. Data Comments management
 ### READ 
  An end point is revealed at /comment, which grants access to information, stored on the service. GET requests to the service will return the following responses:
  GET /comment - array of all entries in target collection; will return 404 if collection does not exist
  GET /comment/:id/details - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response

   ### CREATE
  This request requires authorization.
  Send POST request to /comment/create to create new entry. ID will be generated automatically.

   ### UPDATE
  This request requires authorization. Only the owner of the resource can edit it.
  Send PUT request to /comment/:id/edit to update a single entry. Note that the existing entry will be replaced!

   ### DELETE
  This request requires authorization. Only the owner of the resource can delete it.
  Send DELETE request to /comment/:id to delete a single entry.

  ## 7. Data Prrofile management
 ### READ 
  An end point is revealed at /user, which grants access to information, stored on the service. GET requests to the service will return the following responses:
  GET /user/my-profile/:id - array of all entries in target collection; will return 404 if collection does not exist

   ### UPDATE
  This request requires authorization. Only the owner of the resource can edit it.
  Send PUT request to /user/my-profile/:id  to update a single entry. Note that the existing entry will be replaced!

 ## 8. Search
 ### READ 
  GET /catalog/search- Retrieves search results.

