const AbstractManager = require("./AbstractManager");

class ProjectionsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "projections" as configuration
    super({ table: "projections" });
  }

  // Méthode pour récupérer les projections par ID de film
  async readByMovieId(movieId) {
    // Exécuter la requête SQL SELECT pour récupérer les projections d'un film spécifique
    const [rows] = await this.database.query(
      `SELECT p.*, m.title AS movie_title, s.name AS screen_name
      FROM ${this.table} p
      JOIN movies m on p.movies_id = m.id
      JOIN screens s ON p.screens_id = s.id
      WHERE p.movies_id = ?`,
      [movieId]
    );

    // Retourner le tableau de projections
    return rows;
  }

  // Méthode pour récupérer les projections par ID de film
  async readByScreenId(screenId) {
    // Exécuter la requête SQL SELECT pour récupérer les projections d'un film spécifique
    const [rows] = await this.database.query(
      `SELECT p.*, m.title AS movie_title, s.name AS screen_name
      FROM ${this.table} p
      JOIN movies m on p.movies_id = m.id
      JOIN screens s ON p.screens_id = s.id
      WHERE p.screens_id = ?`,
      [screenId]
    );

    // Retourner le tableau de projections
    return rows;
  }

  // The C of CRUD - Create operation

  async create(projections, moviesId, screensId) {
    // Execute the SQL INSERT query to add a new projections to the "projections" table
    const [result] = await this.database.query(
      `insert into ${this.table} (movies_id, screens_id, date, hour) values (?, ?, ?, ?)`,
      [moviesId, screensId, projections.date, projections.hour]
    );

    // Return the ID of the newly inserted projections
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific projections by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the projections
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all projectionss from the "projections" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of projectionss
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing projections

  async update(id, projections) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET ? WHERE id = ?`,
      [projections, id]
    );
    return result.insertId;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an projections by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = ProjectionsManager;
