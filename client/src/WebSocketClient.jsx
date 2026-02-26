import {useState, useEffect } from 'react';
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
const WebSocketClient = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const client = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
            onConnect: () => {
                client.subscribe("/topic/chanel1", (message)=>{
                    const body = JSON.parse(message);
                    setMessages((prev) => [...prev, body]);
                }

            },

            onDisconnect: () => {
                //handle disconnection
            }
        });

        client.activate();

        return () => {
            client.deactivate();
        };

    },[]);

    return <div>
        {messages.lenght === 0 ? (<p>No messages...</p>) : messages.map(messages, i) => {
        ))}
    </div>

}

export default WebSocketClient;