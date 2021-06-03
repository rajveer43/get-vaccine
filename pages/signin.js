import { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { loginUser, updatePassword } from '../store/actions/authAction';
import { useRouter } from 'next/router';

function SignIn(props) {
    const router = useRouter();
    if(props.user) {
        router.push('/');
    }
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        forgotPassword: false
    })

    const onChange = (e) => {
        if(e.target.type == 'checkbox') {
            setFormState({ ...formState, [e.target.name]: !formState.forgotPassword});
        } else{
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.forgotPassword) {
            props.loginUser({
                email: formState.email,
                password: formState.password
            });
        } else {
            props.forgotPassword({
                email: formState.email
            })
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className="col-xs-12 col-md-8 col-lg-6">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formState.email}
                        onChange={onChange}
                        required
                    />
                </Form.Group>
                {
                !formState.forgotPassword ?
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={onChange}
                        required={!formState.forgotPassword}
                    />
                </Form.Group>
                : null
                }
                <Form.Group>
                    <Form.Check name="forgotPassword" label="Forgot Password" checked={formState.forgotPassword} onChange={onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (data) => dispatch(loginUser(data)),
        forgotPassword: (data) => dispatch(updatePassword(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);