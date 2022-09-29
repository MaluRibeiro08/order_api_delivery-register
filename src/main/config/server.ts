import { Message } from 'amqplib'
import { RabbitmqServer } from '../../utils/rabbitmq/rabbitmq-server'
import { makeDeliveryController } from '../factories/delivery'

export const startrConsumerServer = async (): Promise<void> => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const deliveryController = makeDeliveryController()
  void rabbitMQServer.consume('sale_delivery_register', (message: Message) => {
    void deliveryController.handle(message.content.toString())
  })
}
