import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { LoadingProps } from '../types/interfaces';

const Loading: React.FC<LoadingProps> = ({ status, color, container: Container }) => {
    return (
        <Container className="loading__container">
            <ClipLoader
                color={color}
                loading={status}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Container>
    );
};

export default Loading;
