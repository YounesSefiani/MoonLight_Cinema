const AbstractManager = require("./AbstractManager");

class screensManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "screens" as configuration
    super({ table: "screens" });
  }

  // The C of CRUD - Create operation

  async create(screens) {
    // Execute the SQL INSERT query to add a new screen to the "screens" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, capacity) values (?, ?)`,
      [screens.name, screens.capacity]
    );

    // Return the ID of the newly inserted screen
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific screen by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the screens
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all screens from the "screens" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of screens
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing screen

  async update(id, screens) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET ? WHERE id = ?`,
      [screens, id]
    );
    return result.insertId;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an screen by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = screensManager;
