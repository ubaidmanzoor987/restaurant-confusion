import * as ActionType from './ActionType';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment)=>({
    type:ActionType.ADD_COMMENT,
    payload:comment
});
//thunk return function
export const postComment = (dishId,rating,author,comment)=>(dispatch)=>{
    //making new object
    //here specify method is post
    //the body contains json so we specify header
    var newComment = {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl+'comments', {
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+ response.status+' : '+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(comment=>dispatch(addComment(comment)))
        .catch(error=>{console.log('Post comments ',error.message)
            alert('Your Comment could not be posted \nError :'+error.message)
        });
    
}

// feedback
export const postFeedback = (firstname,lastname,contactno,email,agree,contactType,message) =>(dispatch)=>{
    var Feedback={
        firstname:firstname,
        lastname:lastname,
        contactno:contactno,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    }
    return fetch(baseUrl+'feedback',{
        method:'POST',
        body:JSON.stringify(Feedback),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+ response.status+' : '+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(feedback=>dispatch(addFeedback(feedback)))
        .catch(error=>{console.log('Post Feedback ',error.message)
            alert('Your Feedback could not be posted \nError :'+error.message)
});
    
}
export const addFeedback = (feedback) => ({
    type: ActionType.ADD_FEEDBACK,
    payload:feedback+
    alert(JSON.stringify(feedback))
});


// this fetchDishes is thunk because it is returning a function and thunk is returning function
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+ response.status+' : '+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
        .catch(error=>dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});

//comments

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+ response.status+' : '+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
};
export const commentsFailed = (errmess) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
});

// promotions my try
export const fetchPromotions = () => (dispatch) => {

    dispatch(promotionsLoading (true));

    return fetch(baseUrl + 'promotions')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+' : '+ response.statusText);
                error.respone=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(promotions=>dispatch(addPromotions(promotions)))
        .catch(error=>dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionType.PROMOTIONS_LOADING
});

export const promotionsFailed = (errmess) => ({
    type: ActionType.PROMOTIONS_FAILED,
    payload: errmess
});

export const addPromotions = (promotions) => ({
    type: ActionType.ADD_PROMOTIONS,
    payload: promotions
});


// leaders my try

export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading (true));

    return fetch(baseUrl + 'leaders')
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+' : '+ response.statusText);
                error.respone=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
});


