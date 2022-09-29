import { AddDelivery } from '../../domain/usecases/add-delivery'
import { Controller } from '../protocols/controller'

export class DeliveryController implements Controller {
  private readonly addDelivery: AddDelivery

  constructor (addDelivery: AddDelivery) {
    this.addDelivery = addDelivery
  }

  async handle (message: string): Promise<any> {
    const receivedMessageObject = JSON.parse(message)

    await this.addDelivery.add(receivedMessageObject)
  }
}
