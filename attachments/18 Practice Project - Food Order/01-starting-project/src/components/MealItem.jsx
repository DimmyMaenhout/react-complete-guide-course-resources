export default function MealItem({ meal }) {
  return (
    <div className="meal-item">
      <article>
        {/* <div> */}
        <img src={`http://localhost:3000/${meal.image}`} alt="food image" />
        {/* </div> */}
        <div className="center meal-item-actions">
          <h3>{meal.name}</h3>

          <p className="meal-item-price">${meal.price}</p>

          <p className="meal-item-description">{meal.description}</p>
          <button className="button">Add to Cart</button>
        </div>
      </article>
    </div>
  );
}
