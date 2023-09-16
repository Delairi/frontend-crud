import { ReactNode, useContext } from "react"
import { IconDelete, IconEdit } from "./Heroicons"
import { Popup } from "./Popup"
import { ContextPopup } from "../App"
import useFetch from "../hooks/useFetch"
import { useAppDispatch } from "../hooks/useApp"
import { del } from "../features/FormSlice"

const Menu = (props:User) => {

    const PopupContext = useContext(ContextPopup)
    const dispatch = useAppDispatch()
    const {Fetch} = useFetch<User[]>('')
    const Edit = async () => {
        PopupContext?.setFormValues(props)
        PopupContext?.setValue(true)
    }
    const Delete = async () => {
        
       const response = await Fetch(`api/users/${props.id}`,{
            method:'DELETE'
        })
        dispatch(del(response.id))
        PopupContext?.setValue(false)
        PopupContext?.setFormValues(null)
        
        
    }

    return (
        <div className='flex flex-row gap-2 p-1'>
            <button onClick={Edit}>
                <IconEdit />
            </button>
            <button onClick={Delete}>
                <IconDelete />
            </button>
        </div>
    )
}

export const Box = (props:User) => {
    
    return (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48 p-2'>
            <div className='flex justify-end h-1/5 '>
                <Menu {...props} />
            </div>
        <div className='flex flex-col items-center justify-center w-full h-4/5 bg-[white] rounded-xl text-[black]'>
            <div className='flex flex-row gap-1'>
                <p>{props.name}</p>
                <p>{props.lastname}.</p>
            </div>
        </div>
        </div>
    )
}



export const List = ({render}:{render: ()=> ReactNode }) => {

    const PopupContext = useContext(ContextPopup)
    return (
        <div className='flex flex-row flex-wrap'>
            {render()}
            {
                PopupContext?.value && <Popup />
            }
        </div>
    )

}