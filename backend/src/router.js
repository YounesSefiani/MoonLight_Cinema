const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* *****************************MOVIES********************************** */

// Import moviesControllers module for handling item-related operations
const moviesControllers = require("./controllers/moviesControllers");

// Route to get a list of movies
router.get("/movies", moviesControllers.browse);

// Route to get a specific movie by ID
router.get("/movies/:id", moviesControllers.read);

router.get(
  "/movies/:id/projections",
  moviesControllers.getMovieWithProjections
);

// Route to add a new movie
router.post("/movies", moviesControllers.add);

// Route to update a movie
router.put("/movies/:id", moviesControllers.edit);

// Route to delete a movie
router.delete("/movies/:id", moviesControllers.destroy);

/* *****************************SCREENS********************************** */

// Import screensControllers module for handling item-related operations
const screensControllers = require("./controllers/screensControllers");

// Route to get a list of screens
router.get("/screens", screensControllers.browse);

// Route to get a specific screen by ID
router.get("/screens/:id", screensControllers.read);

// Route to add a new screen
router.post("/screens", screensControllers.add);

// Route to update a screen
router.put("/screens/:id", screensControllers.edit);

// Route to delete a screen
router.delete("/screens/:id", screensControllers.destroy);

/* *****************************PROJECTIONS********************************** */
// Import screensControllers module for handling item-related operations
const projectionsControllers = require("./controllers/projectionsControllers");

// Route to get a list of projections
router.get("/projections", projectionsControllers.browse);

router.get(
  "/projections/movies/:movieId",
  projectionsControllers.getProjectionsByMovieId
);

router.get(
  "/projections/screens/:screenId",
  projectionsControllers.getProjectionsByScreenId
);

// Route to get a specific projections by ID
router.get("/projections/:id", projectionsControllers.read);

// Route to add a new projection
router.post("/projections", projectionsControllers.add);

// Route to update a projection
router.put("/projections/:id", projectionsControllers.edit);

// Route to delete a projection
router.delete("/projections/:id", projectionsControllers.destroy);

/* *****************************USERS********************************** */

// Import usersControllers module for handling item-related operations
const usersControllers = require("./controllers/usersControllers");

// Route to get a list of users
router.get("/users", usersControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", usersControllers.read);

// Route to add a new user
router.post("/users", usersControllers.add);

// Route to update a user
router.put("/users/:id", usersControllers.edit);

// Route to delete a user
router.delete("/users/:id", usersControllers.destroy);

/* *****************************PROFILS********************************** */

// Import usersControllers module for handling item-related operations
const profilsControllers = require("./controllers/profilsControllers");

// Route to get a list of profils
router.get("/profils", profilsControllers.browse);

// Route to get a specific profil by ID
router.get("/profils/:id", profilsControllers.read);

// Route to add a new profil
router.post("/profils", profilsControllers.add);

// Route to update a profil
router.put("/profils/:id", profilsControllers.edit);

// Route to delete a profil
router.delete("/profils/:id", profilsControllers.destroy);

module.exports = router;
