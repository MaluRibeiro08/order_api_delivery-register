exports.up = knex => knex.schema.createTable('tbl_address', table => {
  table.increments('id_address').primary().notNullable()
  table.integer('id_city').unsigned().notNullable()
  table.integer('id_sale').unsigned().notNullable()

  table.string('zip_code', 8).notNullable()
  table.string('house_number', 4).notNullable()
  table.string('street', 50).notNullable()
  table.string('neighborhood', 70).notNullable()
  table.string('complement', 50)
  table.string('reference', 50)

  table.foreign('id_city').references('id_city').inTable('tbl_city')
  table.foreign('id_sale').references('id_sale').inTable('tbl_sale')
})

exports.down = knex => knex.schema.dropTable('tbl_address')
