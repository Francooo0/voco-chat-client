import { useEffect, useState } from 'react';
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";
import './App.css';

function App() {


  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');
  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(()=>{
    onChildAdded(chatListRef, (data) => {

      setChats(chats=>[...chats,data.val()])

    });
  },[])

  const sendChat = () => {

    const chatRef = push(chatListRef);
    set(chatRef, {
      name, message: msg
    });
    //const c = [...chats];
    //c.push();
    //setChats(c);
    setMsg('');
  };
  return (

      <div id="algus">
        <h3>KHK</h3>
        {name? null: <div>
          <input id="nimi"
                 type = "text"
                 placeholder="Sisesta kasutajanimi, et alustada"
                 onBlur={(e) => setName(e.target.value)}
          ></input>
        </div>}
        {name? <div>

          <div className="chat-container">
            {chats.map((c,i) => (
                <div key={i} className={`container ${c.name === name ? 'me' : ''}`}>
                  <p className="chatbox">
                    <strong>{c.name}: </strong>
                    <span>{c.message}</span>
                  </p>
                </div>
            ))}
          </div>

          <div className="btm">
            <h3>Kasutaja: {name}</h3>
            <input
                type="text"
                onInput={(e) => setMsg(e.target.value)}
                value={msg}
                placeholder="Sisesta sonum"
            ></input>
            <button onClick={(e) => sendChat()}>Saada</button>
          </div>
        </div> : null}
      </div>
  );
}

export default App;




