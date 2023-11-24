
import './Modal.scss'
import close from '../../assets/icons/modal/close.svg'
import { useCallback, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateX(0%)` : `translateX(100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };

    const keyPress = useCallback(
        e => {
            if(e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            if(showModal) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return () => {
                document.removeEventListener('keydown', keyPress);
            };
        },
        [keyPress, showModal]
    );

  return (
    <>
    {showModal ? (
        <div className="container">
            <div className="modal" onClick={closeModal} ref={modalRef}>
                <animated.div style={animation}>
                <div className="modal__container">
                    <button className="modal__close"
                    onClick={() => setShowModal(showModal => !showModal)}><img src={close} alt="close" /></button>
                    <div className="modal__content"></div>
                </div>
                </animated.div>
            </div>
        </div>
    ) : null}
    </>
  )
}

export default Modal