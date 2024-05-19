import Modal from '../../../../components/Modal/Modal';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './ModalErrorRegistration.scss';
import { useSelector } from "react-redux";
import { selectorRegistrationMessageError } from "../../../../selectors";

interface ModalErrorRegistrationProps {
  closeErrorModal: () => void;
}

const ModalErrorRegistration: React.FC<ModalErrorRegistrationProps> = ({ closeErrorModal }) => {
  const closeModalError = useSelector(selectorRegistrationMessageError);
  //const navigate = useNavigate();
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  return (
    <Modal
      modalAction={closeErrorModal}
      closeAction={closeErrorModal}
    >
      <p className="modal_title">{closeModalError}</p>
      <p className="modal_title__login">Please try again or login</p>
      <button
        className="form-block__btn"
        type="button"
        onClick={toggleModalAuth}
      >
        Login
      </button>
    </Modal>
  );
};

export default ModalErrorRegistration;
