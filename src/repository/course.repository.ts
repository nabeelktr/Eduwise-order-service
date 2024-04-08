import { DBConnectionError } from "@nabeelktr/error-handler";
import { ICourseRepository } from "../interfaces/iCourse.Repository";
import { Course } from "../model/course.entities";
import CourseModel from "../model/schemas/course.schema";

export class CourseRepository implements ICourseRepository {

  async getTrendingCourses(): Promise<any[] | null> {
    try{
      const response = await CourseModel.find().sort({purchased: -1}).limit(6).select("thumbnail purchased name description price")
      return response
    }catch(e: any){
      throw new DBConnectionError()
    }
  }

  async getAllCourses(): Promise<Course[] | null> {
    try{
      const response = await CourseModel.find().select("-courseData.videoUrl -courseData.links")
      return response
    }catch(e: any){
      throw new DBConnectionError()
    }
  }
  
  async getCourseWop(courseId: string): Promise<Course | null> {
    try {
      const response = await CourseModel.findById(courseId).select(
        "-courseData.videoUrl -courseData.links"
      );
      return response;
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async deleteCourse(courseId: string): Promise<object | null> {
    try {
      const response = await CourseModel.findByIdAndDelete(courseId);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async updateCourse(id: string, data: Course): Promise<object | null> {
    try {
      const course = await CourseModel.findByIdAndUpdate(id, data);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async getCourses(instructorId: string): Promise<Course[] | null> {
    try {
      const courses = await CourseModel.find({ instructorId: instructorId });
      return courses;
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }

  async createCourse(data: Course): Promise<object | null> {
    try {
      const course = await CourseModel.create(data);
      return { success: true };
    } catch (e: any) {
      throw new DBConnectionError();
    }
  }
}
