import { IOrderService } from "../interfaces/iOrder.service";
import "dotenv/config"
import { IOrderRepository } from "../interfaces/iOrderRepository";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  async newPayment(data: string): Promise<Object> {
    try{
      const myPayment = await stripe.paymentIntents.create({
        amount: parseInt(data),
        currency: "inr",
        metadata: {
          company: "Eduwise"
        },
        automatic_payment_methods: {
          enabled:true
        }
      })
      return {clientSecret:  myPayment.client_secret}
    }catch(e:any){
      throw new Error("failed create payment")
    }
  }

  createOrder(){

    const myPayment = stripe.paymentIntents.create({
      amount: 500,
      currency: "inr",
      metadata: {
        company: "Eduwise"
      },
      automatic_payment_methods: {
        enabled:true
      }
    })
  }
  
  async createCourse(data: any) {
    try {
      const response = await this.repository.createCourse(data);
      return response;
    } catch (e: any) {
      throw new Error("Failed to create course.");
    }
  }
}
