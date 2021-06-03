import { connect } from 'react-redux';
import { Nav, Button} from 'react-bootstrap';
import { logOut } from '../store/actions/authAction';

function LogOut(props) {
    const handleClick = () => {
        props.logOut();
    }
    return (
        <Button type="button" variant="light" className="dropdown-item" onClick={handleClick}>
            Log Out
        </Button>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut);