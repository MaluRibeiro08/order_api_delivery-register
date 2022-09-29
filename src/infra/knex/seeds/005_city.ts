exports.seed = async function (knex) {
  await knex('tbl_city').del() // Deletes ALL existing entries

  await knex('tbl_city').insert([
    {
      name_city: 'Carapicuíba',
      cod_city: '3510609',
      id_uf: '7'
    },
    {
      name_city: 'Barueri',
      cod_city: '3505708',
      id_uf: '7'
    },
    {
      name_city: 'Osasco',
      cod_city: '3534401',
      id_uf: '7'
    }
  ])
}
