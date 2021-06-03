import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import Layout from '../components/Layout';
import { loadUser } from '../store/actions/authAction';
import '../styles/globalStyle.css';

class MyApp extends App {

    componentDidMount() {
        store.dispatch(loadUser(localStorage.getItem('token')));
    }
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Provider store = {store}>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </Provider>
        )
    }
}

const makeStore = ()=> store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);