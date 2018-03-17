import Layout from '../components/Layout';
import Link from 'next/link';
import LoginComponent from '../components/login';
import Signup from '../components/signup'

class Login extends React.Component {
  render() {
    return (
      <Layout title = {'Login:BloggSpot'} page = {'login'}>      
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6"><Link href="#test1"><a>Login</a></Link></li>
              <li className="tab col s6"><Link href="#test2"><a>Signup</a></Link></li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            <LoginComponent />
          </div>
          <div id="test2" className="col s12">
            <Signup />
          </div>
        </div>
      </Layout>
    );
  }

  componentDidMount(){
    $(document).ready(function(){
       $('ul.tabs').tabs();
    });
  }
}

export default Login;