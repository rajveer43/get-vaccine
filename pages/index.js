import Head from 'next/head';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import UserAvailability from '../components/UserAvailability';
import SignUp from '../components/SignUp';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';

function Home(props) {
  let loadScreen = props.user ? <UserAvailability/> : <SignUp/>;
  return (
    <div className="container">
      <Head>
        <title>Covid19 Vaccine Notifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loadScreen}
      </main>
    </div>
  )
}

function mapStateToProps(state) {
  return {
      user: state.auth.user,
      authLoaded: state.auth.authLoaded
  }
}

export default connect(mapStateToProps)(Home);
