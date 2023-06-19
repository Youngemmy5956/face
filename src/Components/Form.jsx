import React from 'react'
import io from 'socket.io-client';

export default function Form() {
    const socket = io();
    $('form').submit(() =>{
      socket.emit('message', $('#m').val());
      console.log('form')
      $('#m').val('');
      return false;
    });
    socket.on('message', (msg) =>{
      $('#messages').append($('<li>').text(msg));
    });


  return (
    <div>


  <form action="">
    <input type="text" />
    <button type="submit">Send</button>
  </form>

    </div>
  )
}
