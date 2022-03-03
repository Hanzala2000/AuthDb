import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
export default function Sign() {
  const [effectData, setEffectData] = useState([]);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    let arr = [];
    db.ref("/")
      .child("Users")
      .on("child_added", (data) => {
        var obj = data.val();

        arr.push(obj);
        setEffectData([...arr]);
      });
  }, []);
  // console.log(effectData)

  let set = (e, prop) => {
    setData({ ...data, [prop]: e });
  };
  let next = () => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.log(error);
      });
    db.ref("/")
    .child("Users")
    .push(data);
  };

  let updEmail = (val,i) =>{

    var promt = prompt("",val.email)
    let data = [...effectData]
    // console.log(effectData)
    data[i].email = promt
    // console.log(data)
    setEffectData({...effectData,email:data})
    db.ref("/").child("Users").update(effectData)

    // console.log(effectData)
  }
  return (
    <div>
      <input
        value={data.email}
        type="email"
        onChange={(e) => set(e.target.value, "email")}
      />
      <br />
      <input
        value={data.password}
        type="password"
        onChange={(e) => set(e.target.value, "password")}
      />
      <br />
      <button onClick={() => next()}>Sign In</button>


      {effectData.map((val, i) => {
        return (
          <h3 key={i}>
            {val.email + " " + val.password}
            <button onClick={() => updEmail(val,i)}>Update Email</button>{" "}
            {/* <button onClick={() => updPass()}>Update Password</button> */}
          </h3>
        );
      })}
    </div>
  );
}
