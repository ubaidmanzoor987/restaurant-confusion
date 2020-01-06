import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Label,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,Errors,LocalForm,} from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => (val) && (val.length>=len);
const IsNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
    // constructor(props){
    //     super(props);
    // }
    handleSubmit =(values) =>{
        console.log("Current State is "+JSON.stringify(values));
        alert("Current State is "+JSON.stringify(values));
        
    }   

    render(){
        return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact US</h3>
                        <hr/>
                    </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address className='.address-con'>
                            15, Bilal Park, Sham Nagar<br />
                            Chouburji, lahore <br />
                            Pakistan<br />
                            <i className="fa fa-phone"></i>: +92 310 4327313<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:ubaidmanzoor987@gmail.com" style={{color:'black'}}>ubaidmanzoor987@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" rel="noopener noreferrer" href="tel:+923104327313"     target='_blank'><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"    rel="noopener noreferrer" href="https:\\web.skype.com" target='_blank' ><i className="fa fa-skype"></i> Skype</a>
                            <a style={{backgroundColor:"#55ACEE"}} role="button" className="btn btn-success" rel="noopener noreferrer" href="mailto:ubaidmanzoor987@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                            <a role="button" className="btn btn-success" rel="noopener noreferrer" href="https:\\web.whatsapp.com" target='_blank'><i className="fa fa-whatsapp"></i> Whatsapp</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send Us Your FeedBack</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                         <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                             <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text  model='.firstname' id='firstname'  name='firstname'
                                    placeholder="First Name" 
                                    className='form-control'
                                    validators={{
                                        required,
                                        maxLength:maxLength(15),
                                        minLength:minLength(3)
                                    }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.firstname'
                                        show='touched'
                                        messages={{
                                            required:'Required',
                                            minLength:'Must Be greater then 2 characters',
                                            maxLength:'Must Be 15 characters or less'
                                        }}
                                    />
                                   
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text  model='.lastname' id='lastname'  name='lastname'
                                    placeholder="Last Name" 
                                    className='form-control'
                                    validators={{
                                        required,
                                        maxLength:maxLength(15),
                                        minLength:minLength(3)
                                    }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.lastname'
                                        show='touched'
                                        messages={{
                                            required:'Required ',
                                            minLength:'Must Be greater then 2 characters',
                                            maxLength:'Must Be 15 characters or less'
                                        }}
                                    />
                                   
                                </Col>
                            </Row>
                            <Row className='form-group'>   
                                <Label htmlFor='telnum' md={2}>Contact No.</Label>
                                <Col md={10}>
                                    <Control.text  model='.telnum' id='telnum'  name='telnum'
                                    placeholder="Contact No." 
                                    className='form-control' 
                                    validators={{
                                        required,
                                        maxLength:maxLength(15),
                                        minLength:minLength(3),
                                        IsNumber
                                    }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.telnum'
                                        show='touched'
                                        messages={{
                                            required:'Required ',
                                            minLength:'Must Be greater then 2 numbers',
                                            maxLength:'Must Be 15 numbers or less',
                                            IsNumber:"Must Be a number"
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className='form-group'>   
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text  model='.email' id='email'  name='email'
                                    placeholder="Email" 
                                    className='form-control'
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                    />
                                    <Errors 
                                        className='text-danger'
                                        model='.email'
                                        show='touched'
                                        messages={{
                                            required:'Required ',
                                            validEmail:'Must be email follow by @ character or Invalid Email Address'
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className='form-group'>   
                                <Col md={{size:6,offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model='.agree' 
                                            name='agree' 
                                            className='form-check-input' /> 
                                            {' '} 
                                            <strong>May we contact You?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Control.select model='.contactType' name='contactType'
                                        className='form-control'
                                    >
                                        <option>Tel.</option>
                                        <option>Email.</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>   
                                <Label htmlFor='message' md={2}>Your FeedBack</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message'  name='message' rows='12' 
                                     className='form-control'
                                     />
                                </Col>
                            </Row>
                            <Row className='form-group'>   
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>
                                        Send FeedBack
                                    </Button>
                                </Col>
                            </Row>
                            
                         </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;