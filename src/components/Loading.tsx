import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { LoadingProps } from '../types/interfaces';

/**
 * Loading component that uses ClipLoader spinner to indicate loading status.
 * 
 * @param {LoadingProps} props - The properties passed to the component.
 * @param {boolean} props.status - The active status of the loader, true for active.
 * @param {string} props.color - The color of the spinner.
 * @param {React.ComponentType} props.container - The container component that wraps the spinner.
 * @returns The loading spinner within a specified container component.
 */
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
