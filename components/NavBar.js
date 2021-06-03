import { connect } from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

import AuthenticatedLinks from './AuthenticatedLinks';
import UnauthenticatedLinks from './UnauthenticatedLinks';

function NavBar(props) {
    const router = useRouter();
    let authLinks = props.user ? <AuthenticatedLinks name={props.user.Name}/> : <UnauthenticatedLinks/>
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100 fixed-top d-flex">
                <Link href="/">
                    <a className="navbar-brand">
                        Covid19 Vaccine Notifier 
                    </a>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Link href="/checkAvailability"> 
                                <a className={"nav-link " +(router.pathname == "/checkAvailability" ? "active" : "")}>
                                    Check Availability 
                                </a>
                            </Link>
                        </Nav.Item>
                        {authLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
            `}</style>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(NavBar);