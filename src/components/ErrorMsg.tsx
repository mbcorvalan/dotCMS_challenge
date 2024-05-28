import React from 'react';
import { ErrorProps } from '../types/interfaces';

const Loading: React.FC<ErrorProps> = ({ msg, container: Container }) => {
    return (
        <Container className="error-msg__container">
            <p className="error-msg__text">{msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase()}</p>
        </Container>
    );
};

export default Loading;
