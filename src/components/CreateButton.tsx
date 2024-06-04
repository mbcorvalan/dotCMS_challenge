import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Component to render a button that navigates to the 'create-news' route when clicked.
 * @returns The button component that triggers navigation.
 */
const CreateButton: React.FC = () => {
    const navigate = useNavigate();

    /**
     * Handle the click event to navigate to the 'create-news' route.
     */
    const handleClick = () => {
        navigate(`/create-news`);
    };

    return (
        <div className="createBtn__container">
            <button onClick={handleClick} className="btn btn-primary btn--fullWidth"><span>Create News</span></button>
        </div>
    );
};

export default CreateButton;
