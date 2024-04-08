import { IOrderService } from "../interfaces/iOrder.service";
import { IOrderRepository } from "../interfaces/iOrderRepository";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}
  
  async createCourse(data: any) {
    try {
      const response = await this.repository.createCourse(data);
      return response;
    } catch (e: any) {
      throw new Error("Failed to create course.");
    }
  }
}
