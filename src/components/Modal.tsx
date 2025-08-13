import style from './Modal.module.css';

export interface Props {
}

const Modal = (props: Props) => {
  return (
    <div id="modal" className={style.modal}>
      <div>

      </div>
      <div>
        <h2>TExto Modal</h2>
      </div>
    </div>
  )
}

export default Modal;
// o Modal é um componente que renderiza uma div com o id "modal".
