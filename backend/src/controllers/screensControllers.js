// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all screens from the database
    const screens = await tables.screens.readAll();

    // Respond with the screens in JSON format
    res.json(screens);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific screens from the database based on the provided ID
    const screens = await tables.screens.read(req.params.id);

    // If the screens is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the screens in JSON format
    if (screens == null) {
      res.sendStatus(404);
    } else {
      res.json(screens);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    await tables.screens.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the screens data from the request body
  const screens = req.body;

  try {
    // Insert the screens into the database
    const insertId = await tables.screens.create(screens);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted screens
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.screens.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
