function Food({ f }) {
  return (
    <>
      <div class="card mb-3 food-div" style={{ maxwidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={f.strMealThumb}
              class="img-fluid rounded-start food-image"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{f.strMeal}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
