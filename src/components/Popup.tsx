import { useContext } from "react"
import { ContextPopup } from "../App"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormType = {
    name: string;
    lastname: string;
}

const Form = () => {

    const PopupContext = useContext(ContextPopup)
    const formSchema = z.object({
        name: z.string().min(2).max(10),
        lastname: z.string().max(1),
    })
    type FormSchema = z.infer<typeof formSchema>

    const {register, handleSubmit,formState:{errors}} = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    })

    const Submit = (data:FormType) => {
        console.log(data)
    }

    return (
        <form 
        onSubmit={handleSubmit(Submit)}
        className='bg-[#e7e6e6] flex flex-col gap-5 justify-center items-center w-auto p-10 rounded-md'>
            <input  
            {...register('name')}
            placeholder='name' 
            className='p-1 rounded-md' />
            {
                errors.name && <span className='text-[#303030]'>{errors.name.message}</span>
            }
            <input 
            {...register('lastname')}
            placeholder='lastname' 
            className='p-1 rounded-md' />
            {
                errors.lastname && <span className='text-[#303030]'>{errors.lastname.message}</span>
            }
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