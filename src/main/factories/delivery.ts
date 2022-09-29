import { DbAddDelivery } from '../../data/usecases/add-delivery/db-add-delivery'
import { CityMySQLRepository } from '../../infra/db/mysql/city-repository/city'
import { DeliveryMYSQLRepository } from '../../infra/db/mysql/delivery-repository/delivery'
import { DeliveryController } from '../../presentation/controllers/Delivery'
import { Controller } from '../../presentation/protocols/controller'

export const makeDeliveryController = (): Controller => {
  const addDeliveryRepository = new DeliveryMYSQLRepository()
  const getCityRepository = new CityMySQLRepository()
  const addDelivery = new DbAddDelivery(getCityRepository, addDeliveryRepository)
  return new DeliveryController(addDelivery)
}
