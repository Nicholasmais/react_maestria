//Components
import FirstComopent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
//Styles
import './App.css';
import Challenge from './components/Challenge';

import {useState, useEffect} from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pessoa,setPessoa] = useState("Desconhecido");
  const url = "http://172.17.25.44:3000/products"
  
  useEffect(() => {
    async function fecthData(){
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }
   fecthData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const product = {
      name,
      price,
    };
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body:JSON.stringify(product)
    });

  const addedProduct = await response.json();
  setProducts((prevProducts) => [...prevProducts, addedProduct])

  };

  return (
    <>
      <h1>Fui obrigado a desligar o servidor pq vcs sao bisonhos, {pessoa}</h1>
      <label>
        <span>Qual seu nome?</span>
        <input type="text" onChange={(e) => {setPessoa(e.target.value)}} />
      </label>
      <div>
        <h2>Lista de produtos</h2>
        <ul>
          {products.map((produto) => {
            return <li key={produto.id}>{produto.name} - R${produto.price}</li>
          })}
        </ul>


          <div className="add-product">
            <form action="" onSubmit={handleSubmit}>
            <label >
               Nome:
              <input type="text" value={name} name={name} onChange={(e)=>setName(e.target.value)} />
            </label>

            <label >
               Preço:
              <input type="number" value={price} name={price} onChange={(e)=>setPrice(e.target.value)} />
            </label>
            
            <input type="submit" value="Criar"/>
            </form>
          </div>

      </div>
      <FirstComopent name={pessoa}></FirstComopent>
      <TemplateExpressions></TemplateExpressions>
      <Events></Events>
      <Challenge></Challenge>
    </>
  );
}

export default App;
