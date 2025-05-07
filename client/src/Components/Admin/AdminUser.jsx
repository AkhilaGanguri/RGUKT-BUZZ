import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdminUser = ({ email }) => {
    const [showEmail, setShowEmail] = useState(false);

    const toggleShowEmail = () => {
        setShowEmail(!showEmail);
        
    };

    const getAvatarInitial = () => {
        if (email) {
            return email.charAt(0).toUpperCase();
        }
        return '';
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: '70px', // Adjust top position as needed
                right: '20px', // Adjust right position as needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                cursor: 'pointer',
                zIndex: 1000, // Ensure it's above other content
            }}
            onMouseEnter={toggleShowEmail}
            onMouseLeave={toggleShowEmail}
        >
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                {getAvatarInitial()}
            </div>
            <span
                style={{
                    opacity: showEmail ? 1 : 0,
                    marginLeft: '5px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    color:'white',
                    transition: 'opacity 0.3s',
                }}
            >
                {email}
            </span>
        </div>
    );
};

export default AdminUser;
