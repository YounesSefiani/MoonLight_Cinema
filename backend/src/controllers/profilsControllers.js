// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all profils from the database
    const profils = await tables.profils.readAll();

    // Respond with the profils in JSON format
    res.json(profils);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific profils from the database based on the provided ID
    const profils = await tables.profils.read(req.params.id);

    // If the profils is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the profils in JSON format
    if (profils == null) {
      res.sendStatus(404);
    } else {
      res.json(profils);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    await tables.profils.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the profils data from the request body
  const profils = req.body;

  try {
    // Insert the profils into the database
    const insertId = await tables.profils.create(profils);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted profils
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.profils.delete(req.params.id);
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
