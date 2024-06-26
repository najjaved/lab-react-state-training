import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture ";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React UseState Hook Training</h1>

      <div className = 'likeButtons'>
        <LikeButton/>
        <LikeButton/>
      </div>

      <Counter/>
      <ClickablePicture />
      <Dice/>

      <div className = 'likeButtons'>
        <DiscoButton />
        <DiscoButton />
      </div>

      <div className='carousel'>
        <Carousel images= {[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/2.jpg"
            ]}
        />       
      </div>
      
      
    </div>
  );
}

export default App;
