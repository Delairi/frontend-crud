import { useContext } from "react"
import { ContextPopup } from "../App"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useFetch from "../hooks/useFetch";
import { useAppDispatch } from "../hooks/useApp";
import { add, update } from "../features/FormSlice";



const Form = () => {

    const {Fetch} = useFetch<User[]>('')
    const PopupContext = useContext(ContextPopup)
    const formSchema = z.object({
        name: z.string().min(2).max(10),
        lastname: z.string().max(1),
    })
    type FormSchema = z.infer<typeof formSchema>

    const {register, handleSubmit,formState:{errors}} = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    })
    const dispatch = useAppDispatch()
    const Submit = async (data:FormType) => {
        if(PopupContext?.formValues?.id){ 
           const response = await Fetch(`api/users/${PopupContext?.formValues?.id}`,{
                method:'PUT',
                body:JSON.stringify(data)
            })
            dispatch(update(response))
            PopupContext?.setValue(false)
            return 
        }
        const response = await Fetch('api/users',{
            method:'POST',
            body:JSON.stringify(data)
        })
        dispatch(add(response))
        PopupContext?.setValue(false)
    }

    const Cancel = () => {
        PopupContext?.setFormValues(null)
        PopupContext?.setValue(false)
    }

    return (
        <form 
        onSubmit={handleSubmit(Submit)}
        className='bg-[#e7e6e6] flex flex-col gap-5 justify-center items-center w-auto p-10 rounded-md'>
            <input  
            {...register('name')}
            placeholder='name' 
            defaultValue={PopupContext?.formValues?.name}
            className='p-1 rounded-md' />
            {
                errors.name && <span className='text-[#303030]'>{errors.name.message}</span>
            }
            <input 
            {...register('lastname')}
            placeholder='lastname' 
            defaultValue={PopupContext?.formValues?.lastname}
            className='p-1 rounded-md' />
            {
                errors.lastname && <span className='text-[#303030]'>{errors.lastname.message}</span>
            }
            <div className='flex flex-row gap-2 flex-wrap'>
            <button type='submit' className='text-[#e7e6e6] bg-[#303030] p-1 pr-5 pl-5 rounded-md'>Add</button>
            <button 
            type='button' 
            className='text-[#303030] p-1 pr-5 pl-5 rounded-md'
            onClick={Cancel}
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