import React, {useEffect, useState} from 'react'
import {addDoc, collection, serverTimestamp, onSnapshot, query, doc, orderBy} from 'firebase/firestore'
import {db, auth} from "../firebase"

export default function Support() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([])
  const messagesRef = collection(db,"messages")

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"))
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });

      setMessages(messages)
    });
    return () => unsuscribe();
  },[]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (newMessage === "") return;
    
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      photo: auth.currentUser.photoURL,
    });

    setNewMessage("")
  };

  return (
    <div className='support'>
      <h2 className='support__title'>Поддержка</h2>
      <div className='messages'>
        {messages.map((message) => (
            <div className={`message ${auth.currentUser.uid ? 'sent' : 'received'}`} key={message.id}>
            <img src={message.photo} alt='user-photo' className='user-photo'/>
            <span className='user'>{message.user}</span>
            <p className='message-text'>{message.text}</p>
          </div>
        ))}
        </div>
      <form onSubmit={handleSubmit} className='new-message-form'>
        <textarea className='new-message-input'
        placeholder='Введите сообщение'
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        />
        <button tupe="submit" className='send-button'>Отправить</button>
      </form>
    </div>
  )
}

