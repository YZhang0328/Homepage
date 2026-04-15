import {
  BrowserRouter,
} from "react-router-dom";
import AppFrame from "@/AppFrame";

export default function App() {
  return (
    <BrowserRouter>
      <AppFrame />
    </BrowserRouter>
  );
}
