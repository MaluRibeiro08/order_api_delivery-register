import { Controller } from '../protocols/controller'

export class DeliveryController implements Controller {
  async handle (message: string): Promise<any> {
    console.log('Delivery controller handles: ' + message)
  }
}
