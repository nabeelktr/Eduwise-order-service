

export interface IOrderRepository {
  createOrder(data: any): Promise<object | null> ;
}
