import React,{Component} from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'; 
import {Link} from 'react-router-dom';
const mapStyles = {
    width:'50%',height:'50%',
    marginLeft:'50%'
  };
  
export class MapContainer extends Component{

    render(){
        const mymap = <Map google={this.props.google}  
  zoom={5}
  style={mapStyles}
  initialCenter={{lat: 47.444, lng: -122.176}}
/>;
        return( 
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                     {mymap}
                </div>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3KyPQ7oTG7UB0zOnP0Hy6SPhsHg_A9xg'
  })(MapContainer);