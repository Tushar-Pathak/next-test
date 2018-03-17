import axios from 'axios';

class NewBlog extends React.Component{
  render(){
    return (
      <div className="row col s12">
       <h5 className="header col s6 offset-s1"><i className="ion-compose"></i> New Blog</h5>
       <div className="input-field col s6 offset-s3">
        <i className="prefix ion-mic-b"></i>
        <input type="text" placeholder="Enter title here" ref="title" required autoFocus/>
       </div> 
       <div className="input-field col s6 offset-s3">
         <i className="ion-edit prefix"></i>
         <textarea className="materialize-textarea" ref="body" placeholder="start blogging:-" required/>
       </div>
       <div className="input-field col s3">
        <select defaultValue="Normal">
         <option value="Normal">Normal</option>
         <option value="20">20</option>
         <option value="25">25</option>
         <option value="30">30</option>         
        </select>
       </div>
       <div className="input-field col s6 offset-s2">
        <button className="btn waves-effect red black-text" onClick={this.submitBlog.bind(this)}><i className="ion-share tooltipped" data-position="bottom" data-delay="50" data-tooltip="blog" ></i></button>
       </div>
       <style jsx>{

         `
          .header{
            margin-bottom:10px;
          }
         `
       }</style>
      </div>
    );
  }

  //Submit Blog.
  submitBlog(){
    axios
     .post('/api/newblog',{
        title:this.refs.title.value,
        body:this.refs.body.value,
        userId:this.props.userId,
     })
     .then( data => {
       window.location = '/home/'+this.props.userId;
     })
     .catch( err => console.log(err));
  }

  componentDidMount(){
     $(document).ready(function(){
        $("select").material_select();    
     });
   }
}

export default NewBlog;