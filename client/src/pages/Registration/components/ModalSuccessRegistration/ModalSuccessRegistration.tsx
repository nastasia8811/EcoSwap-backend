import Modal from '../../../../components/Modal/Modal';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './ModalSuccessRegistration.scss';

interface ModalSuccessRegistrationProps {
  closeModal: () => void;
}

const ModalSuccessRegistration: React.FC<ModalSuccessRegistrationProps> = ({ closeModal }) => {

  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  return (
      <Modal
          modalAction={closeModal}
          closeAction={closeModal}
      >
        <p className="modal_title"> Successful registration! </p>
        <button
            className="form-block__btn"
            type="button"
            onClick={(event) => toggleModalAuth(event)}
        >
          Close
        </button>
      </Modal>
  );
};

export default ModalSuccessRegistration;
