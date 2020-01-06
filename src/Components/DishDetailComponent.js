import React,{Component} from 'react';
import {FormGroup,Card, CardBody ,CardImg, CardTitle,CardText,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Label} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import {Control,Errors,LocalForm,} from 'react-redux-form'
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => (val) && (val.length>=len);
function RenderDish({dish}){
    return(
        <div className='col-12 col-md-5 mt-1 mb-3'>
            <FadeTransform in
                transformProps ={{
                    exitTransform:'scale(0.5) translateY'
                }}>
                <Card>
                    <CardImg height='400px' top src={baseUrl+dish.image}  alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            <b>Price:"{dish.price} $"</b>
                        </CardText>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody> 
                </Card>
            </FadeTransform>
        </div>
    );
}
function RenderComments({comments,postComment,dishId}){
    if(comments!=null){
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                   <ul className="list-unstyled">
                        <Stagger in >
                            {comments.map((comment)=>{
                                return( 
                                   <Fade in> 
                                        <li key={comment.id}>
                                            <p>{comment.comment}</p>
                                            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                            {/* <p>--{comment.author}, {comment.date} </p> */}
                                        </li>
                                    </Fade>    
                                     );
                            })}
                        </Stagger>
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment}></CommentForm>    
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            isModalOpen:false,
        }
    }
    toggleModal = () => {
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleSubmit =(values) =>{
        // console.log("Current State is "+JSON.stringify(values));
        // alert("Current State is "+JSON.stringify(values));
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)   
    }
    render(){
        return(
        <div>
            <Button className='commentbtn' outline onClick={this.toggleModal}>
                <span className='fa fa-pencil fa-lg'></span>
                    &nbsp;Submit Comment
             </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <FormGroup>
                            <Label htmlFor='Rating'>Rating</Label>
                            <Control.select model='.rating' name='Rating' className='form-control' id='Rating'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                            </Control.select>
                        </FormGroup>
                        <FormGroup>
                                <Label htmlFor='Your Name' >Your Name</Label>
                                <Control.text  autoComplete='off' model='.author' id='author'  name='author'
                                placeholder="Your Name" 
                                className='form-control'
                                validators={{
                                    maxLength:maxLength(15),
                                    minLength:minLength(2)
                                }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages={{
                                        minLength:'Must Be greater then 2 characters',
                                        maxLength:'Must Be 15 characters or less'
                                    }}
                                />
                        </FormGroup>
                        <FormGroup>   
                            <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea model='.comment' id='comment'  name='comment' rows='6' 
                                    className='form-control'
                                />
                        </FormGroup>
                        <Button type='submit' value='submit' className='bg-primary'>
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal> 
        </div>
        );
    };
}
const DishDetail = (props) =>{
    //after thunk 
    if (props.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    //before thunk
    else if(props.dish!=null){
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id}
                    />
                   
                </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}
export default DishDetail;