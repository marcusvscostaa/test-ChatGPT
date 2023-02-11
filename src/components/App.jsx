import React, {useState} from "react";
const { Configuration, OpenAIApi } = require("openai");


function App(){
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);

    const [resposta, setResposta] = useState("");
    const [inputText, setInputText] = useState("");
 
    async function runCompletion(event) {
        event.preventDefault();
        const completion = await openai.createCompletion({  
            model: "text-davinci-003",
            prompt: inputText,
            max_tokens: 200
        });
        console.log(completion.data.choices[0].text);
        setResposta(completion.data.choices[0].text);
        setInputText("");
    }

    function handlerChage(event){
        setInputText(event.target.value);
    }



    return(
        <div className="container">
            <div className="heading">
                <h1>Usando API chatGPT</h1>
            </div>
            <div className="form">
                <form>
                    <input onChange={handlerChage} type="text" placeholder="Digite sua pergunta..." value={inputText}/>
                    <button onClick={runCompletion} type="submit">Enviar</button>
                    <br/>
                    <p>{resposta}</p>
                </form>
            </div>
            
        </div>
    )
}
export default App;