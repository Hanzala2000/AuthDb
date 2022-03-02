import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUser from "../component/signInterface";
import LogUser from "../component/logInterface";
import Sign from "../component/signup";
import Log from "../component/login";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Sign />
              <Log />
            </>
          }
        />
        <Route path="/signInterface" element={<SignUser />} />
        <Route path="/logInterface" element={<LogUser />} />
      </Routes>
    </BrowserRouter>
  );
}
