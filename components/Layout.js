import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children, title = "Nextjs Blog App.", page = 'home'}) => (
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
      <Navbar page = { page }/>

      <main className="container">
        {children}
      </main>

      <Footer />
    </div>

    <script src="/static/jquery.js"></script>
    <script src="/static/materialize/js/materialize.min.js"></script>
    <script src="/static/init.js"></script>

  </div>
)

// export default Layout;