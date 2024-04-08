import { CourseController } from "../controller/courseController";
import { CourseRepository } from "../repository/course.repository";
import { CourseService } from "../services/course.service";
import rabbitClient from "./client";

const courseRepository = new CourseRepository();
const service = new CourseService(courseRepository);
const controller = new CourseController(service);

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

      case "get-courses":
        response = await controller.getCourses.bind(controller)(data);
        break;

      case "update-course":
        response = await controller.updataCourse.bind(controller)(data);
        break;

      case "delete-course":
        response = await controller.deleteCourse.bind(controller)(data);
        break;

      case "get-course-wop": //without purchase
        response = await controller.getCourseWop.bind(controller)(data);
        break;

      case "get-all-courses":
        response = await controller.getAllCourses.bind(controller)();
        break;
      
        case "get-trending-courses":
          response = await controller.getTrendingCourses.bind(controller)();
          break;  

      default:
        response = "Request-key notfound";
        break;
    }

    //Produce the response back to the client
    await rabbitClient.produce(response, correlationId, replyTo);
  }
}
