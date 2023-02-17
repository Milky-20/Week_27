import './App.css';
import Cards from './components/Cards';
// import './components/massiv';

const cardss = [
  {
    name: "Безлимитный 300", 
    price: "300", 
    priceTextHigh: "руб", 
    priceTextLow: "/мес", 
    speed: "до 10 Мбит/сек", 
    condition: "Объем включенного трафика не ограничен", 
    color: "#7fc7ff",
  },
  {
    name: "Безлимитный 450", 
    price: "450", 
    priceTextHigh: "руб", 
    priceTextLow: "/мес", 
    speed: "до 50 Мбит/сек", 
    condition: "Объем включенного трафика не ограничен", 
    color: "#00a550",
  },
  {
    name: "Безлимитный 550", 
    price: "550", 
    priceTextHigh: "руб", 
    priceTextLow: "/мес", 
    speed: "до 100 Мбит/сек", 
    condition: "Объем включенного трафика не ограничен", 
    color: "#ff0033",
  },
  {
    name: "Безлимитный 1000", 
    price: "1000", 
    priceTextHigh: "руб", 
    priceTextLow: "/мес", 
    speed: "до 200 Мбит/сек", 
    condition: "Объем включенного трафика не ограничен", 
    color: "#16251c",
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
        />
        )
      }
    </div>
  );
}

export default App;
