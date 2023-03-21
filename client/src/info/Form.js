import React, { useEffect, useState } from 'react'



const InfoForm = (props) => {
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [course, setcourse] = useState("");
    const [isEdit, setisEdit] = useState(false);

    const infoSubmit = () => {
        if (!isEdit) {
            const data = {
                isEdit: isEdit,
                name: name,
                email: email,
                phone: phone,
                course: course,
            }
            props.mydata(data)
        }
        else {
            const data = {
                isEdit: isEdit,
                _id: id,
                name: name,
                email: email,
                phone: phone,
                course: course,
            }
            props.mydata(data)
        }}

        useEffect(() => {
            if (props.setForm._id != null){
                setid(props.setForm._id);
                setname(props.setForm.name);
                setemail(props.setForm.email);
                setphone(props.setForm.phone);
                setcourse(props.setForm.course);
                setisEdit(true);
            }
        },[props])

        if (!props.setForm) {
            return <p>No data available</p>
        }

        

return (
    <form onSubmit={infoSubmit} autoComplete="off">
        <div className="form-group-dark">
            <label>Name : </label>
            <input
                type="text"
                name="name"
                class="form-control"
                onChange={(e) => setname(e.target.value)}
                value={name}
            />
        </div>
        <div>
            <label>Email : </label>
            <input
                type="email"
                name="email"
                class="form-control"
                onChange={(e) => setemail(e.target.value)}
                value={email}          
            />
        </div>
        <div>
            <label>Phone.No : </label>
            <input
                type="number"
                name="phone"
                class="form-control"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
            />
        </div>
        <div>
            <label>Course : </label>
            <input
                type="text"
                name="course"
                class="form-control"
                onChange={(e) => setcourse(e.target.value)}
                value={course}
            />
        </div>
        <br></br>
      <button type="submit" class="btn btn-success">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
)
}

export default InfoForm;