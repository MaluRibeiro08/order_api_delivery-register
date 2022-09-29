export interface AddDeliveryModel {
  sale: {
    external_id_sale: string
    interal_id_sale?: number
  }
  address:
  {
    zip_code: string
    house_number: string
    street: string
    neighborhood: string
    city: string
    id_city?: number
    uf: string
    complement: string
    reference: string
  }
}

export interface AddDelivery {
  add: (deliveryData: AddDeliveryModel) => Promise<void>
}
