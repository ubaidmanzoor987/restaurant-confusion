import * as ActionType from './ActionType';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leader';
export const addcomment = (dishId,rating,author,comment)=>({
    type:ActionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});

// this fetchDishes is thunk because it is returning a function and thunk is returning function
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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

// promotions my try
export const fetchPromotions = () => (dispatch) => {

    dispatch(promotionsLoading (true));

    setTimeout(() => {
        dispatch(addpromotions(PROMOTIONS));
    }, 2000);
};

export const promotionsLoading = () => ({
    type: ActionType.PROMOTIONS_LOADING
});

export const promotionsFailed = (errmess) => ({
    type: ActionType.PROMOTIONS_FAILED,
    payload: errmess
});

export const addpromotions = (promotions) => ({
    type: ActionType.ADD_PROMOTIONS,
    payload: promotions
});


// leaders my try

export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading (true));

    setTimeout(() => {
        dispatch(addLeaders(LEADERS));
    }, 2000);
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


