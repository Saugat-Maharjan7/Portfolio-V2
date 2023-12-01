import React from 'react';
import Image from 'next/image';
import me from "../../public/me.png";

export default function MessageBubble({ messages, variant }) {
  let componentToRender;

  if (variant === 'sender') {
    componentToRender = (
      <div className="MessageBulb d-flex flex-row GAPm">
        <ul className='messages d-flex flex-column GAPxs align-items-end'>
          {messages.map((msg, index) => (
            <li
              key={index}
              style={msg.styles}
              className='message-reverse d-flex flex-row'
            >
              {msg.message}
            </li>
          ))}
        </ul>
        <Image src={me} alt="me" className="meSender" />
      </div>
    );
  } else if (variant === 'receiver') {
    componentToRender = (
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
  } else {
    // Default variant or any other case
    componentToRender = (
      <div className="MessageBulb d-flex flex-row GAPm">
        {/* Default variant structure */}
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

  return componentToRender;
}
