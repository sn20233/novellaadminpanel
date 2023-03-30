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

function sort(a) {
  const t = a.filter((item, index) => a.indexOf(item) === index);
  a.length = 0;
  console.log(t);

  return t;
}

async function getScrapbooks() {
  var l = [];
  var g = [];
  let count = 0;
  const documents = await getDocs(collection(db, "users"));

  documents.forEach((doc) => {
    console.log(doc.id);
    l.push(doc.id);
  });
  console.log(l);
  l = sort(l);

  for (let i = 0; i < l.length; i++) {
    const docs = await getDocs(collection(db, "users", l[i], "Scrapbooks"));
    docs.forEach((item) => {
      console.log(item.data().tags);
      g.push(item.data().tags);
    });
  }
  g=sort(g)
  console.log(g.length);
  return g.length;
}
export default function Tags() {
  const [size_s, setSize_s] = useState(0);
  useEffect(() => {
    async function fetchData_s() {
      const size_s = await getScrapbooks();
      setSize_s(size_s);
    }
    fetchData_s();
  }, [db]);
  return <div>{size_s}</div>;
}
