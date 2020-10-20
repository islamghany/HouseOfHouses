import {createGlobalStyle}  from 'styled-components'

export const GlobaStyle = createGlobalStyle`
   body{
   	background:#eff3f5;
   	min-height:100vh;
   	color:"rgb(61, 88, 102)";
   }
   section{
   	padding:20px 40px;
   }
   .heading{
     color:#293140;
     font-size:30px;
     margin-bottom:30px;
     text-transform:capitalize;
   }
`
export const theme = {
	white:"#ffffff",
	bg:"#eff3f5",
	primary:"#293140",
	secondary:"#38A169",
	background:`url(${require('./images/rsz_map.png')}) center center no-repeat, radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747`,
	mainText:"rgb(61, 88, 102)",
    subText:"rgb(143, 166, 178)",
    text:"rgb(203, 213, 224)",
	boxShadow:"rgba(8, 35, 51, 0.05) 0px 3px 6px"
}
