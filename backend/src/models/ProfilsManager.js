const AbstractManager = require("./AbstractManager");

class profilsManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "profils" as configuration
    super({ table: "profils" });
  }

  // The C of CRUD - Create operation

  async create(profils, userId) {
    // Execute the SQL INSERT query to add a new profil to the "profils" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, birthdate, profil_image, gender, user_id) values (?, ?, ?, ?, ?, ?)`,
      [
        profils.firstname,
        profils.lastname,
        profils.birthdate,
        profils.profil_image,
        profils.gender,
        userId,
      ]
    );

    // Return the ID of the newly inserted profil
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific profil by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the profils
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all profils from the "profils" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of profils
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing profil

  async update(id, profils) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET ? WHERE id = ?`,
      [profils, id]
    );
    return result.insertId;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an profil by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = profilsManager;
