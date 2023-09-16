import { useContext } from "react"
import { ContextPopup } from "../App"

const Form = () => {

    const PopupContext = useContext(ContextPopup)

    return (
        <form className='bg-[#e7e6e6] flex flex-col gap-5 justify-center items-center w-auto p-10 rounded-md'>
            <input placeholder='name' className='p-1 rounded-md' />
            <input placeholder='lastname' className='p-1 rounded-md' />
            <div className='flex flex-row gap-2 flex-wrap'>
            <button type='submit' className='text-[#e7e6e6] bg-[#303030] p-1 pr-5 pl-5 rounded-md'>Add</button>
            <button 
            type='button' 
            className='text-[#303030] p-1 pr-5 pl-5 rounded-md'
            onClick={()=>PopupContext?.setValue(false)}
            >Close</button>
            </div>
        </form>
    )
}

export const Popup = () => {
    
    return (
        <div className='w-full h-full absolute top-0 bg-[#393838cf] flex items-center justify-center'>
            <Form />
        </div>
    )
}