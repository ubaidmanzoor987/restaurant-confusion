// Without LocalForm from react-redux-form 
import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,Button,FormGroup,Label,Col,Input,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        };
        
    }
    handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit =(event) =>{
        console.log("Current State is "+JSON.stringify(this.state));
        alert("Current State is "+JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }
    
    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
            
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Email should contain a @';

        return errors;
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
                         <Form onSubmit={this.handleSubmit}>
                             <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstname'  name='firstname'
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    autoComplete='false' 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('firstname')} 
                                    valid={errors.firstname===''}
                                    invalid={errors.firstname!==''}
                                    />
                                    <FormFeedback>{errors.firstname}</FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname'  name='lastname'
                                    placeholder="Last Name" 
                                    value={this.state.lastname} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('lastname')} 
                                    valid={errors.lastname===''}
                                    invalid={errors.lastname!==''}  
                                    />
                                    <FormFeedback>{errors.lastname}</FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Label htmlFor='telnum' md={2}>Contact No.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum'  name='telnum'
                                    placeholder="Contact No." 
                                    value={this.state.telnum} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('telnum')} 
                                    valid={errors.telnum===''}
                                    invalid={errors.telnum!==''}
                                    />
                                    <FormFeedback>{errors.telnum}</FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email'  name='email'
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('email')} 
                                    valid={errors.email===''}
                                    invalid={errors.email!==''}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange} /> {' '} 
                                            <strong>May we contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email.</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Label htmlFor='message' md={2}>Your FeedBack</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message'  name='message' rows='12' 
                                     value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>   
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>
                                        Send FeedBack
                                    </Button>
                                </Col>
                            </FormGroup>
                            
                         </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;