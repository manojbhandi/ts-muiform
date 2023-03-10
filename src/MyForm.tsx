import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Field, Form, Formik } from 'formik'
import * as React from 'react'
import MyField from './MyField'



interface Values {
    firstName: string,
    lastName: string,
    email: string
}
interface Props {
    onSubmit: (values: Values) => void
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            onSubmit={values => {
                onSubmit(values)
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <div>
                        <Field name='firstName' placeholder='first name' component={MyField} />
                    </div>
                    <Field name='lastName' placeholder='last name' component={MyField} />
                    <div>
                        <Field name='email' placeholder='email' component={MyField} />
                    </div>
                    <Button type='submit'>Submit</Button>
                    <pre>{JSON.stringify(values)}</pre>
                </Form>
            )}
        </Formik>
    )
}