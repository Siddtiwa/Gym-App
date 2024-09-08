import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Home } from './pages/Home'
import { ExerciseDetail } from './pages/ExerciseDetail'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
