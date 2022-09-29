export interface GetSaleRepository {
  getSaleInternalId: (saleExternalId: string) => Promise<number>
}
