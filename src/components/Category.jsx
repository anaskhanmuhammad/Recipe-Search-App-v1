import { useContext } from "react";
import { Context } from "../store/Food-Recipe-store";

function Category({c}) {

    const {RetrieveFood} = useContext(Context)

    function HandleRetrieveFood(strCategory) {
        RetrieveFood(strCategory);
    }


  return (
    <>
      <div class="card categoryContainer" style={{ width: "18rem" }} onClick={() => {HandleRetrieveFood(c.strCategory)}}>
        <img
          src={c.strCategoryThumb}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{c.strCategory}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </>
  );
}

export default Category;
