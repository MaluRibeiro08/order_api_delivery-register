export interface GetCityRepository {
  getCityId: (cityName: string) => Promise<number>
}
