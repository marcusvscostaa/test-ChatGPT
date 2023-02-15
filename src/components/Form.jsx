import React,{useState} from "react";
const { Configuration, OpenAIApi } = require("openai");


function Form(props){

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);

    const [inputText, setInputText] = useState("");
 

    async function runCompletion(event) {
        props.addPergunta(inputText);
        event.preventDefault();
        const completion = await openai.createCompletion({  
            model: "text-davinci-003",
            prompt: inputText,
            max_tokens: 150,
            temperature: 0.9,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],           
        });
        props.addChat(completion.data.choices[0].text);
         console.log(inputText);
        setInputText("");
    }

    function handlerChage(event){
        setInputText(event.target.value);
    }

    return(
        <form>
        <input onChange={handlerChage} id="pergunta" type="text" placeholder="Digite sua pergunta..." value={inputText}/>
        <button onClick={runCompletion} type="submit">Enviar</button>
        <br/>
        {//<p>{resposta}</p>
        }
    </form>
    )
}

export default Form;