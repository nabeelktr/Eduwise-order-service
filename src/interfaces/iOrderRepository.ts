

export interface IOrderRepository {
  createCourse(data: any): Promise<object | null> ;
}
