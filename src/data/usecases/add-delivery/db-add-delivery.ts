import { AddDelivery, AddDeliveryModel } from '../../../domain/usecases/add-delivery'
import { AddDeliveryRepository } from '../../protcols/add-delivery-repository '
import { GetCityRepository } from '../../protcols/get-city-repository'
import { GetSaleRepository } from '../../protcols/get-sale-repository'

export class DbAddDelivery implements AddDelivery {
  private readonly getCityRepository: GetCityRepository
  private readonly addDeliveryRepository: AddDeliveryRepository
  private readonly getSaleRepository: GetSaleRepository

  constructor (getCityRepository: GetCityRepository, addDeliveryRepository: AddDeliveryRepository, getSaleRepository: GetSaleRepository) {
    this.getCityRepository = getCityRepository
    this.getSaleRepository = getSaleRepository
    this.addDeliveryRepository = addDeliveryRepository
  }

  async add (deliveryData: AddDeliveryModel): Promise<void> {
    // Finds city's id
    deliveryData.address.id_city = await this.getCityRepository.getCityId(deliveryData.address.city)

    // Finds sales's internal id
    deliveryData.sale.interal_id_sale = await this.getSaleRepository.getSaleInternalId(deliveryData.sale.external_id_sale)

    // Adds delivery
    return await this.addDeliveryRepository.add(deliveryData)
  }
}
