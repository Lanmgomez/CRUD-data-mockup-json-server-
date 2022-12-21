import styles from './Home.module.css'
import InputMask from 'react-input-mask'
import {useState} from 'react'

const Home = () => {

  const url = 'http://localhost:5000/infos/'

// form
  const [name, setName] = useState("")
  const [cpf, setCPF] = useState("")
  const [email, setEmail] = useState("")
  const [dataNasc, setDataNasc] = useState("")
  const [sex, setSex] = useState("")
// msg save sucess
  const [saveSucess, setSaveSucess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSaveSucess(true)
    let timer = 
      setTimeout(() => {
        setSaveSucess(false)
      }, 5000)

    setName("") 
    setCPF("") 
    setEmail("") 
    setDataNasc("") 
    setSex()

    const SaveInfos = {
      name, cpf, email, dataNasc, sex
    }

    const save = fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(SaveInfos)
    })
    console.log(save)
    return () => clearTimeout(timer)
  }

  return (
    <div className={styles.home}>
      <h1>Bem vindo!</h1>
      {saveSucess && <p className={styles.savesucessmsg}>Dados salvos com sucesso</p>}
        <h2>Preencha seus dados:</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                  <span>Nome:</span>
                    <input type="text" 
                           placeholder='Digite seu Nome...'
                           onChange={(e) => setName(e.target.value)} 
                           value={name}
                           required   
                    />
            </label>
            <label>
                  <span>CPF:</span>
                    <InputMask mask="999.999.999-99" 
                               placeholder='Digite seu CPF...'
                               onChange={(e) => setCPF(e.target.value)}
                               value={cpf}
                               required
                    /> 
            </label>
            <label>
                  <span>Email:</span>
                    <input type="email" 
                           placeholder='Digite seu e-mail...' 
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           required
                    />
            </label>
            <label>
                  <span>Data de Nascimento:</span>
                    <input type="date" 
                           onChange={(e) => setDataNasc(e.target.value)}
                           value={dataNasc}
                           required
                    />
            </label>
            <label>
                  <span>Qual seu Sexo?</span>
                    <span>Masculino</span>
                      <input type="radio" 
                             name="sex" 
                             onChange={(e) => setSex(e.target.value)}
                             value="masculino"
                             required
                      />
                    <span>Feminino</span>
                      <input type="radio" 
                             name="sex" 
                             onChange={(e) => setSex(e.target.value)}
                             value="feminino"
                             required
                      />
            </label>
            <input type="submit" value="Salvar" className={styles.savebutton} />
          </form>
    </div>
  )
}

export default Home