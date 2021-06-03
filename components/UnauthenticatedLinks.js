import {Nav} from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UnauthenticatedLinks() {
    const router = useRouter();
    return (
        <>
            <Nav.Item>
                <Link href="/signin">
                    <a className={"nav-link " +(router.pathname == "/signin" ? "active" : "")}>
                        Sign In
                    </a> 
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link href="/signup">
                    <a className={"nav-link " +(router.pathname == "/signup" ? "active" : "")}>
                        Sign Up
                    </a> 
                </Link>
            </Nav.Item>
        </>
    )
}
