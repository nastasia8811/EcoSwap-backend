import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols')
    .required('First name field is requierd')
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
  lastName: yup
    .string()
    .min(2, 'Min 2 symbols')
    .max(20, 'Max 20 symbols')
    .required('Last name field is requierd')
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
  login: yup.string().min(3, 'Min 3 symbols').max(20, 'Max 20 symbols').required('Not valid login'),
  //.matches(/^[a-zA-Z0-9]+$/, 'Should contain only characters and space'),

  email: yup.string().email('Not valid email').required('Email field is requierd'),

  password: yup.string()
    .required('No password provided')
    .min(7, 'Password is too short - should be 8 chars minimum')
    .max(30, 'Password is too long - should be 30 chars maximum')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for password is a-z, A-Z, 0-9'),

  // confirmPassword: yup.string().when('password', {
  //   is: (val) => (val && val.length > 0 ? true : false),
  //   then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same'),
  // }),
  city: yup
      .string()
      .min(2, 'Min 2 symbols')
      .required('City field is requierd'),
  telephone: yup
      .string()
      .typeError("That doesn't look like a phone number")
      .min(14, 'Phone number should start with +49 and contain 14 chars')
      .matches(
          /^\+49\d{11}$/,
          'Phone number should start with +49 and contain 14 chars',
      ),
  // avatarUrl: yup
  //   .string()
  //   .matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     'Enter correct url',
  //   ),
});

export default validationSchema;
