import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'


const cardss = [
  {
    name: "Безлимитный 300", price: "300", priceTextHigh: "руб", priceTextLow: "/мес", speed: "до 10 Мбит/сек", condition: "Объем включенного трафика не ограничен", color: "#42aaff",
  },
  {
    name: "Безлимитный 450", price: "450", priceTextHigh: "руб", priceTextLow: "/мес", speed: "до 50 Мбит/сек", condition: "Объем включенного трафика не ограничен", color: "#008000",
  },
  {
    name: "Безлимитный 500", price: "500", priceTextHigh: "руб", priceTextLow: "/мес", speed: "до 100 Мбит/сек", condition: "Объем включенного трафика не ограничен", isSelected: true, color: "#ff0000",
  },
  {
    name: "Безлимитный 1000", price: "1000", priceTextHigh: "руб", priceTextLow: "/мес", speed: "до 200 Мбит/сек", condition: "Объем включенного трафика не ограничен", color: "#16251c",
  },
]


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
        colors = {card.colors} 
        isSelected = {card.isSelected}></Cards>
        )
      }
    </div>
  );
}

export default App;
