import Modal from '../../../../components/Modal/Modal';

import { useState } from 'react';
//import Authorization from '../../../Authorization/Authorization';
import { useNavigate } from 'react-router-dom';
import './ModalErrorRegistration.scss';
import {useSelector} from "react-redux";
import {selectorRegistrationMessageError} from "../../../../selectors";

const ModalErrorRegistration = ({ closeErrorModal }) => {
  const closeModalError = useSelector(selectorRegistrationMessageError);
  const navigate = useNavigate();
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  const closeModalAuth = () => {
    setIsModalAuthOpen(false);
  };

  return (
    <Modal
      modalAction={closeErrorModal}
      closeAction={() => {
        closeErrorModal();
      }}
    >
      <p className="modal_title"> {closeModalError && closeModalError } </p>
      <p className="modal_title__login">please try again or login</p>
      <button
        className="form-block__btn"
        type="button"
        onClick={(event) => toggleModalAuth(event)}
      >login</button>
      {/*{isModalAuthOpen && (*/}
      {/*  <Authorization*/}
      {/*    closeModalAuth={() => {*/}
      {/*      closeModalAuth();*/}
      {/*      closeErrorModal();*/}
      {/*      navigate('/');*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </Modal>
  );
};

export default ModalErrorRegistration;
