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
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();

  const url = "http://192.168.0.7:3000/products"
  
  const fecthData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  
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
    setLoading(false);
    };

  const deleteProduct = async (e) => {
    e.preventDefault();
    await fetch(url + `/${id}`, {
      method:"DELETE",
      headers:{
        "Content-type":"application/json"
    }
  }).then((response) => response.json());
  fecthData();
  }

  useEffect(() => {
    fecthData();
   }, []);

  return (
    <>
      <h1>Fui obrigado a desligar o servidor pq vcs sao bisonhos, {pessoa}</h1>
      <label>
        <span>Qual seu nome?</span>
        <input type="text" onChange={(e) => {setPessoa(e.target.value)}} />
      </label>
      <div >
        <h2>Lista de produtos</h2>
        {loading ? <div>Carreagando</div> :
        <ul className='products'>
          {products.map((produto) => {
            return (<><li key={produto.id}>{produto.name} - R${produto.price}</li>  <div style={{'font-size':'10px','marginTop':'0%', marginBottom:'0.5em'}}>Código = {produto.id}</div></>)
          })}
        </ul>
      }

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
            
            <input type="submit" value="Criar" disabled={loading}/>
            </form>

            <form action="" onSubmit={deleteProduct}>
              <label htmlFor="">Id do produto a ser deletado: 
                <input type="number" name="" id="" onChange={(e) => {setId(e.target.value)}}/>
                <input type="submit" value="Deletar" disabled={loading} />
              </label>

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
