import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home_page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects/Projects';
import ProjectEdit from './pages/Projects_Edit/ProjectEdit';
import Search from './pages/Search_page/Search';
import SearchForm from './pages/Search_page/SearchForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projectEdit/:id" element={<ProjectEdit/>}/>
            <Route path="/search" element={<Search />}/>
          </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
