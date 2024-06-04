import React from 'react';
import { options } from '../config/constants';
import { SelectOptionProps } from '../types/interfaces';

/**
 * SelectOption component renders a dropdown (select element) that allows users to choose from a list of options.
 * It displays options provided from a global configuration and handles changes via a passed handleChange function.
 * 
 * @param {SelectOptionProps} props - The properties passed to the component.
 * @param {string} props.selectedOption - The currently selected option in the dropdown.
 * @param {(event: React.ChangeEvent<HTMLSelectElement>) => void} props.handleChange - The function to call when the selection changes.
 * @returns {React.ReactElement} A list item containing a custom-styled select dropdown.
 */
const SelectOption: React.FC<SelectOptionProps> = ({ selectedOption, handleChange }) => {
    return (
        <li>
            <div className="custom-select__container">
                <select
                    className="custom-select"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </li>
    );
};

export default SelectOption;
