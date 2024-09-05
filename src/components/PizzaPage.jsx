import pizza from '../assets/pizza.jpg';

function PizzaPage() {
  return (
    <div className="pizza-page">
      <p>Just a page so that I can get an url for the image, nothing to see here</p>
      <div className="pizza-image-container">
        <img src={pizza} alt="Delicious Pizza" className="pizza-image" />
      </div>
    </div>
  );
}

export default PizzaPage;