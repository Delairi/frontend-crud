import { createContext, useState } from "react";
import { ButtonAdd } from "./components/Buttons";
import Info from "./components/Info";
import { Box, List } from "./components/List";
import Title from "./components/Title";
import { useAppSelector } from "./hooks/useApp";
import useFetch from "./hooks/useFetch";


export const ContextPopup = createContext<ContextPopUp | undefined>(undefined);

function App() {
  const [IsActive, setIsActive] = useState(false);
  const [FormValues, setFormValues] = useState<User|null>(null)
  const {state} = useFetch<User[]>('api/users')
  const Data = useAppSelector((state) => state.form)
  if(state.status === 'loading') return <p>Loading...</p>
  if(state.error) return <p>{state.error.message}</p>
  
 
  

  return (
    <div className="flex flex-col gap-5 w-full">
      <Title />

      <Info />
      <ContextPopup.Provider
        value={{
          value: IsActive,
          setValue: setIsActive,
          formValues: FormValues,
          setFormValues: setFormValues,
        }}
      >
        <ButtonAdd />

        <List
          render={() => (
            <>
              {Data !== null && Data.map((v) => {
                return <Box key={v.id} {...v} />;
              })}
            </>
          )}
        />
      </ContextPopup.Provider>
    </div>
  );
}

export default App;
