import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-sixe:1.4rem;
background:transparent;
border:0.05rem solid white;
border-color:${props => props.cart? "var(--mainblue)":"var(--lightblue)"};
color:${prop => prop.cart ? "var(--mainblue)":"var(--lightblue)"};
border-color:gray;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${prop => prop.cart ? "orange":"#E22C5A"};
    color:pink;

}
&:focus{
    outline:none;
}
`
