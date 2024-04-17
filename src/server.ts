import express,{Request, Response} from "express";
import dotenv from "dotenv";

const serve = express();

dotenv.config();

serve.get('/',(req: Request, res:Response)=>{
res.send("Ola Mundo");
});


serve.listen(process.env.PORT);