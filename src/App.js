import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import SelectApplication from "./components/Application/SelectApplication";
import SelectApplicationbyId from "./components/Application/SelectApplicationbyId";
import AddApplication from "./components/Application/AddApplication";
import AddParty from "./components/Party/AddParty";
import DeleteParty from "./components/Party/DeleteParty";
import SelectParty from "./components/Party/SelectParty";
import UpdateParty from "./components/Party/UpdateParty";
import AddElection from "./components/Election/AddElection";
import DeleteElection from "./components/Election/DeleteElection";
import SelectElection from "./components/Election/SelectElection.js";
import SelectElectionbyId from "./components/Election/SelectElectionbyId";
import UpdateElection from "./components/Election/UpdateElection";
import GenerateVoterId from "./components/EO/GenerateVoterId";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/selectapplication"
          element={<SelectApplication />}
        ></Route>
        <Route
          path="/selectapplicationbyId"
          element={<SelectApplicationbyId />}
        ></Route>
        <Route path="/addapplication" element={<AddApplication />}></Route>
        <Route path="/addparty" element={<AddParty />}></Route>
        <Route path="/updateparty" element={<UpdateParty />}></Route>
        <Route path="/deleteparty" element={<DeleteParty />}></Route>
        <Route path="/selectparty" element={<SelectParty />}></Route>
        <Route path="/addelection" element={<AddElection />} />
        <Route path="/updateelection" element={<UpdateElection />}></Route>
        <Route path="/deleteelection" element={<DeleteElection />}></Route>
        <Route path="/selectelection" element={<SelectElection />}></Route>
        <Route path="/selectelectionbyId" element={<SelectElectionbyId />}></Route>
        <Route path="/generatevoterid" element={<GenerateVoterId />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
