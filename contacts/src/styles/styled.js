import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    background-color: royalblue;   
    margin: 0px;
    padding: 0px;
    position: fixed;
    display: inline-block;
    width:100%;    
    top: 0px;

    & ul{        
        margin: 0;
        padding: 0;
        float:right;
        overflow: hidden ;
        display: flex;
    }

    & li{
        list-style: none;   
    }
    & a{
        font-family: arial;
        display: block;
        padding: 14px 16px;
        color: white;   
        text-align: center;        
        text-decoration: none;
        transition: background-color .5s;
        text-transform: uppercase;
        font-weight: bold;
        

        :hover{
            background-color: #2141A0;            
        }
    
    }
`
export const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden ;    
`

export const StyledListitems = styled.li`  
    float:right;  

    & a{
        font-family: arial;
        display: block;
        padding: 14px 16px;;
        color: white;   
        text-align: center;        
        text-decoration: none;
        transition: background-color .5s;
        

        :hover{
            background-color: #2141A0;            
        }
    }
`
export const ContactsContainer = styled.div` 
   
`
export const CardsContainer = styled.div`
    display: grid;    
    text-align: center;
    grid-gap: 10px;
    margin: 40px 20px 10px 20px;
    

    @media (min-width: 320px){
      grid-template-columns: repeat(1, 1fr)  
    }

    @media (min-width: 520px){
        grid-template-columns: repeat(2, 1fr)
    }

    @media (min-width: 768px){
        grid-template-columns: repeat(3,1fr)
    }

    @media (min-width: 1200px){
        grid-template-columns: repeat(4,1fr)
    }

    @media (min-width:1680px){
        grid-template-columns: repeat(5,1fr)
    }
    @media (min-width:1920px){
        grid-template-columns: repeat(6,1fr)
    }
`

export const ContactCard = styled.div`
border-color : #898989;
box-shadow: 0 2px 8px 0 rgba(0,0,0, .08);
padding: 10px;
margin: 12px;
font-family: Arial;
border-radius: 15px;

& h2{
    margin: auto;    
}
`
export const CardButton = styled.button`
    padding: 5px;
    margin: 5px;
    border: none;
    border-radius: 15px;
    color: white;
    width: 80px;
    font-size: 15px; 
    transition: background-color .4s;
    cursor: pointer;
    border: solid 1px;
    background-color: royalblue;

    :hover{
        color: royalblue; 
        background-color: transparent;
        border-color: royalblue;       
    }   
`
export const DeleteButton = styled(CardButton)`
    /* background-color: #FA0000;  

       :hover{
        color: #FA0000; 
        background-color: transparent;
        border-color: #FA0000;       
    }       */
    color: white; 
       background-color: royalblue;
       border-color: royalblue; 

    :hover{
       color: royalblue; 
       background-color: transparent;
       border-color: royalblue;        
   }     
`
export const StyleFilterContainer = styled.div` 
    position: sticky; 
    display: inline-block;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,.08);
    border-radius:15px;          
    top: 55px;
    background-color: white;
    font-family: Arial;  
    padding: 10px ; 
    margin: 10px 15px 10px 15px;   
  
`
export const FilterContainer = styled.div`
   display: block;   
   & label{
    margin:2px;
   }    
   & select{       
    margin:2px;       
   }  
   & input{
    margin:2px; 
   }  
`
export const FilterButton = styled.button`    
    display: inline;    
    border:none; 
    background-color: transparent;
    color: #151515;  
    cursor:pointer;
    outline:none;          
`

export const StyleSearchBar = styled.div`  
display: inline-block;
    & input{
        border-radius: 5px;
        border: solid 1px grey;
    }   
`

export const StyleFilterBar = styled.div`  
display: inline-block;    
`
export const StyledContact = styled.div`        
    margin: 70px auto;
    padding: 12px;  
    text-align: center;  
    font-family:Arial;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.08);
    max-width: 280px;
    border-radius: 15px;

    & label{        
        color:#333;      
        margin-top: 6px;   
        display:block;              
    }
    & input{    
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;      
        margin-top: 6px;
        font-size: 12px;
    }
    & select{
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;   
        margin-top: 6px;
        width: 160px;
        text-align: center;
        text-align-last: center;
    }
    & button{
        margin-top:15px;
        padding: 8px;
    }
`
export const StyledLoading = styled.div`
    margin: auto;
    text-align:center;
    font-family:arial;
    justify-content: center;

    & div{
        border: ${({ border }) => border} solid #f3f3f3; /* Light grey */
        border-top: ${({ border }) => border} solid royalblue; /* Blue */
        border-radius: 50%;
        width: ${({ size }) => size};
        height: ${({ size }) => size};
        animation: spin 1s linear infinite;
        margin:auto; 
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
`
export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.3);
    z-index: 100;
`

export const StyledModalContent = styled.div`
    position:fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    width:20%;
    min-height:10%;    
    background-color: white;    
    box-shadow:0 0 10px rgba(0,0,0,.5);
    z-index: 101;
    overflow-y: auto;  
    padding: 40px;
    border-radius: 5px;
`
