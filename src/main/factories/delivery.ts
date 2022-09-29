import { DeliveryController } from '../../presentation/controllers/Delivery'
import { Controller } from '../../presentation/protocols/controller'

export const makeDeliveryController = (): Controller => {
  return new DeliveryController()
}
