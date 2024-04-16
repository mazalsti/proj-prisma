import express,{Request, Response} from "express";

const serve = express();


serve.get('/',(req: Request, res:Response)=>{
res.send("Ola Mundo");
});


serve.listen(4000)