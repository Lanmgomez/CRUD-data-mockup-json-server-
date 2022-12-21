import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from './ProjectEdit.module.css'
import InputMask from 'react-input-mask'

const ProjectEdit = () => {

    const {id} = useParams()

    const [infos, setInfos] = useState([])
    const [name, setName] = useState(infos.name)
    const [cpf, setCPF] = useState(infos.cpf)
    const [email, setEmail] = useState(infos.email)
    const [dataNasc, setDataNasc] = useState(infos.dataNasc)
    const [sex, setSex] = useState(infos.sex)

    useEffect(() => {
        const fetchData = async() => {
           await fetch(`http://localhost:5000/infos/${id}`, {
                method:"GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {setInfos(data)})
            .catch(err => console.log(err))
        }
        fetchData()
    }, [id])

    const handleEdit = (e) => {

        const SaveInfos = {
            name, cpf, email, dataNasc, sex
        }

        fetch(`http://localhost:5000/infos/${id}`, {
            method:"PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(SaveInfos)
        })
        alert("Dados alterados com sucesso!")
    }

  return (
    <div>
        <h1>Salve e altere as informações:</h1>
            <div className={styles.projectEdit}>
                <form onSubmit={handleEdit} key={infos.id}>
                    <label>
                        <span>Nome:</span>
                            <input type="text" 
                                   defaultValue={infos.name}
                                   onChange={(e) => setName(e.target.value)}
                            />
                    </label>
                    <label>
                        <span>CPF:</span>
                            <InputMask mask="999.999.999-99" 
                               onChange={(e) => setCPF(e.target.value)}
                               defaultValue={infos.cpf}
                    /> 
                    </label>
                    <label>
                        <span>Email:</span>
                            <input type="text" 
                                   defaultValue={infos.email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                    </label>
                    <label>
                        <span>Data de Nascimento:</span>
                            <input type="date" 
                                   defaultValue={infos.dataNasc}
                                   onChange={(e) => setDataNasc(e.target.value)}
                            />
                    </label>
                    <label>
                        <span>Sexo:</span>
                            <span>Masculino</span>
                            <input type="radio" 
                                   name="sex"
                                   defaultValue={infos.sex}
                                   onChange={(e) => setSex(e.target.value)}
                            />
                            <span>Feminino</span>
                            <input type="radio" 
                                   name="sex"
                                   defaultValue={infos.sex}
                                   onChange={(e) => setSex(e.target.value)}
                            />
                    </label>
                    <input type="submit" value="Salvar" className={styles.savebutton}/>
                </form>
            </div>
    </div>
  )
}

export default ProjectEdit
