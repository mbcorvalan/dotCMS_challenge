import React from 'react';
import { NotificationMsgProps } from '../types/interfaces';

/**
 * NotificationMsg component displays a message inside a dynamically chosen HTML container.
 * The styling of the container changes based on the message type ('succeeded' or 'failed').
 * 
 * @param {NotificationMsgProps} props - The properties for the NotificationMsg component.
 * @param {string} props.msg - The message text to display.
 * @param {React.ElementType} props.container - The container element to use for the message.
 * @param {string} props.type - The type of notification, influences styling ('succeeded' or 'failed').
 * @returns {React.ReactElement} A stylized message container with the notification message.
 */
const NotificationMsg: React.FC<NotificationMsgProps> = ({ msg, container: Container, type }) => {
    return (
        <Container className={type === 'succeeded' ? "notification-msg__container notification-msg__container--succeeded" : "notification-msg__container notification-msg__container--failed"}>
            <p className="notification-msg__text">{msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase()}</p>
        </Container>
    );
};

export default NotificationMsg;