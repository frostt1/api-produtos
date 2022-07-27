// custom hook
import { useFetch } from "./hooks/useFetch"
//css
import "./App.css"
import List from "./components/List"
import NewProduct from "./components/NewProduct"

const App = () => {
  
  return <div>
    <h1>Lista de Produtos</h1>
    <List />
    <NewProduct />
  </div>
}

export default App