// import * as express from "express"


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

import {test} from './query1'

let testclass = new test();
testclass.query("Movies", "#yr = :yyyy", {"#yr" : "year"}, {":yyyy" : 1998})