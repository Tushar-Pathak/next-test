import Link from 'next/link';

class cardRender extends React.Component{
  render(){
    return (
      <div className="col s6">
        <h6 className="header"><Link href="#"><a className="chip">{this.props.card.author}</a></Link></h6>
        <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <span className="card-title black-text"><strong>{this.props.card.blog.toUpperCase()}</strong></span>
            <p className="flow-text">Some content about it....</p>
            <p><strong><i className="ion-ios-heart-outline"></i><span> {this.props.card.likes}</span></strong></p>
          </div>
          <div className="card-action">
           <button className="btn red white-text z-depth-2">Read More</button>
          </div>
         </div>
        </div>
      </div>
    )
  }
}

export default cardRender;