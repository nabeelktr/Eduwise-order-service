

export interface IOrderService {
  getOrdersAnalytics(instructorId: string): Promise<object[] | null>;
  newPayment(data: string): unknown;
  createOrder(data: any): any;
}
