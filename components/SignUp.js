import { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';

import SignUpConfirm from './SignUpConfirm';
import { registerUser } from '../store/actions/authAction';


function SignUp(props) {
    const router = useRouter();
    if(props.user) {
        router.push('/');
    }
    
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        pincode: "",
        age: 0,
        preferredVaccine: "ANY"
    })

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.registerUser(formState);
    }

    return (
        <div className="d-flex justify-content-center mb-5">
            <Form onSubmit={handleSubmit} className="col-xs-12 col-md-8 col-lg-6">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            value={formState.name}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            value={formState.email}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={formState.confirmPassword}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="age"
                            type="number"
                            min="1"
                            placeholder="Age"
                            value={formState.age}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your age.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="pincode"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            type="text"
                            placeholder="Pincode"
                            value={formState.pincode}
                            onChange={onChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                            Please enter your pincode.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <fieldset>
                    <Form.Group>
                        <Form.Label>
                            Preferred vaccine
                        </Form.Label>
                        <Form.Check
                            type="radio"
                            label="Any"
                            name="preferredVaccine"
                            id="any"
                            value="ANY"
                            checked={formState.preferredVaccine == "ANY"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covishield"
                            name="preferredVaccine"
                            value="COVISHIELD"
                            id="covishield"
                            checked={formState.preferredVaccine == "COVISHIELD"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covaxin"
                            name="preferredVaccine"
                            value="COVAXIN"
                            id="covaxin"
                            checked={formState.preferredVaccine == "COVAXIN"}
                            onChange={onChange}
                        />
                    </Form.Group>
                </fieldset>

                <Button type="submit">Register</Button>
            </Form>
            <SignUpConfirm/>
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
        registerUser: (data) => dispatch(registerUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);