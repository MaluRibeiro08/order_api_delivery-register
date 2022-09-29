exports.up = knex => knex.schema.createTable('tbl_uf', table => {
  table.increments('id_uf').primary().notNullable()

  table.string('abbreviation_uf', 2).notNullable()
  table.string('name_uf', 30).notNullable()
})

exports.down = knex => knex.schema.dropTable('tbl_uf')
