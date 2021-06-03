import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert} from 'react-bootstrap';

function AlertComponent(props) {
    if(props.alert != null) {
        console.log(props);
        return (
            <Alert show variant={props.alert.type} style={{position: "fixed", top: "4.2rem", right: 0, width: "70%", height: "auto", zIndex: "10000"}}>
                {props.alert.content}
            </Alert>
        );
    } else {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert
    }
}
export default connect(mapStateToProps)(AlertComponent);