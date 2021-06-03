import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Link from 'next/link';

function SignUpConfirm(props) {
    return (
        <div>
            <Modal
                show={props.userRegistered}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header>
                    <Modal.Title>Confirm Your Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Please check your inbox for a confirmation email. Click the link in the email to confirm 
                        the email address.
                    </div>
                    <br/>
                    <div>
                        After you confirm sign in with your email.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary">
                    <Link href="signin">
                        <a style={{textDecoration: "none", color: "#ffffff"}}>
                            Proceed To Sign In
                        </a>
                    </Link>
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userRegistered: state.auth.userRegistered
    }
}


export default connect(mapStateToProps)(SignUpConfirm);