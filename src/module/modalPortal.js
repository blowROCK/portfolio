import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  console.log("TCL: Modal -> children", children)
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};

export default Modal;