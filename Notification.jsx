import React from 'react';
const Notification = ({ notification, onClear }) => {
    return (
        <div className="notification">
            <h4>{notification.name}</h4>
            <p>{notification.message}</p>
            <button onClick={() => onClear(notification.id)}>Clear</button>
        </div>
    );
};
export default Notification;
