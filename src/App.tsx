import { useEffect } from "react";
import Theme from "./assets/Theme";

export default function App() {


    useEffect(() => {
        console.log(Theme.Fr)
    },[])

    return (
      <div style={{
        backgroundColor: "red",
      }}>
        shshsh
      </div>
    )
  }
  