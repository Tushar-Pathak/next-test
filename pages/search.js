import Layout from '../components/Layout';
const axios = require('axios');
import CardRender from '../components/CardRender';

class Search extends React.Component{

  constructor() {
    super();
    this.state ={
     blogger: [
       {
        blog:'javascript',
        author:'David Walsh',
        likes:24
       },
       {
         blog:'python',
         author:'Corey Schafer',
         likes:200
       },
       {
         blog:'css',
         author:'Traversy Media',
         likes:200
       },
       {
         blog:'java',
         author:'Mr Natraj',
         likes:400
       }
      ]
   }
  }

  componentWillMount() {
    axios
     .get('/api/search')
     .then((data)=>{
       console.log(data.data);
     })
     .catch((err)=>{
       console.log(err);
     });
  }

  render(){

    let cardContent = this.state.blogger;
    cardContent = cardContent.map( (content, index) => <CardRender card={content} key = {index}/>);

    return (
      <Layout title = {'Search:BloggSpot'} page = {'search'}>
        <div>
         <div className="row">
           <div className="input-field col s6 offset-s2">
            <i className="prefix ion-android-options tooltipped" data-position="bottom" data-delay="50" data-tooltip="Filter Search"></i>
            <select defaultValue="Popular">
              <option value="Author Name">Author Name</option>
              <option value="Blog Name">Blog Name</option>
              <option value="Popular">Popular</option>              
            </select>
           </div>
         </div>
         <form action="" className="row">
           <div className="input-field col s7 offset-s2">
            <i className="prefix ion-android-search tooltipped" data-position="bottom" data-delay="50" data-tooltip="search" id="search"></i>
            <input type="text" name="" id="" placeholder="Type here...."/>
           </div>
         </form>
         <div className="row">
          {cardContent}
         </div>
        </div>
        <style jsx>{
          `
           #search{
             cursor:pointer;
           }
          `
        }</style>
      </Layout>
    );
  }
  componentDidMount(){
    $(document).ready(function(){
       $("select").material_select();
    });
  }
}

export default Search;