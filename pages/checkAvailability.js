import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import SlotDetails from '../components/SlotDetails';
import { pincodeResults } from '../store/actions/availabilityAction';

function CheckAvailability(props) {
    const [pincode, setPincode] = useState("");
    const [age, setAge] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.pincodeResults({ pincode, age });
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Form onSubmit={handleSubmit} className="col-xs-12 col-md-8 col-lg-6">
                <Form.Group>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type="text" placeholder="Pincode" value={pincode} onChange={e => setPincode(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <SlotDetails slots={props.slots} />
        </div>
    )

}

function mapStateToProps(state) {
    return {
        slots: state.availability.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pincodeResults: (data) => dispatch(pincodeResults(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckAvailability);