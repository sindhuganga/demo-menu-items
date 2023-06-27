const Categories = ({ categories, retrieveItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => retrieveItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
