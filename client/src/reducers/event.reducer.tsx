import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import axios from 'axios';
import {ADD_EVENT} from "../endpoints";

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
    date: Date;
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
        actionCreatingEventSuccess: (state, action: PayloadAction<null | string>) => {
            state.modalSuccess = action.payload;
        },
        actionEventData: (state, action: PayloadAction<EventData>) => {
            state.formData = action.payload;
        },
        actionCreatingEventError: (state, action: PayloadAction<null | string>) => {
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
        actionUnregisterEvent: (state, action: PayloadAction<boolean>) => {
            state.unregisterEvent = action.payload;
        },
    },
});

export const {
    actionPageIsLoadingEvent,
    actionCreatingEventSuccess,
    actionCreatingEventError,
    actionMessageEventError,
    actionEventData,
    EventState,
    actionChangeEvent,
    actionDeleteEvent,
    actionUnregisterEvent
} = EventSlice.actions;


export const sendApiEvent = (values:any) => (dispatch: any) => {
    console.log('Sending API event request...');
    dispatch(actionPageIsLoadingEvent(true));


    return axios.post( ADD_EVENT, values)
        .then((response) => {
            console.log('Event response:', response);
            dispatch(actionEventData(response.data));
            dispatch(actionCreatingEventSuccess('Event created successfully.'));
            return response;
        })
        .catch((error) => {
            console.error('Event error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                dispatch(actionCreatingEventError(error.response.data.message));
            } else {
                dispatch(actionMessageEventError('An unknown error occurred.'));
            }
        }).finally(() => {
            dispatch(actionPageIsLoadingEvent(false));
        });
};



export default EventSlice.reducer;
