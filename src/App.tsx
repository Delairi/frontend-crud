import { ButtonAdd } from "./components/Buttons"
import { List } from "./components/List"

function App() {

  return (
    <div className='flex flex-col gap-5 w-full'>
        <div className='text-center mt-5'>
          <h1 className='text-2xl'>TEST YOUR BACKEND WITH THIS FRONTEND CRUD</h1>
        </div>

        <div className='flex justify-end mr-5'>
          <ButtonAdd />
        </div>

          <List/>
        

    </div>
  )
}

export default App
