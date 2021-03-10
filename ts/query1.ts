import * as dotenv from 'dotenv'

export class test {
    private AWS = require('aws-sdk');
    private region = "us-east-1";
    private endpoint = "http://localhost:8000";
    private doClient;
    constructor(){
        dotenv.config();
        this.AWS.config.update({
            region : 'us-east-1',
            endpoint : 'http://localhost:8000'
        });
        this.doClient = new this.AWS.DynamoDB.DocumentClient();
    }
    public query(params : object){
        console.log('1988년도 개봉 영화 쿼리 요청중...');
        this.doClient.query(params, this.onQuery);
    }
    private onQuery(err, data){
        if(err){
            console.error('쿼리 실패. 에러 JSON', JSON.stringify(err, null, 2));
        }
        else{
            console.log('쿼리 성공');
            data.Items.forEach(function(item){
                console.log('-----', item.year, '  :  ', item.title);
            });
        }
    }
}