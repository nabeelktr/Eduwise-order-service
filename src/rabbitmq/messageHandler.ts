import { OrderController } from "../controller/order.controller";
import { OrderRepository } from "../repository/order.repository";
import { OrderService } from "../services/course.service";
import rabbitClient from "./client";

const orderRepository = new OrderRepository();
const service = new OrderService(orderRepository);
const controller = new OrderController(service);

export default class MessageHandler {
  static async handle(
    operation: string,
    data: any,
    correlationId: string,
    replyTo: string
  ) {
    let response = data;
    console.log("The operation is", operation, data);

    switch (operation) {
      case "create-course":
        response = await controller.createCourse.bind(controller)(data);
        break;


      default:
        response = "Request-key notfound";
        break;
    }

    //Produce the response back to the client
    await rabbitClient.produce(response, correlationId, replyTo);
  }
}
