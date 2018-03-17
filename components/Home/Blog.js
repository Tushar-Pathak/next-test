import Slider from './Slider';

class Blog extends React.Component {

  componentWillMount(){
    console.log(this.props.state);
  }

  render() {

   let slider = this.props.state.blogs.map( (blog, index) => {
      if (index < 3){
        return <Slider blog={blog} key={index} />       
      }
   });

    return (
      <div>
        <div className="row">
          <div className="col s6 card offset-s3">
            <div className="card-content">
              <span className="card-title">{this.props.state.first_name + ' ' + this.props.state.last_name}</span>
              <p>
                <strong className="chip">UserName:</strong>{this.props.state.userName}<br />
                <strong className="chip">Born __On: </strong>{this.props.state.date_of_birth} <br />
                <strong className="chip">Gender___:  </strong>{this.props.state.gender}
               </p>
            </div>
          </div>
        </div>
        <div className="row">
          
         <div className="slider">
            <ul className="slides #aed581 light-green lighten-2 z-depth-4">
              {slider}
            </ul>
         </div>

        </div>
      </div>
    );
  }

  componentDidMount() {
    $(document).ready(function () {
      setTimeout(function(){
        $('.slider').slider();         
      }, 1000);
    });
  }
}

export default Blog;