import defaultAxios from "axios";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "./app-config";

const UseAxios = (url: string, method: string, setItem : any, headers?: object, axiosInstance = defaultAxios) => {
    const [state, setState]: [any, any] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    useEffect( () => {
        initialFetch();
    }, [trigger]);

    const opts = {
        url,
        method,
        ...headers,
    }
    const initialFetch = () => {
        if (!opts.url) {
            return;
        } else if (!opts.url.toUpperCase().startsWith("HTTP")) {
            opts.url = API_BASE_URL + opts.url;
        }
        axiosInstance(opts).then(response => {
            setState({
                ...state,
                loading: false,
                data: response.data.data
            })
            if(setItem && response.data.data.length > 0)
                setItem((current : any) => {
                    current = current.filter((item : any ) => !!item.id);
                    console.log(current)
                    return [...current].concat(response.data.data);
                });

        }).catch(error => {
            console.log(error)
            setState({...state, loading: false, error})
        })
    }


    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    }
    return {...state, refetch};
}

export default UseAxios;