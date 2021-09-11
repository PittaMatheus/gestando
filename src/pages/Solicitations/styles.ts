import styled from 'styled-components';


export const Container = styled.div``;

export const Content = styled.main``;

export const MenuTeste = styled.div`
  align-content: left;
  margin-top: 15px;
  /* width: 10%; */

  > button {
    background-color: ${props => props.theme.colors.info};
  }



  * {
  box-sizing: border-box;
}

.page-contain {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background:${props => props.theme.colors.primary};
  /* border: .25em solid ${props => props.theme.colors.white}; */
  padding: 2em;
  font-family: 'Open Sans', sans-serif;
}

.data-card {
  display: flex;
  flex-direction: column;
  max-width: 25.75em;
  min-height: 25.75em;
  overflow: hidden;
  border-radius: .5em;
  text-decoration: none;
  background: ${props => props.theme.colors.secondary};
  margin: 1em;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
  transition: transform .45s ease, background .45s ease;
  
  h3 {
    color: #2E3C40;
    font-size: 3.5em;
    font-weight: 600;
    line-height: 1;
    padding-bottom: .5em;
    margin: 0 0 0.142857143em;
    border-bottom: 2px solid #753BBD;
    transition: color .45s ease, border .45s ease;
  }

  h4 {
    color: #627084;
    text-transform: uppercase;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 0 0 1.777777778em;
    transition: color .45s ease;
  }

  p {
    opacity: 0;
    color: #FFFFFF;
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    transform: translateY(-1em);
    transition: opacity .45s ease, transform .5s ease;
  }

  .link-text {
    display: block;
    color: #753BBD;
    font-size: 1.125em;
    font-weight: 600;
    line-height: 1.2;
    margin: auto 0 0;
    transition: color .45s ease;

    svg {
      margin-left: .5em;
      transition: transform .6s ease;
      
      path {
        transition: fill .45s ease;
      }
    }
  }
  
  &:hover {
    background: ${props => props.theme.colors.tertiary};
    transform: scale(1.02);
    
    h3 {
      color: #FFFFFF;
      border-bottom-color: #A754C4;
    }

    h4 {
      color: #FFFFFF;
    }

    p {
      opacity: 1;
      transform: none;
    }

    .link-text {
      color: #FFFFFF;

      svg {
        animation: point 1.25s infinite alternate;
        
        path {
          fill: #FFFFFF;
        }
      }
    }
  }
}

@keyframes point {
  0% {
   transform: translateX(0);
  }
  100% {
    transform: translateX(.25em);
  }
}
`;



