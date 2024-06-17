
import { Formik, Form } from 'formik';
import FormikControl from '../CustomInput/FormikControl';
import './FormEventCreate.scss';


interface FormEventCreateProps {
    onSubmit: (values: any) => void;
    initialValues: any;
    validationSchema: any;
}

const FormEventCreate: React.FC<FormEventCreateProps> = ({
                                                               onSubmit,
                                                               initialValues,
                                                               validationSchema
                                                           }) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({isValid}) => (
                    <>
                        <Form className="form-eventCreate" style={{ width: '100%' }}>
                            <div className="form-eventCreate__grid_wrapper">
                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="Title"
                                    color="success"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="title"
                                    placeholder="Enter title"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                <FormikControl
                                    type="date"
                                    control="input"
                                    color="success"
                                    label="Event date"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="date"
                                    placeholder="Enter event date"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                                {/*<FormikControl*/}
                                {/*    type="file"*/}
                                {/*    control="input"*/}
                                {/*    color="success"*/}
                                {/*    label="Photo url"*/}
                                {/*    className="form-eventCreate__grid_wrapper__input"*/}
                                {/*    name="img"*/}
                                {/*    placeholder=""*/}
                                {/*    variant="outlined"*/}
                                {/*    id="outlined-multiline-flexible"*/}
                                {/*    helperText='null'*/}
                                {/*    required*/}
                                {/*/>*/}


                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="City"
                                    color="success"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="city"
                                    placeholder="Enter the name of the city"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />
                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="Description"
                                    color="success"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="description"
                                    placeholder="Enter event description"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />
                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="Location"
                                    color="success"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="location"
                                    placeholder="Enter event description"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />
                                <FormikControl
                                    type="text"
                                    control="input"
                                    label="Available"
                                    color="success"
                                    className="form-eventCreate__grid_wrapper__input"
                                    name="available"
                                    placeholder="Enter event description"
                                    variant="outlined"
                                    id="outlined-multiline-flexible"
                                    helperText='null'
                                    required
                                />

                            </div>
                            <button type="submit" disabled={!isValid}>Save</button>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
};

export default FormEventCreate;
