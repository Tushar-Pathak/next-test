import axios from 'axios';
import {If, Then} from 'react-if';

class ShowBlog extends React.Component {
  
  constructor(){
    super();
    this.state = {
      likes:0,
      views:0,
      view:false
    };
  }

  componentWillMount(){
    this.setState({
      likes:this.props.blog.likes,
      views:this.props.blog.views
    });
  }

  render() {

    let timeNow = this.props.blog.createdAt;
    timeNow = timeNow.substr(0, timeNow.indexOf('T'));
    let year = timeNow.substr(0, timeNow.indexOf('-'));
    let month = timeNow.substring(timeNow.indexOf('-') + 1,timeNow.lastIndexOf('-'));
    switch(parseInt(month)){
      case 1:month="January";
             break;
      case 2:month="Febuary";
             break;
      case 3:month="March";
             break;  
      case 4:month="April";
             break;
      case 5:month="May";
             break;
      case 6:month="June";
             break;
      case 7:month="July";
             break;
      case 8:month="August";
             break;
      case 9:month="September";
             break;
      case 10:month="October";
             break;  
      case 11:month="November";
             break;  
      case 12:month="December";
             break;
    }
    let day = timeNow.substr(timeNow.lastIndexOf('-')+1, timeNow.length);
    timeNow = `${day} ${month},${year}`;

    return (
      // <div className="row col s12">
        <div className="">
          <If condition = {this.state.view === false}>
            <Then>
              <div className="col s12 l6">
              <div className="card horizontal hoverable">
              <div className="card-stacked">
                <div className="card-content">
                  <div className="card-image">
                   <img src={this.props.blog.image}></img>
                  </div>
                  <span className="card-title">
                    <strong>{this.props.blog.title}</strong>
                  </span>
                  <p className="body flow-text">{this.props.blog.body.substr(0, 10) + '...'}
                    <span className="card-btn"><button className="btn waves-effect btn-toggle" onClick={this.toggleBody.bind(this)}>Read More</button></span>
                    <br />
                    <span className="chip">{timeNow}</span>
                  </p>
                  <p className="flow-text">
                    <i className="icon ion-android-favorite-outline" onClick={this.addLikes.bind(this)} id={this.props.blog.id}></i>
                    <span className={this.props.blog.id}>{this.props.blog.likes}</span>  
                    <i className="icon ion-android-contacts" id={this.props.blog.id}></i>
                    {this.props.blog.views}
                  </p>
                 </div>
                </div>
              </div>
              </div>
            </Then>
          </If> 
          <If condition={this.state.view === true}>
            <Then>
            <div className="card horizontal col s12">
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title">
                    <strong>{this.props.blog.title }</strong>
                    <img src={this.props.blog.image} height="25px" className="circle"></img>                    
                  </span>
                  <p className="body flow-text">{this.props.blog.body}
                    <br />
                    <span className="chip">{timeNow}</span>
                  </p>
                  <p className="flow-text">
                    <i className="icon ion-android-favorite-outline" onClick={this.addLikes.bind(this)} id={this.props.blog.id}></i>
                    <span className={this.props.blog.id}>{this.props.blog.likes}</span>  
                    <i className="icon ion-android-contacts" id={this.props.blog.id}></i>
                    {this.props.blog.views}
                  </p>
                 </div>
                </div>
              </div>
            </Then>
          </If>
        <style jsx>{
          `
           .card-btn{
             font-size:20px;
             cursor:pointer;
           }
           .icon{
              margin:10px;
              cursor:pointer;
              font-size:30px;
           }
           p.body{
             width:22em;
             word-wrap:break-word;
           }
           .btn-toggle{
             font-size:15px;
             margin:10px;
           }
          ` 
        }</style>
      </div>
    );
  }

  //Toggle Body.
  toggleBody(e){
    let currentState = this.state;
    currentState.view = true;
    currentState.viewBlog = {
      title:this.props.blog.title,
      body:this.props.blog.body,
      createdAt:this.props.blog.createdAt,
      likes:this.props.likes,
      views:this.props.views
    };
    this.setState({
      currentState
    });
  }

  //Add Likes To Posts.
  addLikes(e){
    const id = e.target.id;
    axios.put('/api/addlikes', {
        userId:this.props.userId,
        blogId:id,
        true:true
    })
     .then( result => {
       $(`#${id}`).css('color','red');
       let span = $(`.${id}`);
       span.html(parseInt(this.state.likes) + 1);
       this.state.likes = parseInt(this.state.likes) + 1;
     })
     .catch( err => console.log(err) );
  }
}

export default ShowBlog;