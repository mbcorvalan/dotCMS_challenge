import React from 'react';
import { options } from '../config/constants';

interface SelectOptionProps {
    selectedOption: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

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
