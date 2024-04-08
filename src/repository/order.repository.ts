import { DBConnectionError } from "@nabeelktr/error-handler";

import CourseModel from "../model/schemas/order.schema";
import { IOrderRepository } from "../interfaces/iOrderRepository";

export class OrderRepository implements IOrderRepository {
  async createCourse(data: any): Promise<object | null> {
    try {
      const course = await CourseModel.create(data);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }
}
