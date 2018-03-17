import Layout from '../components/Layout';
import Blog from '../components/Home/Blog';
import NewBlog from '../components/Home/NewBlog';
import { If, Then, Else } from 'react-if';
import ShowBlog from '../components/Home/ShowBlog';
import axios from 'axios';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      newBlog: false,
      first_name: null,
      last_name: null,
      gender: null,
      createdAt: null,
      blogs: [],
      date_of_birth: null
    };
  }

  static getInitialProps({ query }) {
    //console.log(query, ' page');
    return { query };
  }

  componentWillMount() {
    axios
      .get('/api/getUser', {
        params: {
          id: this.props.query.id
        }
      })
      .then((response) => {
        const res = response.data;
        console.log(res);
        this.setState({
          userName:res.userName,
          newBlog:false, 
          userId:res.userId,
          first_name: res.first_name,
          last_name: res.last_name,
          gender: res.gender,
          createdAt: res.createdAt,
          blogs: res.blogs,
          date_of_birth: res.date_of_birth
        });
        console.log(res.blogs);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    const addImages = this.state.blogs.map( (blogs) => {
        let js = new RegExp('javascript', 'i');
        let react = new RegExp('react');
        let angular = new RegExp('angular');
        let css = new RegExp('css');
        let html = new RegExp('html', 'i');
        let python = new RegExp('python');
        let node = new RegExp('node');

        if (js.test(blogs.title)){
            blogs.image = '/static/images/javascript.png';
        }else if(react.test(blogs.title)){
            blogs.image = '/static/images/react.png';
        }else if(angular.test(blogs.title)){
            blogs.image = '/static/images/angular.jpg';
        }else if(html.test(blogs.title)){
            blogs.image = '/static/images/html.png';
        }else if(css.test(blogs.title)){
            blogs.image = '/static/images/css.jpg';
        }else if(node.test(blogs.title)){
            blogs.image = '/static/images/nodejs.png';
        }else {
            blogs.image = '/static/images/python.jpg';
        }

        return blogs;
    });

    const myBlogs = addImages.map( (blogs, index) => {
      return <ShowBlog blog={blogs} userId={this.state.userId} key={index}/>
    })

    return (
      <Layout title={'Welcome to BloggSpot'} loggedIn={'true'} userName={this.state.userName}  userId={this.state.userId}>
        <If condition={this.state.newBlog === true}>
          <Then>
            <NewBlog userId={this.state.userId}/>
          </Then>
        </If>
        <If condition={this.state.newBlog === false}>
          <Then>
            <Blog state={this.state} />
            <div className="row col s12">
              {myBlogs}
            </div>
          </Then>
        </If>

        <div className="fixed-action-btn horizontal">
          <a className="btn-floating btn-large red">
            <i className="ion-ios-compose" onClick={this.handleClick.bind(this)}></i>
          </a>
        </div>
      </Layout>
    )
  }

  //Handle Click Events.
  handleClick() {
    const newState = this.state;
    if (this.state.newBlog === false) {
      newState.newBlog = true;
      this.setState({
        newState,
      });
    }
  }
}

export default Home;