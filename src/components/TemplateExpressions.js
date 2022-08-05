const TemplateExpressions = () =>{
    const name = "Nícholas";
    const data = {
        age:31,
        job:"Engineer"

    };
    return(
        <div>
            <h2>Olá {name}, tudo bem? Como vai a vida de {data.job}?</h2>
        </div>
    );
};

export default TemplateExpressions;