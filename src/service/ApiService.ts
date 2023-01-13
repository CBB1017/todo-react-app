import {API_BASE_URL} from "../app-config";

export function call(api: string, method: any, request: any){
    let options = {
        headers : new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
        body: ""
    };
    if(request){
        //GET Method
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
}