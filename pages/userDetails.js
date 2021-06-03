import { Form, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { updateUser } from '../store/actions/authAction';

function UserDetails(props) {
    const router = useRouter();
    useEffect(() => {
        if(!props.user) {
            router.push('/');
        }
    })

    const [formState, setFormState] = useState({
        Pincode: props.user ? props.user.Pincode : null,
        Age: props.user ? props.user.Age : null,
        PreferredVaccine: props.user ? props.user.PreferredVaccine : null,
        IsSubscribed: props.user ? props.user.IsSubscribed : null
    })

    const onChange = (e) => {
        if(e.target.name == 'IsSubscribed') {
            setFormState({ ...formState, [e.target.name]: !formState.IsSubscribed});
        } else {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // setAlertState(true);
        props.updateUser(formState)
        console.log(formState);
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
                            value={props.user.Name}
                            readOnly
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="email"
                            type="email"
                            value={props.user.Email}
                            readOnly
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="Age"
                            type="number"
                            min="1"
                            placeholder="Age"
                            value={formState.Age}
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
                            name="Pincode"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            type="text"
                            placeholder="Pincode"
                            value={formState.Pincode}
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
                            name="PreferredVaccine"
                            id="any"
                            value="ANY"
                            checked={formState.PreferredVaccine == "ANY"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covishield"
                            name="PreferredVaccine"
                            value="COVISHIELD"
                            id="covishield"
                            checked={formState.PreferredVaccine == "COVISHIELD"}
                            onChange={onChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Covaxin"
                            name="PreferredVaccine"
                            value="COVAXIN"
                            id="covaxin"
                            checked={formState.PreferredVaccine == "COVAXIN"}
                            onChange={onChange}
                        />
                    </Form.Group>
                </fieldset>
                <Form.Group>
                    <Form.Check name="IsSubscribed" label="Subscribe to email notifications" checked={formState.IsSubscribed} onChange={onChange}/>
                </Form.Group>
                <Button type="submit">Save Changes</Button>
                <Button className="ml-3" variant="outline-primary" onClick={() => router.back()}>Cancel</Button>
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
        updateUser: (data) => dispatch(updateUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);