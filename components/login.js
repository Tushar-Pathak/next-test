import Link from 'next/link';

class Login extends React.Component{
  render(){
    return (
        <div className = "row">
          <form action="#" className="cols12" onSubmit={this.submitHandler.bind(this)}>
           <div className="row">
             <div className="input-field col s6 offset-s3">
               <i className="ion-ios-person prefix"></i>
               <input type="text" className="validate" placeholder="UserName" ref="userName" autoFocus required/>
             </div>
             <div className="input-field col s6 offset-s3">
               <i className="prefix ion-android-create"></i>
               <input type="password" className="validate" placeholder="Password" ref="password" required/>
             </div> 
             <div className="input-field col s6 offset-s5">
               <button type="submit" className="btn btn-sm waves-effect waves-light">login <i className="ion-android-send"></i></button>
             </div>
           </div>
           <div className="input-field col s6 offset-s5">
            <span className="chip #c8e6c9 green lighten-4"><i className="ion-ios-help"></i> <Link href="#"><a> Forget Password</a></Link></span>
           </div>
          </form>
        </div>
    );
  }

  //Handle Submit Events.
  submitHandler(e) {
    e.preventDefault();
    if (this.refs.userName.value === ''){
      this.refs.userName.focus();
    }else if(this.refs.password.value === '') {
      this.refs.password.focus();
    }
  }
}

export default Login;