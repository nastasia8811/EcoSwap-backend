import Modal from '../../../../components/Modal/Modal';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './ModalSuccessRegistration.scss';




const ModalSuccessRegistration = ({ closeModal }) => {
  const navigate = useNavigate();
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };
  //
  // const closeModalAuth = () => {
  //   setIsModalAuthOpen(false);
  // };


  return (
      <Modal
          modalAction ={closeModal}
          closeAction={closeModal}
      >
        <p className="modal_title"> Successful registration ! </p>
        <button
            className="form-block__btn"
            type="button"
            onClick={(event) => toggleModalAuth(event)}
        />

      </Modal>
  );
};

export default ModalSuccessRegistration;
