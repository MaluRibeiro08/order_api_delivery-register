import { Message } from 'amqplib'
import { RabbitmqServer } from '../../utils/rabbitmq/rabbitmq-server'

export const startrConsumerServer = async (): Promise<void> => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  void rabbitMQServer.consume('sale_delivery_register', (message: Message) => {
    console.log('Received messagem: ' + message.content.toString())
  })
}
