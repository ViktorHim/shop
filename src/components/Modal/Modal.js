
import './Modal.scss'
import close from '../../assets/icons/modal/close.svg'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Modal = ({showModal, setShowModal}) => {
    const [tabIndex, setTabIndex] = useState(false);
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateX(0%)` : `translateX(100%)`,
        rotate: showModal ? 0 : 90
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
                    <div className="modal__content">
                        <div className="tab-container">
                            <div className="tab-header-list">
                                <button className={
                                    !tabIndex ?
                                    "tab-header-item tab-header-item_active" :
                                    "tab-header-item"
                                }
                                onClick={() => setTabIndex(false)}>Вход</button>
                                <button className={
                                     tabIndex ?
                                     "tab-header-item tab-header-item_active" :
                                     "tab-header-item"
                                }
                                onClick={() => setTabIndex(true)}>Регистрация</button>
                            </div>
                            <div className="tab-content">
                                {tabIndex ?
                                 <form action="" className="registration form">
                                    <input type="text" name='tg' placeholder='tg nickname'/>
                                    <input type="email" name='email' placeholder='email'/>
                                    <input type="password" name='pass' placeholder='password'/>
                                    <button type='submit'>Зарегистрироваться</button>
                                </form>
                                :
                                 <form action="" className="login form">
                                    <input type="email" name='email' placeholder='email'/>
                                    <input type="password" name='pass' placeholder='password'/>
                                    <button type='submit'>Войти</button>
                                 </form>}
                            </div>
                        </div>
                    </div>
                </div>
                </animated.div>
            </div>
        </div>
    ) : null}
    </>
  )
}

export default Modal