import { useContext } from "react";
import { IconAdd } from "./Heroicons";
import { ContextPopup } from "../App";

export const ButtonAdd = () => {

  const PopupContext = useContext(ContextPopup)

  return (
    <div className="flex justify-end mr-5">
      <button className="text-[white]" onClick={()=>PopupContext?.setValue(true)}>
        <IconAdd />
      </button>
    </div>
  );
};
