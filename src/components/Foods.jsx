import { useContext } from "react";
import Food from "./Food";
import { Context } from "../store/Food-Recipe-store";

function Foods(params) {
  const { FoodList } = useContext(Context);
  return (
    <>
      {FoodList.map((f) => 
        <Food key={f} f={f}></Food>
      )}
    </>
  );
}

export default Foods;
