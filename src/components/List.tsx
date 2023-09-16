import { ReactNode, createContext, useContext, useState } from "react"
import { IconDelete, IconEdit } from "./Heroicons"
import { Popup } from "./Popup"
import { ContextPopup } from "../App"

const Menu = () => {


    return (
        <div className='flex flex-row gap-2 p-1'>
            <button>
                <IconEdit />
            </button>
            <button>
                <IconDelete />
            </button>
        </div>
    )
}

export const Box = () => {
    return (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48 p-2'>
            <div className='flex justify-end h-1/5 '>
                <Menu />
            </div>
        <div className='flex flex-col items-center justify-center w-full h-4/5 bg-[white] rounded-xl text-[black]'>
            <div>
                box
            </div>
        </div>
        </div>
    )
}



export const List = ({render}:{render: (Box: ()=>JSX.Element )=> ReactNode }) => {

    const PopupContext = useContext(ContextPopup)

    return (
        <div className='flex flex-row flex-wrap'>
            {render(()=><Box />)}
            {
                PopupContext?.value && <Popup />
            }
        </div>
    )

}