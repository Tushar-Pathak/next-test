import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import {If, Then, Else} from 'react-if';
import HomeNavbar from './Home/HomeNavbar';

export default ({ loggedIn = 'false', children, title = "Nextjs Blog App.", page = 'home', userName, userId}) => (
  <div>
    <Head>
      <title> {title} </title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel="stylesheet" href="/static/materialize/css/materialize.min.css" />
      <link rel="stylesheet" href="/static/ionicons/css/ionicons.min.css" />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>

    <div id="wrapper">
      <If condition = {loggedIn === 'true'}>
        <Then><HomeNavbar userName={userName} userId={userId}/></Then>
      </If>
      <If condition = {loggedIn === 'false'}>
         <Then><Navbar page = { page }/></Then>
      </If>

      <main className="container">
        {children}
      </main>

      <Footer />
    </div>

    <script src="/static/jquery.js"></script>
    <script src="/static/materialize/js/materialize.min.js"></script>
    <script src="/static/paperfold.min.js"></script>
    <script src="/static/init.js"></script>

  </div>
)

// export default Layout;