import React from 'react';
import styled from 'styled-components';
import Spinner from '../loading/Learn2.gif';

 const Background = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background: #ffffffb7;
z-index: 999;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

 const LoadingText = styled.div`
font: 1rem 'Noto Sans KR';
text-align: center;
`;

 const Loading=()=>{
     return(
     <>
        <Background>
            <LoadingText>신원확인 중..</LoadingText>
            <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
     </>
     )
 }
 export default Loading;
<test>
