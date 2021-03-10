"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const dotenv = require("dotenv");
class test {
    constructor() {
        this.AWS = require('aws-sdk');
        this.region = "us-east-1";
        this.endpoint = "http://localhost:8000";
        dotenv.config();
        this.AWS.config.update({
            region: 'us-east-1',
            endpoint: 'http://localhost:8000'
        });
        this.doClient = new this.AWS.DynamoDB.DocumentClient();
    }
    query(TableName, KeyCondExp, ExpAttrNames, ExpAttrVals) {
        let params = {
            TableName: TableName,
            KeyConditionExpression: KeyCondExp,
            ExpressionAttributeNames: ExpAttrNames,
            ExpressionAttributeValues: ExpAttrVals
        };
        console.log('1988년도 개봉 영화 쿼리 요청중...');
        this.doClient.query(params, this.onQuery);
    }
    onQuery(err, data) {
        if (err) {
            console.error('쿼리 실패. 에러 JSON', JSON.stringify(err, null, 2));
        }
        else {
            console.log('쿼리 성공');
            data.Items.forEach(function (item) {
                console.log('-----', item.year, '  :  ', item.title);
            });
        }
    }
}
exports.test = test;
