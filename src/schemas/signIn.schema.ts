import yup from 'src/libraries/validator.library';

export const SignInSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
});