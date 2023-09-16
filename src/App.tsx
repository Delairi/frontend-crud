import { createContext, useState } from "react";
import { ButtonAdd } from "./components/Buttons";
import Info from "./components/Info";
import { List } from "./components/List";
import Title from "./components/Title";

type ContextPopUp = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ContextPopup = createContext<ContextPopUp | undefined>(undefined);

function App() {
  const [IsActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-full">
      <Title />

      <Info />
      <ContextPopup.Provider
        value={{
          value: IsActive,
          setValue: setIsActive,
        }}
      >
        <ButtonAdd />

        <List
          render={(Box) => (
            <>
              {[...new Array(10).fill(0)].map((_, i) => {
                return <Box key={i} />;
              })}
            </>
          )}
        />
      </ContextPopup.Provider>
    </div>
  );
}

export default App;
