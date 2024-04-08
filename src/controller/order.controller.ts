import { IOrderService } from "../interfaces/iOrder.service";

export class OrderController {
  constructor(private service: IOrderService) {}

  createCourse = async (data: any) => {
    try {
      const response = await this.service.createCourse(data);
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };


}
