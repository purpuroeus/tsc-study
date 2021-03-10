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
let params = {
    TableName : 'Movies',
    KeyConditionExpression : '#yr = :yyyy',     // 키를 이용한 검색 조건. #yr이 yyyy와 일치하는 것만 가져옴 + year은 dynamoDB의 예약어 이기 떄문에 충돌을 회피
    ExpressionAttributeNames : {                // 표현식의 속성명을 지정하는 부분. #yr은 Movies 칼럼의 year을 의미
        '#yr' : 'year'
    },
    ExpressionAttributeValues : {               // :yyyy에 들어갈 값을 지정하는 부분
        ':yyyy' : 1998
    }
};
testclass.query("Movies", "#yr = :yyyy", {"#yr" : "year"}, {":yyyy" : 1998})