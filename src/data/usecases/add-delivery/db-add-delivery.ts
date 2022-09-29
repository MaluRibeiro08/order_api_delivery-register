import { AddDelivery, AddDeliveryModel } from '../../../domain/usecases/add-delivery'

export class DbAddDelivery implements AddDelivery {
  async add (deliveryData: AddDeliveryModel): Promise<void> {
    console.log("it'll add the delivery info")
  }
}
