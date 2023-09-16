import { useEffect, useReducer } from "react"
import { BASE_URL } from "../Urls"
import { set } from "../features/FormSlice"
import { useAppDispatch } from "./useApp"

type status = 'idle' | 'loading' | 'success' | 'error'

type InitialState<T> = {
    status:status,
    data:T | null,
    error:Error | null
}

type ActionType<T> =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; payload: Error };

export default function useFetch <T> (url?:string,config?:RequestInit){


const initialState:InitialState<T> = {
    status:'idle',
    data:null,
    error:null
}

const dispatch__ = useAppDispatch()

    const fetchReducer = (state:InitialState<T>,action:ActionType<T>):InitialState<T> => {
        switch (action.type) {
            case 'idle':
                return {
                    ...state,
                    status:'idle'
                }
            case 'loading':
                return{
                    ...state,
                    status:'loading'
                }
            case 'success':
                return {
                    ...state,
                    status:'success',
                    data:action.payload
                }
                
            case 'error':
                return  {
                    ...state,
                    status:'error',
                    error:action.payload
                }
        
            default:
                return state
                
        }
    }

    const [state,dispatch] = useReducer(fetchReducer,initialState)

    useEffect(() => {
      Fetch(url,config)
    }, [])

    const Fetch = async (__url=url,__config=config) => {

        try{
            if(__url==='') return
            dispatch({type:'loading'})
            __config = {
                method:'GET',
                ...__config,
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const response = await fetch(`${BASE_URL}/${__url}`,__config)
            if(!response.ok) dispatch({type:'error',payload:new Error(response.statusText)})
            const data = await response.json()
            dispatch({type:'success',payload:data})
            if( __config?.method === 'GET') dispatch__(set(data))
            
            return data
        }catch(err){
            dispatch({type:'error',payload:err as Error})
            return err
        }

    }

    return {state,Fetch}

}

// const useFetch = () =>{

//     const Fetch = async () => {

//         const response = await fetch(`${BASE_URL}`)
//         if(!response.ok) throw new Error(response.statusText)
//         const data = await response.json()
//         return data

//     }

// }