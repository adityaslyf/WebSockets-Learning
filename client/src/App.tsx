import { useEffect, useState } from "react";
const App = () => {

  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestmessage, setLatestMessage] = useState<string>('');


  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8081');
    socket.onopen = () => {
      console.log('connected');
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      setLatestMessage(message.data);
      console.log('message', message.data);
    }

  },[]);

  if (!socket) {
    return <div>loading...</div>
  };


  return (

    <div>
      <input></input>
      <button onClick={
        () => socket.send('hello world')}>Send message</button>
      {latestmessage}
    </div>
  )
}

export default App
