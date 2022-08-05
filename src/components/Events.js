const Events = () =>{
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Função");
    }

    const render =(x) =>{
        if(x){
            return <h1>Positivo</h1>
        }
        else{
            return <h1>Falso</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique em mim!</button>
            </div>

            <div>
                <button onClick={() => {console.log("Lambda!")}}>Clique2 botão </button>
            </div>

            {render(true)}
            {render(false)}
        </div>
    );
};

export default Events;