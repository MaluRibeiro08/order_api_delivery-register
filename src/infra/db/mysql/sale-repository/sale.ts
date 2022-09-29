import { GetSaleRepository } from '../../../../data/protcols/get-sale-repository'
import database from '../../../knex/helper/knex-helper'

export class SaleMySQLRepository implements GetSaleRepository {
  async getSaleInternalId (saleExternalId: string): Promise<number> {
    const sale = await database.select('id_sale').table('tbl_sale').where('external_id_sale', saleExternalId)
    if (sale.length > 1) {
      throw new Error('More than one sale found')
    } else if (!sale[0]) {
      throw new Error('No sale found')
    }
    return sale[0].id_sale
  }
}
