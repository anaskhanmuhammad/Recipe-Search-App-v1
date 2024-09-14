import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FindARecipe from "./components/FindARecipe";
import CategoryListProvider from "./store/Food-Recipe-store";

function App() {
  return (
    <>
      <CategoryListProvider>
        <Header></Header>
        <div className="mainArea">
          <SideBar></SideBar>
          <FindARecipe></FindARecipe>
        </div>
      </CategoryListProvider>
    </>
  );
}

export default App;
