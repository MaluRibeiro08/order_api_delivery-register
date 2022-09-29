exports.seed = async function (knex) {
  await knex('tbl_uf').del() // Deletes ALL existing entries

  await knex('tbl_uf').insert([
    {
      abbreviation_uf: 'SP',
      name_uf: 'São Paulo'
    },
    {
      abbreviation_uf: 'MG',
      name_uf: 'Minas Gerais'
    },
    {
      abbreviation_uf: 'RJ',
      name_uf: 'Rio de Janeiro'
    }
  ])
}
