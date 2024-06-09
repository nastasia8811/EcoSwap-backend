import './EventCreate.scss';
import React from 'react';
import ValidationSchemaEventCreate from "../../components/FormEventCreate/ValidationSchemaEventCreate";
import FormEventCreate from "../../components/FormEventCreate/FormEventCreate";
import { useState } from 'react';
import Modal from '../../components/Modal/Modal'
import './EventCreate.scss';
import {selectorCreatingEvent} from "../../selectors";
import {sendApiEvent, changeApiEvent} from "../../reducers/event.reducer";
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";



interface EventCreateProps {
    closeModalCreateEvent: () => void;

}

const EventCreate: React.FC<EventCreateProps> = ({closeModalCreateEvent}) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const eventData = useSelector(selectorCreatingEvent);

    // @ts-ignore
    const userData = useSelector((state)=>state.login.userData)

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModalOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setModalOpen(!modalOpen);
    };
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };
    // const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    // const eventTarget = event.currentTarget
    // dispatch(getApiOneEvent(eventTarget)).then((axiosValue) => {
    //     return axiosValue
    // })
    // import {getApiOneEvent} from "../../reducers/event.reducer";
    // import {useDispatch} from 'react-redux';
    // import {ThunkDispatch} from "redux-thunk";
    // import {Action} from "redux";

    const handleSubmit = ( values:any) => {

        let sendApi = (values._id) ? changeApiEvent : sendApiEvent;

        values.customer_id=userData._id

        dispatch(sendApi(values)).then((axiosValue) => {
            if (axiosValue) {

                setModalOpen(false);
            }
        }).catch((error) => {
            console.error("Submission error:", error);
        });
    };


        return (
            <>
                <Modal
                    modalAction={closeModalCreateEvent}
                    closeAction={closeModalCreateEvent}
                >
                    <div className="eventCreate-container__wrapper" onClick={handleModalClick}>
                        <h2 className="eventCreate-container__wrapper-title">New event</h2>
                        <FormEventCreate
                            initialValues={eventData}
                            validationSchema={ValidationSchemaEventCreate}
                            onSubmit={handleSubmit}
                        />
                        <button
                            className="form-block__btn"
                            type="button"
                            onClick={(event) => toggleModalOpen(event)}
                        >
                            Close
                        </button>
                    </div>
                    </Modal>
            </>
        )
    }
;

export default EventCreate;