import { createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import axios from 'axios';
import {
    ADD_EVENT,
    createOrCancelEvent,
    DELETE_EVENT,
    GET_EVENT,
    UPDATE_EVENT
} from "../endpoints";
import {getLocalDate} from "../helpers/date";
export interface EventState {
    formData: EventData,
    modalError: null | string,
    modalSuccess: null | string,
    pageIsLoading: boolean,
    messageError: string;

    changeEvent: EventData;
    deleteEvent:boolean;
    unregisterEvent:boolean;
}

export interface EventData {
    title: string;
    date: Date| string;
    img: string;
    city: string;
    description: string;
    available: number;
    location: string;
    bookedSeats?: string[] | null;
    customer_id?: string | null;
    _id?: null | string;
}

export const initialState: EventState = {
    formData: {
        title: '',
        date: getLocalDate(),
        img: '',
        city: '',
        description: '',
        available: 0,
        location: '',
        bookedSeats: [],
        customer_id: null,
        _id: null,
    },
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: "",
    changeEvent:  {
    title: "",
        date: new Date(),
        img: '',
        city: '',
        description: '',
        available: 0,
        location: '',
        bookedSeats: [],
        customer_id: null,
        _id: null,
},
    deleteEvent:false,
    unregisterEvent:false,
};

const EventSlice: Slice<EventState> = createSlice({
    name: 'eventCreate',
    initialState,
    reducers: {
        actionPageIsLoadingEvent: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionEventSuccess: (state, action: PayloadAction<null | string>) => {
            state.modalSuccess = action.payload;
        },
        actionEventData: (state, action: PayloadAction<EventData>) => {
            const newData= new Date(action.payload.date);
            action.payload.date = getLocalDate(newData);
            state.formData = action.payload;
        },
        actionEventError: (state, action: PayloadAction<null | string>) => {
            state.modalError = action.payload;
        },
        actionMessageEventError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
        actionChangeEvent: (state, action: PayloadAction<EventData>) => {
            state.changeEvent = action.payload;
        },
        actionDeleteEvent: (state, action: PayloadAction<boolean>) => {
            state.deleteEvent = action.payload;
        },
        // переіменувати
        actionUnregisterEvent: (state, action: PayloadAction<boolean>) => {
            state.unregisterEvent = action.payload;
        },
        actionGetOneEventData: (state, action: PayloadAction<EventData>) => {
            state.formData = action.payload;
        },
    },
});

export const {
    actionPageIsLoadingEvent,
    actionEventSuccess,
    actionEventError,
    actionMessageEventError,
    actionEventData,
    EventState,
    actionChangeEvent,
    actionDeleteEvent,
    actionUnregisterEvent,
    actionGetOneEventData,
} = EventSlice.actions;


export const bookOrCancelApiEvent = (id:string, customerId:string) => (dispatch: any) => {
    console.log('Sending API update event request...');
    dispatch(actionPageIsLoadingEvent(true));

    return axios.put( createOrCancelEvent(id, customerId))
        .then((response) => {
            console.log('Event update response:', response);
            //dispatch(actionUnregisterEvent(response.data));
            dispatch(actionEventSuccess('Event updated successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};

export const delApiOneEvent = (id:string) => async (dispatch: any)  =>{
    return axios
        .delete(DELETE_EVENT+id)
        .then(event =>{
            dispatch(actionDeleteEvent(event.data))
        })
        .catch(error => {
            console.error('del error:', error);
        });}


export const sendApiEvent = (values:any) => (dispatch: any) => {
    console.log('Sending API event request...');
    dispatch(actionPageIsLoadingEvent(true));


    return axios.post( ADD_EVENT, values)
        .then((response) => {
            console.log('Event response:', response);
            dispatch(actionEventData(response.data));
            dispatch(actionEventSuccess('Event created successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};

export const getApiOneEvent = (event:any) => async (dispatch: any)  =>{
    return axios
        .get(GET_EVENT,event)
        .then(customer =>{
            dispatch(actionGetOneEventData(customer.data))
        })
        .catch(error => {
            console.error('Get one event error:', error);
        });}


export const changeApiEvent = (values:any) => (dispatch: any) => {
    console.log('Sending API update event request...');
    dispatch(actionPageIsLoadingEvent(true));

//конкантенація
    return axios.put( UPDATE_EVENT+values._id, values)
        .then((response) => {
            console.log('Event update response:', response);
            dispatch(actionChangeEvent(response.data));
            dispatch(actionEventSuccess('Event updated successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};


export default EventSlice.reducer;
