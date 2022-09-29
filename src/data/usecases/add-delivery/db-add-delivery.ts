import { AddDelivery, AddDeliveryModel } from '../../../domain/usecases/add-delivery'
import { GetCityRepository } from '../../protcols/get-city-repository'

export class DbAddDelivery implements AddDelivery {
  private readonly getCityRepository: GetCityRepository

  constructor (getCityRepository: GetCityRepository) {
    this.getCityRepository = getCityRepository
  }

  async add (deliveryData: AddDeliveryModel): Promise<void> {
    // Finds city's id
    deliveryData.address.id_city = await this.getCityRepository.getCityId(deliveryData.address.city)

    // Next steps....
  }
}
