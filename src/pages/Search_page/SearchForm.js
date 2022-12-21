import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchForm.module.css'

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${query}`)
    }

  return (
    <form onSubmit={handleSubmit} className={styles.formSearch}>
        <input type="text" 
               className={styles.searchInput}
               placeholder='Pesquise usuários cadastrados...' 
               onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm