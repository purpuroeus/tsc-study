"use strict";
// import * as express from "express"
Object.defineProperty(exports, "__esModule", { value: true });
// class App{
//     public application : express.Application;
//     constructor(){
//         this.application = express();
//     }
// }
// const app = new App().application;
// app.get("/", (req : express.Request, res : express.Response) =>{
//     res.send('start')
//     }
// )
// app.listen(1000, () => console.log('start'));
const query1_1 = require("./query1");
let testclass = new query1_1.test();
testclass.query("Movies", "#yr = :yyyy", { "#yr": "year" }, { ":yyyy": 1998 });
