import React from "react";
import { StyledModal } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";
import { FaTimes } from "react-icons/fa"

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();
  return (
    <StyledModal showModal={toggleModal}>
      <div>
        <span className="close" onClick={() => setToggleModal("none")}>
          <FaTimes />
        </span>
        {modalPayload}
      </div>
    </StyledModal>
  );
};

export default Modal;