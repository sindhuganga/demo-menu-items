import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = data.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const retrieveItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title />
        <div>
          <Categories categories={categories} retrieveItems={retrieveItems} />
          <Menu menu={menu} />
        </div>
      </section>
    </main>
  );
};
export default App;
