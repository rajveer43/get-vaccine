import {Container, Row, Col} from 'react-bootstrap';

function Session(props) {
    return (
        <div className="session flex-shrink-0 p-2 mx-2">
            <h6>{props.date}</h6>
            <p className="text-uppercase">{props.vaccine}</p>
            <p>
                Capacity: <small className="capacity-no">{props.available_capacity}</small>
            </p>

            <style jsx>{`
                .session {
                    border-radius: 0.5rem;
                }
                .session p {
                    color: var(--gray);
                    margin-bottom: 0.5rem
                }
                .session .capacity-no {
                    color: var(--cyan);
                    font-weight: 700;
                }
            `}</style>
        </div>
    )
}
export default function Slot(props) {

    return (
        <>
        <Row className="d-flex flex-row col-xs-12 py-3 justify-content-between">
            <Col xs={6} md={4} className="center-location d-flex flex-column justify-content-center align-items-center"  style={{backgroundColor: "var(--light)", borderRadius: "0.5rem"}}>
                <Row className="col-xs-10 w-100 p-1" style={{fontWeight:"500"}}>{props.name}</Row>
                <Row className="col-xs-10 w-100 p-1">{props.address}</Row>
            </Col>
            <Col className="overflow-auto d-flex flex-row" xs={5} md={7} >
                {
                    props.sessions && props.sessions.map((s, key) => {
                        return (
                            <Session key={key} {...s}/>
                        )
                    })
                }
            </Col>
        </Row>
        <div className="divider"></div>
        <style jsx>{`
            .divider {
                border-bottom: 2px solid var(--light);
                width: 100%
            }
        `}</style>
        </>
    )
}

