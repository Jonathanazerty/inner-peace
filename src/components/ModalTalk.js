import React, {useRef, useEffect, useCallback} from 'react';
// import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import talk from '../images/talk.jpg';
import { MdClose } from 'react-icons/md'
import data from "./data/data.json";

const Background = styled.div`
    width: 1900px;
    height: 860px;
    margin: 0;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px
`

const ModalWrapper = styled.div`
    width: 1200px;
    height: 600px;
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
    margin: 80px 50px;
    width: 330px;
    height: 450px;
    border-radius: 50%;
    border: none;
`

const ModalContent = styled.div`
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141fa0;
    font-size: 24px;

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

export const ModalTalk = ( { showModal, setShowModal} , props) => {

    const modalRef = useRef()

    // const animation = useSpring ({
    //     config: {
    //         duration: 4000
    //     },
    //     opacity: showModal ? 1 : 0,
    //     // transform: showModal ? `translateY(0px)` : `translateY(-1000px)`,
    //     transition: showModal ? `transform 4s ease-out` : `transform 5s ease-in`
    // });

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
            {/* <animated.div style={animation}> */}
            <ModalWrapper>
                <ModalImg src={talk} alt='talk'/>
                <ModalContent>
                    {data[6].TalkText1}<br></br>
                    {data[6].TalkText2}<br></br>
                    {data[6].TalkText3}<br></br>
                    {data[6].TalkText4}<br></br>
                    {data[6].TalkText5}<br></br>
                    {data[6].TalkText6}<br></br>
                    {data[6].TalkText7}
                </ModalContent>
                <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                />
            </ModalWrapper>
            {/* </animated.div> */}
        </Background>
            : null
}
        </>
    )
}

export default ModalTalk;