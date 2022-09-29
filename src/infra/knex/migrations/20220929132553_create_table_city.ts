exports.up = knex => knex.schema.createTable('tbl_city', table => {
  table.increments('id_city').primary().notNullable()
  table.integer('id_uf').unsigned().notNullable()

  table.string('name_city', 50).notNullable()
  table.string('cod_city', 7).notNullable()

  table.foreign('id_uf').references('id_uf').inTable('tbl_uf')
})

exports.down = knex => knex.schema.dropTable('tbl_city')
