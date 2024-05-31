// Import access to database tables
const tables = require("../tables");

const ProjectionsManager = require("../models/ProjectionsManager");

const projectionsManager = new ProjectionsManager();

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all projections from the database
    const projections = await tables.projections.readAll();

    // Respond with the projections in JSON format
    res.json(projections);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific projections from the database based on the provided ID
    const projections = await tables.projections.read(req.params.id);

    // If the projections is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projections in JSON format
    if (projections == null) {
      res.sendStatus(404);
    } else {
      res.json(projections);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const getProjectionsByMovieId = async (req, res) => {
  try {
    const { movieId } = req.params;
    const projections = await projectionsManager.readByMovieId(movieId);
    res.json(projections);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProjectionsByScreenId = async (req, res) => {
  try {
    const { screenId } = req.params;
    const projections = await projectionsManager.readByMovieId(screenId);
    res.json(projections);
  } catch (err) {
    res.status(500).send(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    await tables.projections.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the projections data from the request body
  const projections = req.body;

  try {
    // Insert the projections into the database
    const insertId = await tables.projections.create(projections);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted projections
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.projections.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  getProjectionsByMovieId,
  getProjectionsByScreenId,
  edit,
  add,
  destroy,
};
