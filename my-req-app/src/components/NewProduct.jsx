import React,{useState} from 'react'
import { api } from '../api'

export const NewProduct = () => {
    const [products, setProducts] = useState([]);

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    

    const handleInputName = (e) => {
        setName(e.target.value)
    }

    const handleInputPrice = (e) => {
        setPrice(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
       
       if(name && price ) {
        const product = {
            name,
            price
        }

        let res = await api.addProduct(product)
    
        
       
       } else {
        alert('PRENCHA TODOS OS CAMPOS')
       }
        
      

    }

  return (
    <div>
        <h3>Adicione um produto:</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={name} onChange={handleInputName}/>
            </label>
            <label>
                <input type="text" value={price} onChange={handleInputPrice}/>
            </label>
            <input type="submit" value="Adicionar" />
        </form>
    </div>
  )
}

export default NewProduct