import {useState, useEffect} from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import styles from '../Projects/Projects.module.css'

const Search = () => {

    const [searchParams] = useSearchParams()
    const url = `http://localhost:5000/infos?${searchParams}`
    const urlDelete = 'http://localhost:5000/infos/'
    const [infos, setInfos] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            await fetch(url)
                    .then(resp => resp.json())
                    .then(data => {setInfos(data)})
                    .catch(error => console.log(error))
                }
                fetchData()
    })

    const handleDelete = async(id) => {
        await fetch(`${urlDelete}${id}`, {
          method:"DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()
        })
        setInfos(infos.filter((info) => info.id !== id))
        alert("Dados deletados com sucesso!")
      }

  return (
    <div>
        <h1>Resultados disponíveis</h1>
         <div className={styles.projects}>
            {infos.map((info) => (
                <ul key={info.id}>
                    <li><span>Nome:</span> {info.name}</li>
                    <li><span>CPF:</span> {info.cpf}</li>
                    <li><span>Email:</span> {info.email}</li>
                    <li><span>Data de Nascimento:</span> {info.dataNasc}</li>
                    <li><span>Sexo:</span> {info.sex}</li>
                    <div className={styles.btns}>
                        <div>
                            <Link to={`/projectEdit/${info.id}`}>
                                <i className="bi bi-pen-fill"></i>
                                <input type="button" value="Editar" />
                            </Link>
                        </div>
                        <div> 
                            <i className="bi bi-trash3-fill"></i>
                                <input type="button" 
                                       value="Excluir" 
                                       onClick={() => handleDelete(info.id)}/> 
                                
                        </div>
                    </div>
                </ul>
            ))}
         </div>   
    </div>
  )
}

export default Search