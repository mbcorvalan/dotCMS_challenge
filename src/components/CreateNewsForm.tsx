import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useFormState } from '../hooks/useFormState';
import { useErrorCreateForm } from '../hooks/useErrorCreateForm';
import NotificationMsg from './NotificationMsg';
import { useCreateForm } from '../hooks/useCreateForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from './Loading';
import { FormData } from '../types/interfaces';
import { formatDate } from '../config/constants';
import FormField from './FormField';
import { IoArrowBackOutline } from "react-icons/io5";

/**
 * Component for creating news posts with form inputs.
 */

const CreateNewsForm: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const newsError = useSelector((state: RootState) => state.postNews.error);
    const newsStatus = useSelector((state: RootState) => state.postNews.status);
    const [formState, handleFormChange, resetState] = useFormState<FormData>({
        title: '',
        publishDate: formatDate(new Date()),
        postingDate: formatDate(new Date()),
        body: '',
        categories: '',
        tags: '',
        contentType: 'Blog',
        urlTitle: '',
        contentHost: 'demo.dotcms.com'
    });

    const [errors, setError] = useErrorCreateForm();

    const validateField = (name: string, value: string) => {
        if (value.trim() === '') {
            setError(name, `${name} is required`);
        } else {
            setError(name, null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleFormChange(e);
        validateField(e.target.name, e.target.value);
        if (e.target.name === 'title') {
            handleFormChange({
                target: {
                    name: 'urlTitle',
                    value: e.target.value.toLowerCase().replace(/ /g, '-')
                }
            } as unknown as React.ChangeEvent<HTMLInputElement>);
        }
    };

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);

        if (!date) {
            setError('publishDate', 'Publish Date is required');
            return;
        }

        setError('publishDate', null);

        const event = {
            target: {
                name: 'publishDate',
                value: formatDate(date)
            }
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        handleFormChange(event);
    };

    const validateForm = () => {
        let isValid = true;
        Object.keys(formState).forEach((key) => {
            const value = (formState as any)[key];
            if (typeof value === 'string' && value.trim() === '') {
                setError(key, `${key} is required`);
                isValid = false;
            }
        });

        if (!selectedDate) {
            setError('publishDate', 'Publish Date is required');
            isValid = false;
        }

        return isValid;
    };

    const { handleSubmit } = useCreateForm(formState);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit();
            resetState();
        }
    };

    return (
        <form className="create-news-form__container" onSubmit={onSubmit}>
            <FormField
                label="Title"
                name="title"
                value={formState.title}
                onChange={handleChange}
                error={errors.title}
            />
            <label className="create-news-form__label">Publish Date<span className="create-news-form__label-required">*</span></label>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
            />
            {errors.publishDate && <p className="create-news-form__error">{errors.publishDate}</p>}
            <FormField
                label="Body"
                name="body"
                value={formState.body}
                onChange={handleChange}
                error={errors.body}
                isTextArea
            />
            <FormField
                label="Categories"
                name="categories"
                value={formState.categories}
                onChange={handleChange}
                error={errors.categories}
            />
            <FormField
                label="Tags"
                name="tags"
                value={formState.tags}
                onChange={handleChange}
                error={errors.tags}
            />
            <div className="create-news-form__button">
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-secondary"><IoArrowBackOutline /> Back to Dashboard</button>
            </div>
            {newsError && <NotificationMsg msg={newsError} container="div" type="failed" />}
            {newsStatus === 'loading' && <Loading status={true} color="#c336e5" container="div" />}
            {newsStatus === 'succeeded' && <NotificationMsg msg='New Post created' container="div" type="succeeded" />}
        </form>
    );
};

export default CreateNewsForm;
