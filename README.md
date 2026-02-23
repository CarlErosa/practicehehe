Initializing Node.Js - package.json
npm init -y 


Installing express
npm install express



src/server.js

Output : Server running on port 3001 


GET Request - retrivers data
POST Request - Sends/Create Data
PUT Request - Updates data
DELETE Request - Deletes data

req,res

req - where the request is stored
res - is the response to the request

res.json({"message: 'hello world'})  this is the response json


---------------------------------------------
POSTMAN 

add variable and assing the url to baseUrl

baseUrl = http://localhost:3001

in package.json if you change the type from commonjs to module u can utilize

import express from 'express'

instead of const express = require('express');

but it does the same thing



