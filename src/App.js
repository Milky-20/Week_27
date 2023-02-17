import './App.css';
import Cards from './components/Cards';
import cardss from'./components/massiv';

function App() {
  return (
    <div className="App">
      {
        cardss.map((card, i) => 
        <Cards 
        key={i}
        name = {card.name} 
        price = {card.price} 
        priceTextHigh = {card.priceTextHigh} 
        priceTextLow = {card.priceTextLow} 
        speed = {card.speed} 
        condition = {card.condition} 
        color = {card.color} 
        />
        )
      }
    </div>
  );
}

export default App;
