import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Firestore from "firestore";
import { updateDoc, deleteField } from "firebase/firestore";
import Test from "./Test";
import Header from "./Headers";
import { arrayRemove } from "firebase/firestore";

// Function that removes repeated items from an array
function sort(a) {
  const t = a.filter((item, index) => a.indexOf(item) === index);
  a.length = 0;
  console.log(t);
  return t;
}
var test = "";
async function Comments() { 
  var l = [];
  var g = [];
  var c = [];
  var store = [];
  c.length = 0;
  const documents = await getDocs(collection(db, "users")); // loops through and gets the list of users

  documents.forEach((doc) => {
    // loops through and gets each id
    //console.log(doc.id)
    l.push(doc.id); // stored the id in the array
  });
  l = sort(l); // removes duplicates id from the list
  console.log(l);
  for (let i = 0; i < l.length; i++) {
    const docs = await getDocs(collection(db, "users", l[i], "Scrapbooks"));

    docs.forEach((item) => {
      g.push(item);
      console.log(item);
      g = sort(g);
      console.log(g);
    });

    console.log(g);
  }
  console.log(g.length);
  for (let j = 0; j < g.length; j++) {
    //   console.log((g[j].data().comments).length)
    //   g[2].data().comment.map((douments) => <Box>
    //     console.log(documents)
    //     c.push(documents)
    //   </Box> );}

    g[j].data().comments.forEach((item) => {
      console.log(item.comment, item.uid, item.docId);
      store.push([item.comment, item.uid, item.docId, g[j]]);
    });
    console.log(store);
  }
  console.log(store);
  return store;
}
function delete_C(a,ScrapId,docId){

  ScrapId.data().comments.forEach((item) => {
    console.log(item)
    console.log(a)
    console.log(a,ScrapId,docId)
    if(item.comment === docId){
      console.log(a[0])
      updateDoc(ScrapId.ref, {comments: arrayRemove(item)});
      console.log(a[0])
      console.log("true")
    }
   
  })

  return "done"

}

// function delete_C(a, b, c) {
//   const comments = c.data().comments;
//   const index = comments.findIndex((item) => item.docId === b);
//   if (index >= 0) {
//     comments.splice(index, 1);
//     updateDoc(c.ref, { comments })
//       .then(() => {
//         console.log("Comment deleted successfully.");
//       })
//       .catch((error) => {
//         console.error("Error deleting comment:", error);
//       });
//   }
// }

export default function Stats() {
  const [size, setSize] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const size = await Comments();
      setSize(size);
    }
    fetchData();
  }, []);

  return (
    <Box>
      <Box style={{ marginTop: "-425px" }}>
        <Box style={{ marginTop: "150px" }}>
          <Box marginLeft="100px">
            {/* HEADER */}
            <Box
              style={{
                margin: "0px 0px 0px, auto",
                marginRight: "1000px",
                width: "200px",
              }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header title="Novella" subtitle="Admin Panel Moderation" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ marginLeft: "20%" }}>
        <div
          className="users"
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {size.map((user) => (
            console.log(user[0]),
            console.log(user[1]),
            console.log(user[2]),
            console.log(user[3]),
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                paddingLeft: "20px",
                paddingRight: "20px",
                alignItems: "center",
                textAlign: "center",
                // height: 55,
                width: "50%",
                border: "2px solid white",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
            >
              <div sx={{ alignSelf: "center" }} className="user">
                
                <IconButton onClick={() => delete_C(user,user[3],user[0])}
                sx={{color:"#C3B1E1"}}>
                
                  <DeleteIcon />
                </IconButton>
                {user[0]}
              </div>
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
}
