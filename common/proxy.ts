import * as request from 'request'

function get(url : string): Promise<any> {
    return new Promise((resolve,reject)=>{
        request.get(url, (error: any, response: request.RequestResponse, body: any): void => {
            // 请求异常
            if(error){
                Promise.reject(error);
            }

            // 服务返回失败状态
            if(response.statusCode !== 200){
                Promise.reject(response.statusMessage);
            }

            // 请求成功
            return body;
        });
    });
}

function post(url : string,formData:any): Promise<any> {
    return new Promise((resolve,reject)=>{
        request.post(url,formData,(error: any, response: request.RequestResponse, body: any): void => {
            // 请求异常
            if(error){
                Promise.reject(error);
            }

            // 服务返回失败状态
            if(response.statusCode !== 200){
                Promise.reject(response.statusMessage);
            }

            // 请求成功
            return body;
        });
    });
}

export {
    get,
    post
}