<<<<<<< HEAD
import {RegForm, Registered, FormikContainer, DateComponent, FormikContainerEdit} 
from './components/fileImports'
import { Routes, Route } from "react-router-dom";

=======
import RegForm from "./components/RegForm";
import UserList from "./components/UserList";
import Registered from "./components/Registered";
import { Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import FormikContainer from "./components/FormikContainer";
import DateComponent from "./components/DateComponent";
import FormikContainerEdit from "./components/FormikContainerEdit";
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen mx-auto bg-slate-400 rounded"
    >
<<<<<<< HEAD
=======
      {/* <UserList /> */}
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
      <Routes>
        <Route path="/" element={<Registered />} />
        <Route path="rgster" element={<FormikContainer />} />
        <Route path="date" element={<DateComponent />} />
<<<<<<< HEAD
=======
        <Route path="edit-user" element={<EditUser />} />
>>>>>>> ece036bf016d3c5bf24b1e99642cc99a33b050f1
        <Route path="rgster-edit" element={<FormikContainerEdit />} />
      </Routes>
    </div>
  );
}

export default App;