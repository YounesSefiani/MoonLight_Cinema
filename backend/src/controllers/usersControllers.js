// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.users.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific users from the database based on the provided ID
    const users = await tables.users.read(req.params.id);

    // If the users is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the users in JSON format
    if (users == null) {
      res.sendStatus(404);
    } else {
      res.json(users);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    await tables.users.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the users data from the request body
  const users = req.body;

  try {
    // Insert the users into the database
    const insertId = await tables.users.create(users);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted users
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.users.delete(req.params.id);
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
