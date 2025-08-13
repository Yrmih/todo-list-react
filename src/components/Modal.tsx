import style from './Modal.module.css';

export interface Props {
  children: React.ReactNode;
}

const Modal = ({children}: Props) => {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal');
    modal!.classList.add('hide');
  }

  return (
    <div id="modal">
      <div className={style.fade}>
      </div>
      <div className={style.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal;
// o Modal é um componente que renderiza uma div com o id "modal".
