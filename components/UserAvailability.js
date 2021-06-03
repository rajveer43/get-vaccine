import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import SlotDetails from './SlotDetails';
import { userResults } from '../store/actions/availabilityAction';

function UserAvailability(props) {
    useEffect(() => {
        if(props.user) {
          console.log("storing user results");
          props.userResults({
              pincode: props.user.Pincode,
              age: props.user.Age,
              vaccine: props.user.PreferredVaccine
          })
        }
      })
    return (
      <>
        <div>
            <Row className="availabilityContainer p-1 p-md-5" style={{backgroundColor: "var(--light)", borderRadius: "0.7rem"}}>
              
              <Col id="pincode" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center flex-column flex-md-row">
                  <img className="availabilityImg" src="/pincode.svg"/>
                  <h5 className="availabilityHeading text-center ml-md-2">Pincode</h5>
                </div>
                <div className="availabilityValue pt-2">{props.user.Pincode}</div>
              </Col>

              <Col id="age" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center flex-column flex-md-row">
                  <img className="availabilityImg" src="/age.svg"/>
                  <h5 className="availabilityHeading text-center ml-md-2">Age</h5>
                </div>
                <div className="availabilityValue pt-2">{props.user.Age}</div>
              </Col>

              <Col id="preferredVaccine" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
                  <img className="availabilityImg" src="/vaccine.svg"/>
                  <h5 className="availabilityHeading text-center ml-md-2">Preferred Vaccine</h5>
                </div>
                <div className="availabilityValue pt-2">{props.user.PreferredVaccine}</div>
              </Col>
            </Row>
            <SlotDetails slots={props.slots} />
        </div>
        <style jsx>{`
          .availabilityImg {
            width: 1rem;
          }
          .availabilityHeading {
            margin-bottom: 0;
          }
        `}</style>
      </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        slots: state.availability.userResult
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        userResults: (data) => dispatch(userResults(data))
    }
  }
  
  function areEqual(prevProps, nextProps) {
    console.log(prevProps, nextProps);
    if(prevProps.user != null) {
      if((prevProps.user.Pincode == nextProps.user.Pincode) && (prevProps.user.Age == nextProps.user.Age) && (prevProps.user.PreferredVaccine == nextProps.user.PreferredVaccine) && (prevProps.slots != undefined && nextProps.slots != undefined && prevProps.slots.length == nextProps.slots.length)) {
        console.log("same");
        return true;
      } else {
        console.log("not same");
        return false;
      }
    } else {
      if(prevProps.user == nextProps.user) {
        console.log("same");
        return true;
      } else {
        console.log("not same");
        false;
      }
    }
    
  }
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserAvailability, areEqual));
