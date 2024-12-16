import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Login from './pages/Login'
import Questions from './pages/Questions'
import Profile from './pages/Profile'
import Instructions from './pages/Instructions'
import Thankz from './pages/Thankz'
import QuizResult from './pages/QuizResult'
import View from './pages/View'
import Options from './pages/Options'
import Qqq from './pages/Qqq'
import List from './pages/List'
import Thanky from './pages/Thanky'
import { RegistrationProvider } from './context/RegistrationContext'
import { QuizProvider } from './context/QuizContext'


 
function App() {
   return (
    <>
      <div className='app'>
        <RegistrationProvider>
          <QuizProvider>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/quizresult" element={<QuizResult/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/instructions" element={<Instructions/>} />
      <Route path="/thankz" element={<Thankz/>} />
      <Route path="/view" element={<View/>} />
      <Route path="/options" element={<Options/>} />
      <Route path="/qqq" element={<Qqq/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/thanky" element={<Thanky/>} />
      </Routes>
      </BrowserRouter>
      </QuizProvider>
      </RegistrationProvider>
       </div>
    </>
  )
}
export default App