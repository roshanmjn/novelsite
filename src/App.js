import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@popperjs/core/dist/umd/popper.min.js";
import "./index.css";
import { AdminLayout } from "./Admin/AdminLayout";
import PublicLayout from "./pages/PublicLayout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="layout d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

// route for test purpose only.
// app.post("/write", async (req, res) => {
//   // console.log({body:req.body});
//   console.log('msg by:',req.body?.sender?.name);
//   Logger.info(`writeMessage, ${JSON.stringify(
//       {
//           name: req.body.sender?.name,
//           id: req.body.sender?.id,
//           message:req.body.message?.text
//       }
//   )}`);
  
//   const payload = {
//       "receiver": req.body?.sender?.id,
//       "min_api_version":1,
//       "sender":{
//           "name":`A Quote For ${req.body?.sender?.name}` ?? "Forced Quote",
//           "avatar":"https://i.pravatar.cc/100"
//       },
//       "tracking_data":"tracking data",
//       "type":"text",
//       "text": require('../tesData.json')[0].quotes[Math.floor(Math.random() * 41)]
//   }
//   if(req.body?.sender?.id && req.body){
//       console.log({name:req.body.sender.name, id:req.body.sender.id})
//       const reply = await axios.post("https://chatapi.viber.com/pa/send_message",payload,{
//           headers: {
//               'X-Viber-Auth-Token': process.env.MS_CLIENT_ID || 'zzz'
//           }
//       });
//   }
     
//   return res.status(200).json({ message: req.body?.message });
// });
export default App;
