import { AddDeliveryModel } from '../../domain/usecases/add-delivery'

export interface AddDeliveryRepository {
  add: (deliveryData: AddDeliveryModel) => Promise<void>
}
