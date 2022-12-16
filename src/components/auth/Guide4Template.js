import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom'; 
import Result from '../../image/result.png';
/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트 입니다.
 */

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

    /*흰색 박스 */
    const WhiteBox = styled.div`
    .logo-area {
        display:block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0,0,0, 025);
    padding: 2rem;
    margin: 1rem;
    
    width: 360px;
    background: white;
    border-radius: 2px;
    position: relative;
    left: 6rem;

    `;

    const WhoIMG = styled.img `
    margin: 0 auto;
    width: 50%;
    height: 50%;
`;

    const AuthTemplate =({ children}) => {
        return(
            
                <WhiteBox>
                    <div className="logo-area">
                       
                        <p>step4</p>
                        <p>결과 출력 </p>
                        <WhoIMG src={Result} />
                    </div>
                    {children}
                </WhiteBox>
            
        );
    };



export default AuthTemplate;
