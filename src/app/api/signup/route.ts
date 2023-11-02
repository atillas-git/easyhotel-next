import Employee from "@/models/Employee";
import bcrypt from 'bcryptjs'
type SignUp = {
    hotelId:string;
    name:string;
    email:string;
    password:string;
    telNo:string;
    sex:string;
    country:string;
}
export async function POST(req:Request) {
    try {
        const body = await req.json() as SignUp
        const user2search = await Employee.findOne({
            email:body.email
        })
        if(user2search){
           return new Response("User already exists!",{
                status:400
           }) 
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password,salt)
        const newEmployee = new Employee({
            ...body,
            password:hashedPassword
        })
        await newEmployee.save()
        return new Response("Success!",{status:200})
    } catch (error) {
        return new Response(JSON.stringify(error),{
            status:500
        })   
    }
}