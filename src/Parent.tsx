import "./Parent.css";


function Parent() {
  return (
    <div className="parent-container">

      <div className="container1">
        <div className="class">
          <select name="select class of student " id="">
            <option value="std">please select the class </option>
            <option value="1std">1 standard</option>
            <option value="2std ">2 standard</option>
            <option value="3std ">3 standard</option>
          </select>
        </div>
        <div className="stud">
          <select name="" id="">
            <option value=" ">please select the student</option>
            <option value="Aman">Deepak</option>
            <option value="kashif">Aman</option>
            <option value="deepak">Nawas</option>
            <option value="deepak">Kashif</option>
          </select>
        </div>
        < div className="photo">
          <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="" />
        </div>
      </div>
      <div className="container2">
      <h2 className="heading">Parent Details</h2>
       <div className="d">

        <div className="form-group">
    <label className="label" htmlFor="name">Name</label>
    <input
              type="text" 
              id="name"
              name="name"
              value="Deepak Vishwakarma " 
              readOnly 
              className="readonly-input"
            />
  </div>

  <div className="form-group">
    <label className="label" htmlFor="relation">Relation</label>
    <input
              type="text"
              id="relation"
              name="relation"
              value="Father" 
              readOnly
              className="readonly-input"
            />
  </div>

  <div className="form-group">
    <label className="label" htmlFor="phone">Phone No</label>
    <input
              type="text"
              id="phone"
              name="phone"
              value="98924 25844" 
              readOnly
              className="readonly-input"
            />
  </div>

  <div className="form-group">
    <label className="label" htmlFor="address">Address</label>
    <input
              type="text"
              id="address"
              name="address"
              value="Mira Road" 
              readOnly
              className="readonly-input"
            />
  </div>

  <div className="form-group">
    <label className="label" htmlFor="other">*</label>
    <input
              type="text"
              id="other"
              name="other"
              value="Hello"
              readOnly
              className="readonly-input"
            />
  </div>
        </div>
      </div>


    </div>
  )
}


export default Parent
