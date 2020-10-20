import styled from 'styled-components';

export const HeaderContainer= styled.header`
    min-height:100vh;
    background:${p=>p.theme.background};
    background-size:80%;
    padding-top:60px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const HeaderBody = styled.div`
     background:${p=>p.theme.white};
     box-shadow:${p=>p.theme.boxShadow};
     padding:20px;
     border-radius:6px;
     min-width:600px;
     text-align:center;
`

export const HeaderTitle = styled.h1`
    color:${p=>p.theme.secondary};
    font-size:45px;

`
export const HeaderSubTitle = styled.p`
    color:${p=>p.theme.subtext};  
    max-width:500px;
    margin:auto;
    font-size:16px;
`

export const HeaderSearchBox = styled.div`
    margin:10px 0;
    width:100%;
    background:${p=>p.theme.mainText};
    height:55px;
    border-radius:10px;
    display:flex;
`
export const HeaderSearchBoxInput = styled.input`
    flex:1;
    border:none;
    outline:none;
    line-height:1.5;
    font-size:16px;
    color:${p=>p.theme.text};
    background:transparent;
    padding: 0 10px 0 25px;
    &::placeholder{
    	color:${p=>p.theme.subText};
    }
`

