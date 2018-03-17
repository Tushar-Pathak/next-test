import axios from 'axios';

class Signup extends React.Component{
  render(){
    return (
      <div className="row">
        <form action="" className="col s12" onSubmit={this.submitHandle.bind(this)}>
          <div className="input-field col s6">
           <i className="ion-person prefix"></i>
           <input type="text" className="validate" placeholder="First Name" ref="first_name" autoFocus required/>
          </div>
          <div className="input-field col s6">
           <i className="ion-person prefix"></i>          
           <input type="text" className="validate" placeholder="Last Name" ref="last_name" required/>
          </div>
          <div className="input-field col s12">
           <i className="prefix ion-person-add"></i>
           <input type="text" className="validate" ref="user_name" placeholder="Username that you like..." required/>
          </div>
          <div className="input-field col s12">
           <i className="prefix ion-lock-combination"></i>           
           <input type="password" className="validate" ref="password" placeholder="Password" required/>
          </div>
          <div className="input-field col s12">
           <i className="prefix ion-locked"></i>           
           <input type="password" className="validate" ref="repassword" placeholder="Retype your Password" onKeyUp={this.handlekeyEvent.bind(this)} required/>
           <span className="kids chip"></span>
          </div>
          <div className="input-field col s6 offset-s2">
           <i className="prefix ion-person-stalker"></i>
           <select defaultValue="male" ref="gender">
             <option value="male">male</option>
             <option value="female">female</option>             
           </select>
          </div>
          <div className="input-field col s12">
           <i className="prefix ion-calculator"></i>
           <input type="text" className="datepicker" ref="date" required/>
          </div>
          <div className="input-field col s6 offset-s5">
           <button type="submit" className="btn">submit</button>
          </div>
        </form>
      </div>
    );
  }

  //This function will handle keyEvents for form.
  handlekeyEvent(e){
    let span = $(".kids");
    if (this.refs.password.value === this.refs.repassword.value) {
      span.html('<i class="ion-checkmark-circled green"></i> Password Matched');
      setTimeout(function(){
        span.hide();
      }, 1000);
    }else {
      span.show();
      span.html('<i class="ion-information-circled red"></i> Password doesn\'t match');    
    }
  }

  //This Function will handle submit events for you.
  submitHandle(e) {
    e.preventDefault();
    if (this.refs.last_name.value === ''){
      this.refs.last_name.focus();
    }else if(this.refs.user_name.value === ''){
      this.refs.user_name.focus();
    }else if(this.refs.password.value === ''){
      this.refs.password.focus();
    }else if (this.refs.repassword.value === ''){
      this.refs.repassword.focus();
    }else if (this.refs.date === ''){
      this.refs.date.focus();
    }else {
       axios.post('/api/signup',{
         firstName:this.refs.first_name.value,
         lastName:this.refs.last_name.value,
         gender:this.refs.gender.value,
         date_of_birth:this.refs.date.value,
         firstName:this.refs.first_name.value,
         userName:this.refs.user_name.value,
         password:this.refs.password.value         
       })
        .then((response)=>{
           window.location = '/login';
        })
        .catch((err)=>{
           console.log(err);
        });
    }
  }

  componentDidMount(){
    $(document).ready(function() {
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });
    });

  }
}

export default Signup;