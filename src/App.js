import React, {useState} from 'react';
import './App.css';

const emojiDictionary = {
  "🛖":"Hut",
  "🏦":"Bank",
  "⛰️":"Mountain",
  "🏫":"School",
  "🌅":"Sunrise",
  "🏥":"Hospital",
  "🏭":"Factory",
  "🚧":"Construction",
  "🚀":"Rocket",
  "🚌":"Bus",
}
 var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning,setMeaning] = useState('');

  function emojiInputHandler(event){
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if(meaning === undefined){
      meaning = "we don't have this in our database";
     }
    setMeaning(meaning)
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
       <h1>Emoji Interpreter!</h1>
      <input onChange={emojiInputHandler}/>

      <div style={{fontWeight:"bold",fontSize:"1.4rem",marginTop:"1.2rem",padding:"0rem"}}>Output : &nbsp;
        <span>{meaning}</span> 
        </div> 
      

      <h3> emojis we know </h3>
      {
        emojisWeKnow.map(function (emoji){
          return <span onClick={()=>{emojiClickHandler(emoji)}} style={{fontSize: "2rem",padding:"0.5rem",cursor:"pointer"}} key={emoji}>{emoji}{" "}</span>
        })
      }
    </div>
  );
}

export default App;
