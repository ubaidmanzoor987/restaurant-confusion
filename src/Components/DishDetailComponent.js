import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Row, Col, Label } from 'reactstrap';
    import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
          };
    }
    toggleModal=()=> {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleSubmit(values) {
        
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();
    } 
    render(){
        return(
            <>
                <Button type="button" outline onClick={this.toggleModal}>
                <span className="fa fa-pencil"></span>
                    &emsp;Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" 
                                        className="form-control" defaultValue="1" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                            </div>
                            <div className="form-group">
                                    <Button type="submit" color="primary">
                                   Submit
                                    </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>        
            </>    
        )
    }
}
  function  RenderDish({dish}) {
        if (dish != null)
            return(
                    <div>
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


  function RenderComment({comments}){
        if(comments!=null){
            return(
                <div>
                    <h4>Comments</h4>
                       <ul className="list-unstyled">
                                {comments.map((comment)=>{
                                    return( 
                                            <li key={comment.id}>
                                                <p>{comment.comment}</p>
                                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                                {/* <p>--{comment.author}, {comment.date} </p> */}
                                            </li>
                                         );
                                })}
                        </ul>
                        <CommentForm />
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }  
    }
    const DishDetail = (props) => {
            
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={props.comments} />
                </div>
            </div>
            </div>
        );
    };
export default DishDetail;