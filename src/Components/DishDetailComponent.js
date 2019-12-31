import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            comments:this.props.selectedDish
       }
        console.log("This is Props " + this.props.selectedDish );
    }
    renderDish(dish) {
        if (dish != null)
            return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        else
            return(
                <div></div>
            );
    }
    renderComment(dish){
        console.log("This is dish ");
        if(dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                       <ul className="list-unstyled">
                                {dish.comments.map((comment)=>{
                                    return( 
                                            <li key={comment.id}>
                                                <p>{comment.comment}</p>
                                                {/* <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> */}
                                                <p>--{comment.author}, {comment.date} </p>
                                            </li>
                                         );
                                })}
                        </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }  
    }
    render(){
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComment(this.props.selectedDish)}
            </div>
            

        );
    };
}
export default DishDetail;