import defaultAxios from "axios";
import {API_BASE_URL} from "./app-config";

const UseAxios = (url: string, method: string, setItem? : object | Function, headers?: object, axiosInstance = defaultAxios) => {
    console.log(url, method, setItem)
    if(typeof setItem === "object")
        { // @ts-ignore
            if(!setItem.title)
                return;
        }
    const opts = {
        url,
        method : method,
        ...headers,
        data: (typeof setItem === "object") ? setItem : null
    }
    let state = {
        loading: true,
        error: null,
        data: null
    };

    const callAxios = () => {
        if (!opts.url) {
            return;
        } else if (!opts.url.toUpperCase().startsWith("HTTP")) {
            opts.url = API_BASE_URL + opts.url;
        }
        console.log(opts)
        axiosInstance(opts).then(response => {
            state = {
                ...state,
                loading: false,
                data: response.data.data
            }
            //GET은 최초 한번만 쓴다고 가정, 다른 GET을 쓸땐 setItem을 NULL로 보내주자
            if(setItem && response.data.data.length > 0)
                if(typeof setItem === "function")
                    setItem((current : any) => {
                        // current = current.filter((item : any ) => !!item.id);
                        // return [...current].concat(response.data.data);
                        return response.data.data;
                    });

        }).catch(error => {
            console.log(error)
            state = {...state, loading: false, error}
        })
    }
    callAxios();

    return {...state};
}

export default UseAxios;