import { AddDeliveryRepository } from '../../../../data/protcols/add-delivery-repository '
import { AddDeliveryModel } from '../../../../domain/usecases/add-delivery'

export class DeliveryMYSQLRepository implements AddDeliveryRepository {
  async add (deliveryData: AddDeliveryModel): Promise<void> {

  }
}
