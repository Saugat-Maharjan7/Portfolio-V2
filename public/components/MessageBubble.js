import React from 'react';
import Image from 'next/image';
import me from "../../public/me.png"

export default function MessageBubble({ messages }) {
  return (
    <div className="MessageBulb d-flex flex-row GAPm">
      <Image src={me} alt="me" className="meSender" />
      <ul className='messages d-flex flex-column GAPxs'>
        {messages.map((msg, index) => (
          <li
            key={index}
            style={msg.styles}
            className='message d-flex flex-row'
          >
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
