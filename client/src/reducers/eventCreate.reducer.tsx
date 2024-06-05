import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

export interface EventCreateState {
        formData: {
            title: string;
            date: string;
            img: string;
            city: string;
        },
        modalError: null,
        modalSuccess: null,
        pageIsLoading: boolean,
        messageError:  string;
    }


export const initialState: EventCreateState = {
    formData: {
        title: '',
        date: '',
        img: '',
        city:'',
    },
    modalError: null,
    modalSuccess: null,
    pageIsLoading: false,
    messageError: ""
};


const EventCreateSlice:Slice<EventCreateState> = createSlice({
    name: 'eventCreate',
    initialState,
    reducers: {
        actionPageIsLoadingCreatingEvent: (state, action: PayloadAction<boolean>) => {
            state.pageIsLoading = action.payload;
        },
        actionCreatingEventSuccess: (state, action: PayloadAction<null>) => {
            state.modalSuccess = action.payload;
        },
        actionCreatingEventError: (state, action: PayloadAction<null>) => {
            state.modalError = action.payload;
        },
        actionMessageError: (state, action: PayloadAction<string>) => {
            state.messageError = action.payload;
        },
    },
});

export const { actionPageIsLoadingCreatingEvent,actionCreatingEventSuccess,actionCreatingEventError,actionMessageError,EventCreateState} = EventCreateSlice.actions;




export default EventCreateSlice.reducer;
