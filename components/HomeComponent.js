import Link from 'next/link';

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <p className="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem, quidem praesentium dolorum beatae illum saepe numquam adipisci atque animi sunt, veniam dolor magnam consectetur.</p>
        <div className="row">
          <div className="col s12">
            <Link href="/login"><a className="btn #f0f4c3 lime lighten-4 black-text col s6 offset-s3 waves-effect">Get Started</a></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeComponent;