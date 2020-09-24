exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary().unique()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('password')
    table.timestamp('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}