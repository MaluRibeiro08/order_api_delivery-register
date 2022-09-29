import { AddDeliveryRepository } from '../../../../data/protcols/add-delivery-repository '
import { AddDeliveryModel } from '../../../../domain/usecases/add-delivery'
import database from '../../../knex/helper/knex-helper'

export class DeliveryMYSQLRepository implements AddDeliveryRepository {
  async add (deliveryData: AddDeliveryModel): Promise<void> {
    return await database('tbl_address').insert({
      zip_code: deliveryData.address.zip_code,
      house_number: deliveryData.address.house_number,
      street: deliveryData.address.street,
      neighborhood: deliveryData.address.neighborhood,
      complement: deliveryData.address.complement,
      reference: deliveryData.address.reference,
      id_sale: deliveryData.sale.interal_id_sale,
      id_city: deliveryData.address.id_city
    })
  }
}
