import { useContext, useState } from "react";
import { Context } from "../store/Food-Recipe-store";
import Category from "./Category";

function Categories(params) {
  const { categoryList, RetrieveCategories } = useContext(Context);

  const [fetchcategories, setfetchcategories] = useState(false);

  if (!fetchcategories) {
    RetrieveCategories();
    setfetchcategories(true);
  }

  return (
    <>
        {categoryList.map((c) => (
          <Category key={c} c={c}></Category>
        ))}

    </>
  );
}

export default Categories;
