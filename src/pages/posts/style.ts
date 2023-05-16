import styled from "styled-components";


export const PostsDiv = styled.div`

    background-color: #040404;
    display: flex;
    flex-direction: column;
    align-content: center;
    font-family: 'Heebo', Helvetica;
    color: #cdcdcd;



    ul{
        list-style: none;
        margin: 20px;
    
    

    li{
        background-color: rgba(249,249,249, 0.05);
        padding-left: 30px;
        margin: 20px 0; 
        
    }

    span{
        width: 90%;
        color: #7695EC;
        font-size: 40px;
        background: linear-gradient(45deg, #8481FA, #38C9C8);
        background-image: linear-gradient(45deg, rgb(132, 129, 250), rgb(56, 201, 200));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        flex-wrap: wrap;
        word-wrap: break-word
    
    }

    p{
        padding-bottom: 30px;
        padding-right: 30px;
        text-align: justify;    
        word-wrap: break-word   
        
        
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 30px;

        p{
        padding-bottom: 15px;
            
        }
    }

    div.actions button{
        margin: 10px;
        padding: 0;
        background-color: none;
        background: none;
        border: none;
        cursor: pointer;
    }
 
}

div.newPost{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: black;
        
        background: linear-gradient(45deg, #8481FA, #38C9C8);
        background-image: linear-gradient(45deg, rgb(132, 129, 250), rgb(56, 201, 200));

    button{
        
        color: white;
        opacity: 0.9;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 5px;
        justify-content: center;       
        border: none;
        border-radius: 5px;
        width: 100px;
        height: 20px;
        float: inline-start;
        background-color: #040404;
        
        &:hover{
        background: linear-gradient(45deg, #8481FA, #38C9C8);
        background-image: linear-gradient(45deg, rgb(132, 129, 250), rgb(56, 201, 200));
    }

        }

    
}

div.pagination{

        display: flex;
        flex-direction: row;
        justify-content: center;

    button{   
    
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 5px;
        justify-content: center;
        background: linear-gradient(45deg, #8481FA, #38C9C8);
        background-image: linear-gradient(45deg, rgb(132, 129, 250), rgb(56, 201, 200));
        border: none;
        border-radius: 5px;
        width: 50px;
        height: 20px;
        float: inline-start;
        cursor: pointer;

      &:disabled{
        background: rgb(65,193,206);
        opacity: 0.3;
        color: white;
        cursor: default;
      }

     
    }

    @media only screen and (max-width: 768px) {
            
            button{
                margin: 5px;
                
        }
        }
}

`;