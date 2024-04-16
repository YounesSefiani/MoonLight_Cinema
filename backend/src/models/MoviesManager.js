const AbstractManager = require("./AbstractManager");

class MoviesManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "movies" as configuration
    super({ table: "movies" });
  }

  // The C of CRUD - Create operation

  async create(movies) {
    // Execute the SQL INSERT query to add a new movies to the "movies" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, poster, background, logo, release_date, genre, director, casting, duration, synopsis, state, trailer, rated ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        movies.title,
        movies.poster,
        movies.background,
        movies.logo,
        movies.release_date,
        movies.genre,
        movies.director,
        movies.casting,
        movies.duration,
        movies.synopsis,
        movies.state,
        movies.trailer,
        movies.rated,
      ]
    );

    // Return the ID of the newly inserted movies
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific movies by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the movies
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all moviess from the "movies" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of moviess
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing movies

  async update(id, movies) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET ? WHERE id = ?`,
      [movies, id]
    );
    return result.insertId;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an movies by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = MoviesManager;
