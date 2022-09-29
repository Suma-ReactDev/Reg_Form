import RegForm from "./components/RegForm";
import UserList from "./components/UserList";
import Registered from "./components/Registered";
import {Routes, Route} from "react-router-dom"
import EditUser from "./components/EditUser";
import FormikContainer from "./components/FormikContainer";
import DateComponent from "./components/DateComponent";
function App() {
  
  return (
    <div className='flex flex-col items-center justify-center
    min-h-screen mx-auto bg-slate-400 rounded'>
      {/* <UserList /> */}
      <Routes>
        <Route path='/' element={<Registered />} />
        <Route path='rgster' element={<FormikContainer />} />
        <Route path='date' element={<DateComponent />} />
        <Route path='edit-user' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
