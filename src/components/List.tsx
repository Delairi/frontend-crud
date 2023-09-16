import { IconDelete, IconEdit } from "./Heroicons"

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

const Box = () => {
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


export const List = () => {

    return (
        <div className='flex flex-row flex-wrap'>
            {
                [...new Array(10).fill(0)].map((_) => {
                    return <Box />
                })
            }
        </div>
    )

}