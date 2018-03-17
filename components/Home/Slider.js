class Slider extends React.Component{

  componentWillMount(){
    console.log(this.props);
  }

  render(){
    return (
              <li>
                <div className="caption center-align">
                  <h1 className="black-text chip">{this.props.blog.title}</h1>
                  <h5 className="truncate">{this.props.blog.body}</h5>
                  <button className="btn slider-btn waves-effect blue black-text" id={this.props.blog.blogId}>Read More</button>                                  
                </div>
                <style jsx>{
                  `
                   h1{
                     font-size:30px;
                     margin:10px;
                   }
                   .slider-btn{
                      margin-top:100px;
                   }
                  ` 
                }</style>
              </li>
    );
  }

  componentDidMount() {
    // $(document).ready(function () {
    //   $('.slider').slider();
    // });
  }
}

export default Slider;