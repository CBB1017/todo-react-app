export interface Item{
    id: string,
    title: string,
    done: boolean,
    setItem? : any | null
}

export interface axios {
    loading:boolean,
    error:null | object,
    data : object[],
    refetch?: () => void,
    response?: object | undefined
}
