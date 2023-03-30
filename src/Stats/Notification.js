import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
import Firestore from "firestore";

var l = [];
var g = [];
var final = [];
const d = new Date();
const now = new Date().toJSON().slice(0, 10);
console.log(now);

console.log(d);
function sort(a) {
  const t = a.filter((item, index) => a.indexOf(item) === index);
  a.length = 0;
 

  return t;
}

async function getGroups() {
  
  const documents = await getDocs(collection(db, "users"));

  documents.forEach((doc) => {
    console.log(doc.id)
    l.push(doc.id);
  });
  l = sort(l);
  console.log(l);
  for (let i = 0; i < l.length; i++) {
    const docs = await getDocs(collection(db, "users", l[i], "Notifications"));
    docs.forEach((item) => {
      g.push(item.id);
    });
  }
  console.log(g);
  console.log(g.length)
  g=sort(g)
  return g.length;
}
export default function Notification() {
  const [size_n, setSize_n] = useState(0);
  useEffect(() => {
    async function fetchData_n() {
      const size_n = await getGroups();
      setSize_n(size_n);
    }
    fetchData_n();
  }, [db]);

  return <div>{size_n}</div>;
}
