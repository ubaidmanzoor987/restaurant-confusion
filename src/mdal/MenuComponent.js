import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import {Button,Card, CardBody ,CardImg, CardImgOverlay, CardTitle,CardText,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'; 
import DishDetail from './DishDetailComponent';
class Menu extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modal:true
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    OnDishSelect(dish){
        this.setState({
            selectedDish:dish
        });
        this.toggle();

    }
    onRenderDish(dish){
        if(dish!=null){
            
            return(
                
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>{dish.name}</ModalHeader>
                    <ModalBody >
                        <Card style={{border:"none"}}>
                            <CardImg  src={dish.image} style={{height:"10%"}} alt={dish.name} />
                            <CardBody>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
                );
            }else{
                return(
                    <div></div>
                );
            }
    }
    
    render()
    {
        /*const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} style={{borderRadius:"50px"}}
                            />

                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });*/
        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-md-4 mt-1">
                    <Card onClick={()=>{
                        this.OnDishSelect(dish)}}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}
                        />
                        <CardImgOverlay>
                            <CardTitle style={{color:"darkgrey"}}>{dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {/*<Media list>
                        {menu}
                    </Media>*/}
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish}></DishDetail>   
                    
            </div>
        );
    }
}
export default Menu;