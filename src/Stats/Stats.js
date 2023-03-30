import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
import Firestore from "firestore";


var l = [];
var g = [];
var final = [];
const d =  new Date()
const now = new Date().toJSON().slice(0,10);
console.log(now)

console.log(d)
function sort(a) {
  const t = a.filter((item, index) => a.indexOf(item) === index);
  a.length = 0;
  console.log(t);

  return t;
}
async function getUsers() {
  var count=0;
  const documents = await getDocs(collection(db, "users"));
  // documents.forEach((item) => {
                
  //   console.log(item.data().timestamp); 
  //   console.log((item.data().timestamp.seconds)*1000)  
  //   console.log(item.data().timestamp.nanoseconds)
  //   const a = ((item.data().timestamp.seconds)*1000)+(item.data().timestamp.nanoseconds )/ 1000000;;
  //   const date = new Date(a)
  //   const str = (date.toLocaleDateString()).split('/')
  //   const format = `${str[2]}-${str[0].padStart(2, '0')}-${str[1].padStart(2, '0')}`;
  //   console.log(format)
  //   if (now == format) {
  //     count+=1
  //   }
  // });
  //l.push(doc.id)
  console.log(count)
  console.log(documents.size)
  return documents.size;
}
console.log(l);





export default function Stats() {
  const [size, setSize] = useState(0) ; 
  

  useEffect(() => {
    async function fetchData() {
      const size = await getUsers();
      setSize(size);
    }
    fetchData();
  }, [db]);
  

  // useEffect(() => {
  //   async function fetchData_g() {
  //     const size_g = await getGroups();
  //     setSize_g(size_g);
  //   }
  //   fetchData_g();
  // }, [db]);

  return <div>{size}</div>;
}
