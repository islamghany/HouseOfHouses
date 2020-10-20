import styled from 'styled-components';

export const GalleryContainer = styled.section`
    padding:50px 40px 50px;
`
interface TitleProps {
  readonly background: string;
};

export const GalleryHeader=styled.h3`
     color:${p=>p.theme.primary};
     font-size:30px;
     margin-bottom:30px;
     text-transform:capitalize;
`

export const GalleryItem = styled.div<TitleProps>`
   height:500px;
   border-radius:10px;
   background:url(${p=>p.background});
   position:relative;
   box-shadow:${p=>p.theme.boxShadow};
   background-size:cover;
  background-position:center;
`
export const GalleryItemLayer = styled.div`
   position:absolute;
   top:0;
   left:0;
   bottom:0;
   right:0;
   background: linear-gradient(180deg,#1a202c6e 0%,#2d37487a 100%),linear-gradient(180deg,#0d0f1400 0%,rgba(27,32,43,0) 100%),#2f374778;
   transition:all .3s;
   border-radius:10px;
    display:flex;
   justify-content:flex-end;
   align-items:flex-end;
   &:hover{
   	background:transparent;
   }
`