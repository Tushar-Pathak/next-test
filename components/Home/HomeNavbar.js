import Link from 'next/link';

class Navbar extends React.Component {

 //Toggle Active Elements.
 ToggleNav() {
  const pageName = this.props.page;
  $('li').addClass('active');
  console.log(pageName);
  $('li').each(function () {
    if ($(this).attr('id') !== pageName)
      $(this).removeClass('active');
    else{
      console.log('as');            
      $(this).addClass('active');
    }
  });
 }

 render() {

  return (
    <div className="container">
      <nav className="white">
        <div className="nav-wrapper">
          <Link href="#"><a className="brand-logo black-text">BloggSpot</a></Link>

          <Link href="#"><a data-activates="mobile" className="button-collapse"><i className="ion-navicon black-text"></i></a></Link>

          <ul className="side-nav" id="mobile">
            <li><i className="secondary-content ion-close-circled" data-dismiss></i></li>
            <li className="clearfix"></li>
            <li><Link href="/"><a><i className="ion-home"></i>Home</a></Link></li>
            <li><Link href="/search" prefetch><a><i className="ion-search"></i>Search</a></Link></li>
            <li><Link href="/login" prefetch><a><i className="ion-person"></i>Login</a></Link></li>
            <li className="divider"></li>
          </ul>
          <ul className="right">
            <li><Link href={
                {
                  pathname:'/home/' + this.props.userId,
                }
              } 
            prefetch><a className="black-text" id="home">{this.props.userName}</a></Link></li>
            <li><Link href="#" prefetch><a id="search" className="black-text">Search</a></Link></li>
            <li id="login"><Link href="#"><a id="login" className="black-text dropdown-button" data-activates="dropdown1"><i className="ion-ios-keypad"></i></a></Link></li>
          </ul>

          <ul id="dropdown1" className="dropdown-content">
             <li><Link href="#">Privacy</Link></li>
             <li className="divider"></li>
             <li><Link href="/login">Log out</Link></li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

 componentDidMount(){
   //$('li a').on('click', this.ToggleNav.bind(this));
   $(document).ready(function(){
     $(".dropdown-button").dropdown();
   });
 }
}

export default Navbar;