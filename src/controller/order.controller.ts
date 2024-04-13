import { NotFoundError } from "@nabeelktr/error-handler";
import { IOrderService } from "../interfaces/iOrder.service";

export class OrderController {
  constructor(private service: IOrderService) {}

  createOrder= async (data: any) => {
    try {
      const response = await this.service.createOrder(data);
      return response;
    } catch (e: any) {
     throw new NotFoundError()
    }
  };

  sendPublishKey = () => {
    try {
      return {publishKey: process.env.STRIPE_PUBLISH_KEY}
    } catch (e: any) {
      console.log(e);
    }
  };

  newPayment = (data: string) => {
    try{
      return this.service.newPayment(data)
    }catch(e:any){
      console.log(e);
    }
  }
}
