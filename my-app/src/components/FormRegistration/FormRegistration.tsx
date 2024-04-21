import './FormRegistration.scss';
import { Formik, Form } from 'formik';
import FormikControl from '../CustomInput/FormikControl'
import { useState } from 'react';

import PasswordInput from '../CustomInput/PasswordInput';


const FormRegistration = ({ onSubmit,initialValues, validationSchema}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(isValid) => {
                    return (
                        <>
                            <Form className="form-registration" style={{ width: '100%' }}>
                                <div className="form-registration__grid_wrapper">
                                    <FormikControl

                                        type="text"
                                        control="input"
                                        label="First Name"
                                        color="success"
                                        className="form-registration__input"
                                        name="firstName"
                                        placeholder="Enter your first name"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"

                                        required
                                    />

                                    <FormikControl

                                        type="text"
                                        control="input"
                                        color="success"
                                        label="Last Name"
                                        className="form-registration__input"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"


                                        required
                                    />

                                    <FormikControl

                                        type="text"
                                        control="input"
                                        color="success"
                                        label="Login"
                                        className="form-registration__input"
                                        name="login"
                                        placeholder="Enter your login"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"


                                        required
                                    />

                                    <FormikControl

                                        type="text"
                                        control="input"
                                        color="success"
                                        label="Email"
                                        className="form-registration__input"
                                        name="email"
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"


                                        required
                                    />

                                        <PasswordInput name={"password"}
                                            placeholder={"Enter your password"}
                                            label={"Enter your password"}
                                            showPassword={showPassword}
                                            onClick={() => setShowPassword(!showPassword)}
                                            onMouseDown={(e) => e.preventDefault()} />

                                        <PasswordInput name={"confirmPassword"}
                                            placeholder={"Confirm password"}
                                            label={"Confirm password"}
                                            showPassword={showRepeatPassword}
                                            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                            onMouseDown={(e) => e.preventDefault()} />

                                    <FormikControl

                                        type="text"
                                        control="input"
                                        color="success"
                                        label="Telephone"
                                        className="form-registration__input"
                                        name="telephone"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"
                                        required
                                        placeholder="+491 99 999 99 99"

                                    />

                                    <FormikControl
                                        type="text"
                                        control="input"
                                        label="City"
                                        color="success"
                                        className="form-registration__input"
                                        name="city"
                                        placeholder="Enter your city"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"



                                    />
                                    <FormikControl

                                        type="text"
                                        control="input"
                                        label="Country"
                                        color="success"
                                        className="form-registration__input"
                                        name="country"
                                        placeholder="Enter your country"
                                        variant="outlined"
                                        id="outlined-multiline-flexible"


                                    />

                                    <FormikControl
                                        id="outlined-multiline-flexible"
                                        name="birthdate"
                                        placeholder="dd.mm.yyyy"
                                        label="Birth date"
                                        type="text"
                                        control="input"
                                        color="success"
                                        className="form-registration__input"
                                        variant="outlined"

                                    />
                                </div>
                                <button type={"submit"} disabled={!isValid} onSubmit={onSubmit}>create</button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </>
    );
};

export default FormRegistration;