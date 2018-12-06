import styled from 'styled-components';
import logoPic from './images/logo.png'
export const HeaderWrapper = styled.div`
    positions:relative;
    height: 58px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    display:block;
    height:58px;
    background:url(${logoPic});
    background-size:cover;
    border-bottom:1px solid #f0f0f0;
`;
