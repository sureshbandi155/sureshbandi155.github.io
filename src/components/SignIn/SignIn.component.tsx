import React, { useRef } from 'react';
import { Header, Form, Button, Input } from 'semantic-ui-react';
import { SignInSchema } from 'src/schemas/signIn.schema';
import Logo from '../../assets/images/Logo_white.svg';
import styles from './SignIn.module.scss';

export const SignIn: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (values) => {
        console.log('values', values);
    }
    const handleSignIn = () => {
        if (formRef?.current) formRef.current.handleSubmit();
    }
    return (
        <div className={[styles['signInBg']].join(' ')}>
            <div className={styles['logo']}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles['signInContainer']}>
                <div className={styles['headingSec']}>
                    <Header as="h4" content="Sign In to Socialize" />
                </div>
                <div className={styles['formSec']}>
                    <Form onSubmit={handleSubmit} ref={formRef} validationSchema={SignInSchema}>
                        {/* {({ control, errors }) => ( */}
                        <>
                            <Form.Field>
                                <label>Email Address</label>
                                <Input
                                    name="emali"
                                    placeholder="Enter your mail"
                                    required
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input
                                    type='password'
                                    name="password"
                                    placeholder="Enter Password"
                                    required
                                />
                            </Form.Field>
                            <Form.Field></Form.Field>
                        </>
                        {/* )} */}
                    </Form>
                    {/* <Form onSubmit={handleSubmit} ref={formRef} validationSchema={SignInSchema}>
                        {({ control, errors }) => {
                            return (
                                <>
                                    <label>Email Address</label>
                                    <Form.Input
                                        type="email"
                                        as={Input}
                                        name="emali"
                                        control={control}
                                        error={errors.email}
                                        placeholder="Enter your mail"
                                        required
                                    />
                                    <label>Password</label>
                                    <Form.Input
                                        type="password"
                                        as={Input}
                                        name="password"
                                        control={control}
                                        errors={errors.password}
                                        placeholder="Enter Password"
                                        required
                                    />
                                </>
                            );
                        }}

                    </Form> */}
                    <Button primary onClick={handleSignIn}>Sign In</Button>
                </div>
            </div>
            <div className={['centerAlign', styles['bottomText']].join(' ')}>
                <a>Forgot password?</a>
                <a>Sign up</a>
            </div>
        </div>
    );
};
