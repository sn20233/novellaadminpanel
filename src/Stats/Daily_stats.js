import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
var g=[];
var l=[];
const now = new Date().toJSON().slice(0,10);
function sort(a) {
  const t = a.filter((item, index) => a.indexOf(item) === index);
  a.length = 0;
  console.log(t);

  return t;
}
async function getUsers_today() {
  var count=0;
  const documents = await getDocs(collection(db, "users"));
  documents.forEach((item) => {
                
    console.log(item.data().timestamp); 
    console.log((item.data().timestamp.seconds)*1000)  
    console.log(item.data().timestamp.nanoseconds)
    const a = ((item.data().timestamp.seconds)*1000)+(item.data().timestamp.nanoseconds )/ 1000000;;
    const date = new Date(a)
    const str = (date.toLocaleDateString()).split('/')
    const format = `${str[2]}-${str[0].padStart(2, '0')}-${str[1].padStart(2, '0')}`;
    console.log(format)
    if (now == format) {
      count+=1
      console.log(count)
    }
  });
  //l.push(doc.id)
  console.log(count)
  console.log(documents.size)
  return count;
}
async function getScrapbooks() {
  
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
        console.log(docs.id);
        docs.forEach((item) => {
                
                console.log(item.data().timestamp); 
                console.log((item.data().timestamp.seconds)*1000)  
                console.log(item.data().timestamp.nanoseconds)
                const a = ((item.data().timestamp.seconds)*1000)+(item.data().timestamp.nanoseconds )/ 1000000;;
                const date = new Date(a)
                const str = (date.toLocaleDateString()).split('/')
                const format = `${str[2]}-${str[0].padStart(2, '0')}-${str[1].padStart(2, '0')}`;
                console.log(format)
                if (now == format) {
                  count+=1
                }
              });
              
        
      }
      console.log(count);
      return count;
    }
  
  

export default function Daily_stats() {
  const [size_s, setSize_s] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    async function fetchData_s() {
      const size_s = await getScrapbooks();
      setSize_s(size_s);
    }
    fetchData_s();
  }, [db]);

  useEffect(() => {
    async function fetchData() {
      const size = await getUsers_today();
      setSize(size);
    }
    fetchData();
  }, [db]);

  
  return <div>{size}</div>;

}