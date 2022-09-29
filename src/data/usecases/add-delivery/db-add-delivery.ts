import { AddDelivery, AddDeliveryModel } from '../../../domain/usecases/add-delivery'
import { AddDeliveryRepository } from '../../protcols/add-delivery-repository '
import { GetCityRepository } from '../../protcols/get-city-repository'

export class DbAddDelivery implements AddDelivery {
  private readonly getCityRepository: GetCityRepository
  private readonly addDeliveryRepository: AddDeliveryRepository

  constructor (getCityRepository: GetCityRepository, addDeliveryRepository: AddDeliveryRepository) {
    this.getCityRepository = getCityRepository
    this.addDeliveryRepository = addDeliveryRepository
  }

  async add (deliveryData: AddDeliveryModel): Promise<void> {
    // Finds city's id
    deliveryData.address.id_city = await this.getCityRepository.getCityId(deliveryData.address.city)

    return await this.addDeliveryRepository.add(deliveryData)
  }
}
