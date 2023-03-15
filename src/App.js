import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import FullLanding from "./layouts/FullLanding";
import MQTTConfigurationForm from "./forms/MQTTConfigurationForm";
import JobList from "./forms/JobList";
import PrintingConfigurationForm from "./forms/PrintingConfigurationForm";
import NetworkConfigurationForm from "./forms/NetworkConfigurationForm";


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<FullLanding />}>
            <Route index element={<MQTTConfigurationForm />} />
            <Route path="/app/network" element={<NetworkConfigurationForm />} />
            <Route path="/app/MQTT" element={<MQTTConfigurationForm />} />
            <Route path="/app/printing" element={<PrintingConfigurationForm />} />
            <Route path="/app/jobs" element={<JobList />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
