import React, {useState} from "react";
import Form from "./Form";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";



function App(){
   
    const [chats, setChats] = useState([]);
    const [pergunta, setPergunta] = useState([]);

    function addChat(newChat){
        setChats((prevValue) => {
             return [
                ...prevValue,
                newChat
            ]
        });
    }

    function addPergunta(newPergunta){
        setPergunta((prevValue) =>{
            return[
                ...prevValue,
                newPergunta
            ]
        })
    }

    function deleteOn(id){
        setChats((prevItem)=>{
            return chats.filter((intem, index)=>{
                return index !== id;
            })
        } )
    }

    return(
        <div className="container">
            <div className="heading">
                <h1>Usando API chatGPT</h1>
            </div>
            <div className="form">
                <div className="chatDiv">
                {
                    pergunta.map((item, index) => {
                        return <div>
                        <Pergunta pergunta={item} />
                        <Resposta resposta={chats[index]}/>
                        </div>
                    })
                    
                }
              
                </div>
                <Form addChat={addChat} addPergunta={addPergunta} />
            </div>
            
        </div>
    )
}
export default App;