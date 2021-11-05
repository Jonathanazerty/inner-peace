import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import read from '../images/read.png';
import { MdClose } from 'react-icons/md'

const Background = styled.div`
    width: 800px;
    height: 400px;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px
`

const ModalWrapper = styled.div`
    width: 750px;
    height: 350px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: rgba(232, 236, 255, 0.9);
    color: #000;
    font-size: 18.5px;
    position: relative;
    display: grid;
    grid-template-columns: 0.5fr 3.5fr;
    z-index: 10;
    border-radius: 20px
`

const ModalImg = styled.img`
    margin: 100px 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    background: #000;
`

const ModalContent = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141fa0;

        button {
            padding: 10px 24px;
            background: #141fa0;
            color: #fff;
            border: none;
        }
`;

const CloseModalButton = styled(MdClose)`
        cursor: pointer;
        position: absolute;
        color: #141fa0;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        padding: 0;
        z-index: 10;
`

export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef()

    const animation = useSpring ({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0px)` : `translateY(-1000px)`,
        transition: showModal ? `transform 4s ease-out` : `transform 5s ease-in`
    });

    // closes box when clicking on the background
    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    };

    // closes box when pushing ESC
    const pressEsc = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect (
        () => {
            document.addEventListener('keydown', pressEsc);
            return () => document.removeEventListener('keydown', pressEsc);
        },
        [pressEsc]
    );

    return(
        <>
{  showModal ? 
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
            <ModalWrapper>
                <ModalImg src={read} alt='read'/>
                <ModalContent>
                    <div>          
                        <ul>
                            <li>Taking a break may mean being very active. It may mean not doing very much at all.</li>
                            <li>Take a deep breath… and relax. Try reading a book, yoga or meditation, or just putting your feet up.</li>
                            <li>Listen to your body. If you’re really tired, give yourself time to sleep.</li>
                            <li>Without good sleep, our mental health suffers and our concentration goes downhill.<br></br>
                                Sometimes the world can wait.</li>
                        </ul>
                    </div>
                </ModalContent>
                <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                />
            </ModalWrapper>
            </animated.div>
        </Background>
            : null
}
        </>
    )
}

export default Modal;
