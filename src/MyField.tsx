import { TextField } from '@mui/material';
import { FieldProps } from 'formik';
import * as React from 'react';

interface IMyFieldProps extends FieldProps {
    placeholder: string,
    label: string
}

const MyField: React.FunctionComponent<IMyFieldProps> = ({ placeholder, field }) => {
    return (
        <TextField
            placeholder={placeholder}
            {...field}
            label={placeholder}
        />
    )
};

export default MyField;
