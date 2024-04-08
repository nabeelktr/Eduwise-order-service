import { ICourseService } from "../interfaces/iCourse";
import { ICourseRepository } from "../interfaces/iCourse.Repository";
import { Course } from "../model/course.entities";

export class CourseService implements ICourseService {
  constructor(private repository: ICourseRepository) {}

  getTrendingCourses(): Promise<any[] | null> {
    return this.repository.getTrendingCourses()
  }

  getAllCourses(): Promise<Course[] | null> {
    return this.repository.getAllCourses()
  }

  getCourseWop(courseId: string): Promise<Course | null> {
    return this.repository.getCourseWop(courseId);
  }

  deleteCourse(courseId: string): Promise<object | null> {
    return this.repository.deleteCourse(courseId);
  }

  updateCourse(data: Course): Promise<Object | null> {
    const updateData = {
      instructorId: data.instructorId,
      name: data.name,
      description: data.description,
      price: data.price,
      estimatedPrice: data.estimatedPrice,
      tags: data.tags,
      level: data.level,
      demoUrl: data.demoUrl,
      subtitleUrl: data.subtitleUrl,
      totalVideos: data.totalVideos,
      benefits: data.benefits,
      prerequisites: data.prerequisites,
      courseContentData: data.courseContentData,
      thumbnail: data.thumbnail,
    };
    return this.repository.updateCourse(data.courseId || "", updateData);
  }

  async getCourses(instructorId: string): Promise<Course[] | null> {
    const courses = await this.repository.getCourses(instructorId);
    return courses;
  }

  async createCourse(data: Course) {
    try {
      const response = await this.repository.createCourse(data);
      return response;
    } catch (e: any) {
      throw new Error("Failed to create course.");
    }
  }
}
