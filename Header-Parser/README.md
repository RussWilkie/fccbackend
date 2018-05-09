# About Timestamp

Second Free Code Camp Back-End project. 

**User Stories:**
1. Must get IP Address through browser
2. Must get Language used through browser
3. Must get Operating System through browser

**Example Usage:**

`https://timestamp-ms.herokuapp.com/December%2015,%202015`

`https://timestamp-ms.herokuapp.com/1450137600`

**Example Output:**

`{ "unix": 1450137600, "natural": "December 15, 2015" }`

# Notes

**Required Modules:**
* body-parser
* cors
* express

**Optional Modules**
* nodemon 
  - Used for updating scripts without resetting server

**GET Requests**
* Installation: [Postman](https://www.getpostman.com)
* Usage: `localhost:3000/December%2015,%202015`