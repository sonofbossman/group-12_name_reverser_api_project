// importing necessary modules
import express from 'express'
import { home, submitName, reversedName } from "../controllers/controller.js"; // imports local modules which contain functions for handling the routes

export const router = express.Router() //initialization of a router instance using the expressrouter object and assigning it to the constant, router

// defining the routes
router.route(`/`).get(home) // route for the homepage
router.route(`/reverse-name`).post(submitName).get(reversedName) //route for the reversal functionality which posts the name data from the user to the server and gets the reversed name to display once the reversal is done