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
            <select defaultValue="Popular" id="filter">
              <option value="Author Name">Author Name</option>
              <option value="Blog Name">Blog Name</option>
              <option value="Popular">Popular</option>              
            </select>
           </div>
         </div>
         <form action="" className="row">
           <div className="input-field col s7 offset-s2">
            <i className="prefix ion-android-search tooltipped" data-position="bottom" data-delay="50" data-tooltip="search" id="search"></i>
            <input type="text" ref="search" className="autocomplete" placeholder="Type here...."/>
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

      const primary = {
        data:{
          "Javascript":null,
          "Html":null,
          "Css":null,
          "Python":null,
          "React":null,
          "Angular":null,
          "Java":null,
          "Data Science":null,
          "Artificial Intelligence":null,
          "Swift":null,
          "PHP":null                     
        },
        minLength:1,
        limit:10,
        onAutoComplete:function(val){
          console.log(val);
        }
      };

      const authors = {
        data:{
          "David Walsh":null,
          "Corey Scahfer":null,
          "H.K. Das":null,
          "William Stalling":null,
          "J.P. Panday":null,
          "Dinesh Kumar Tiwari":null,
          "Nooparam Chauhan":null
        },
        minLength:1,
        limit:10,
        onAutoComplete:function(val){
          console.log(val);
        }
      }

       $('#filter').change(function(){
         let filterValue = $('#filter').val();  
         if(filterValue === 'Author Name'){
            $('input.autocomplete').autocomplete(authors);           
         }else {
            $('input.autocomplete').autocomplete(primary);           
         }
       });

       //Handle AutoCompletion.
       $('input.autocomplete').autocomplete(primary);

    });
  }
}

export default Search;