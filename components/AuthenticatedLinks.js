import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav, NavDropdown } from 'react-bootstrap';

import LogOut from './LogOut';

export default function AuthenticatedLinks(props) {
    const router = useRouter();
    return (
        <>
            <NavDropdown title={props.name} id="collasible-nav-dropdown" className={(router.pathname == "/userDetails" ? "active" : "")}>
                <Link href="/userDetails">
                    <a className="dropdown-item">Edit Preferences</a>
                </Link>
                <div className="dropdown-divider"></div>
                <LogOut/>
            </NavDropdown>
        </>
    )
}
