import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  const router = useNavigate();

  return (
    <nav id="nav">
      <div className="links" onClick={() => router("/guard")}>
        <Icon
          icon={"solar:user-id-bold"}
          height={23}
          color="white"
          style={{ paddingRight: "5px" }}
        />
        <div className="txt" style={{paddingRight:"5px"}}>{"dashboard"}</div>
      </div>
      <div className="links" onClick={() => router("/upload-attends")}>
        <Icon
          icon={"line-md:upload"}
          height={23}
          color="white"
          style={{ paddingRight: "5px" }}
        />
        <div className="txt" style={{paddingRight:"5px"}}>{"upload attends"}</div>
      </div>
      <div className="links" onClick={() => router("/list-all")}>
        <Icon
          icon={"line-md:list"}
          height={23}
          color="white"
          style={{ paddingRight: "5px" }}
        />
        <div className="txt" style={{paddingRight:"5px"}}>{"list all"}</div>
      </div>
    </nav>
  );
}
