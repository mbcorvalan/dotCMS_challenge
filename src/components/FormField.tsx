import React from 'react';
import { FormFieldProps } from '../types/interfaces';

/**
 * FormField component renders a form input field with optional textarea configuration.
 * Displays additional information for specific fields such as "Categories" and "Tags".
 * 
 * @param {FormFieldProps} props - The properties passed to the component.
 * @param {string} props.label - The label text for the form field.
 * @param {string} props.name - The name attribute for the form field, used to identify the form data after it's submitted.
 * @param {string} props.value - The value of the form field, used for controlled components.
 * @param {Function} props.onChange - The function to call when the value of the form field changes.
 * @param {string} [props.error] - An error message to display if there is an error associated with this field.
 * @param {boolean} [props.isTextArea] - If true, the form field is rendered as a textarea instead of a regular input.
 * @returns The form field component.
 */
const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, error, isTextArea }) => (
    <div>
        <label className="create-news-form__label">{label}<span className="create-news-form__label-required">*</span></label>
        {label === "Categories" && <p className="create-news-form__label-info">Separate categories with a comma</p>}
        {label === "Tags" && <p className="create-news-form__label-info">Separate tags with a comma</p>}
        {isTextArea ? (
            <textarea className="create-news-form__textarea" name={name} value={value} onChange={onChange} />
        ) : (
            <input className="create-news-form__input" type="text" name={name} value={value} onChange={onChange} />
        )}
        {error && <p className="create-news-form__error">{error}</p>}
    </div>
);

export default FormField;
