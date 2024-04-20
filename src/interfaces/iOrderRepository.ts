

export interface IOrderRepository {
  getOrdersAnalytics(instructorId: string): Promise<object[] | null>;
  createOrder(data: any): Promise<object | null> ;
}
