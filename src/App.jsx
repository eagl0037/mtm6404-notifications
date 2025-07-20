import React, { useState } from 'react'
import notificationsData from './notifications'

function Notification({ id, name, message, onClear }) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '1rem',
      marginBottom: '0.5rem',
      borderRadius: '8px',
      background: '#222',
      color: '#eee'
    }}>
      <strong>{name}</strong>
      <p>{message}</p>
      <button onClick={() => onClear(id)} style={{
        padding: '0.4rem 0.8rem',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#646cff',
        color: 'white'
      }}>
        Clear
      </button>
    </div>
  )
}

export default function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <div style={{
      maxWidth: 600,
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif',
      color: '#eee',
      backgroundColor: '#121212',
      padding: '1rem',
      borderRadius: '8px'
    }}>
      <h1>Notifications ({notifications.length})</h1>
      {notifications.length > 0 ? (
        <>
          {notifications.map(n => (
            <Notification key={n.id} {...n} onClear={clearNotification} />
          ))}
          <button onClick={clearAll} style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            backgroundColor: '#ff4d4d',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}>
            Clear All
          </button>
        </>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  )
}
