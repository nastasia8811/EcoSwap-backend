import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import axios from 'axios';
import {ADD_EVENT} from "../endpoints";

export interface EventCreateState {
    formData: EventData,
    modalError: null | string,
    modalSuccess: null | string,
    pageIsLoading: boolean,
    messageError: string;
}

export interface EventData {
    title: string;
    date: string;
    img: string;
    city: string;
    description: string;
    available: number;
    location: string;
    bookedSeats?: null;
    customer_id?: string;
}

export const initialState: EventCreateState = {
    formData: {
        title: '',
        date: '',
        img: '',
        city: '',
        description: '',
        available: 0,
        location: '',
        bookedSeats: null,
        customer_id: ''
    },
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: ""
};

const EventCreateSlice: Slice<EventCreateState> = createSlice({
    name: 'eventCreate',
    initialState,
    reducers: {
        actionPageIsLoadingCreatingEvent: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionCreatingEventSuccess: (state, action: PayloadAction<null>) => {
            state.modalSuccess = action.payload;
        },
        actionEventData: (state, action: PayloadAction<EventData>) => {
            state.formData = action.payload;
        },
        actionCreatingEventError: (state, action: PayloadAction<null>) => {
            state.modalError = action.payload;
        },
        actionMessageEventError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
    },
});

export const {
    actionPageIsLoadingCreatingEvent,
    actionCreatingEventSuccess,
    actionCreatingEventError,
    actionMessageEventError,
    actionEventData,
    EventCreateState
} = EventCreateSlice.actions;


export const sendApiEvent = (values: any) => (dispatch: any) => {
    console.log('Sending API event request...');
    dispatch(actionPageIsLoadingCreatingEvent(true));

    return axios.post(ADD_EVENT, values)
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
            dispatch(actionPageIsLoadingCreatingEvent(false));
        });
};



export default EventCreateSlice.reducer;
