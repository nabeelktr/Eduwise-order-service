import { DBConnectionError } from "@nabeelktr/error-handler";

import { IOrderRepository } from "../interfaces/iOrderRepository";
import OrderModel from "../model/schemas/order.schema";

export class OrderRepository implements IOrderRepository {
  async createOrder(data: any): Promise<object | null> {
    try {
      const course = await OrderModel.create(data);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }
}
