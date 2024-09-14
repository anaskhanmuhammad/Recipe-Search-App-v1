function Category({c}) {
  return (
    <>
      <div class="card categoryContainer" style={{ width: "18rem" }}>
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
