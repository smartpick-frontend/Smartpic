import { useEffect, useState } from "react";
import "../pages/gd.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Guard_Dashbord() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([]);
  const [click, setclick] = useState<{ parents: string; child: string }>();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/data/ServeData")
      .then((ans) => setData(ans.data))
      .catch((err) => err);
  }, []);

  const router = useNavigate()

  return (
    <div id="GMain">
      <div className="leftbar">
        <table>
          <tr>
            <th>Parents name</th>
            <th>Child name</th>
            <th>Time stamp</th>
            <th>Status</th>
          </tr>
          {data.map((ans) => (
            <tr
              key={ans["timestamp"]}
              onClick={(e: any) => {
                console.log(e.target.innerText);
                setclick({
                  child: e.target.innerText,
                  parents: e.target.innerText,
                });
              }}
            >
              <td>{ans["Parents_Name"]}</td>
              <td>{ans["Child_Name"]}</td>
              <td>{ans["timestamp"]}</td>
              <td>{ans["Child_Name"] !== "UNKNOWN" ? "PICK" : "Pending"}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="mid-box">
        <div className="child">
          <img
            src={"http://127.0.0.1:5000/Images/childs/" + click?.child + ".jfif"}
            alt="j"
          />
        </div>
        <div className="parents">
          <img
            src={"http://127.0.0.1:5000/Images/parents/" + click?.parents + ".jfif"}
            alt="s"
          />
        </div>
      </div>
    </div>
  );
}
