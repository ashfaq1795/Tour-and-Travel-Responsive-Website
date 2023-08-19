import classes from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
//bootstrap used only for authentication error display style. we can import it either here or in index.js to available to all app.
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <div className={classes.App}>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/service"
            element={
              <ProtectedRoute>
                <Service />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}
