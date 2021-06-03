import { Spinner } from 'react-bootstrap';

export default function SpinnerComponent() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
