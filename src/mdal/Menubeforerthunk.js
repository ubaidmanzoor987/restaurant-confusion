import React,{Component} from 'react';
import {Card,CardImg, CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap'; 
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
class Menu extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        // before thunk
        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-md-4 mt-1">
                    <Card>
                        <Link to={`/menu/${dish.id }`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}
                            />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}
                                </CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });
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
                        {menu}
                    </div>
                        
                </div>
            );
    }
}
export default Menu;