import { DbAddDelivery } from '../../data/usecases/add-delivery/db-add-delivery'
import { DeliveryController } from '../../presentation/controllers/Delivery'
import { Controller } from '../../presentation/protocols/controller'

export const makeDeliveryController = (): Controller => {
  const addDelivery = new DbAddDelivery()
  return new DeliveryController(addDelivery)
}
