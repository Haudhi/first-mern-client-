// import * as React from "react";
import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function BasicTextFields() {
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Registration No."
        variant="outlined"
        value={student.regNo}
        onChange={(event) => {
          setStudent({ ...student, regNo: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={student.studentName}
        onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Grade"
        variant="outlined"
        value={student.grade}
        onChange={(event) => {
          setStudent({ ...student, grade: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Section"
        variant="outlined"
        value={student.section}
        onChange={(event) => {
          setStudent({ ...student, section: event.target.value });
        }}
      />
      <button onClick={createStudent}>create</button>
    </form>
  );
}
