import { GetCityRepository } from '../../../../data/protcols/get-city-repository'
import database from '../../../knex/helper/knex-helper'

export class CityMySQLRepository implements GetCityRepository {
  async getCityId (cityName: string): Promise<number> {
    const city = await database.select('id_city').table('tbl_city').where('name_city', cityName)
    if (city.length > 1) {
      throw new Error('More than one city found')
    } else if (!city[0]) {
      throw new Error('No city found')
    }
    return city[0].id_city
  }
}
