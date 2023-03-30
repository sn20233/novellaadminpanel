import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

Chart.register(ArcElement, Tooltip, Legend);

async function getUsers_today() {
  var count_pub = 0;
  var count_pri = 0;
  var today = new Date();
  var tenDaysAgo = new Date();
  let i = 0;
  var l = [];
  var g = [];
  var l1 = 0;
  var l2 = 0;
  var l3 = 0;
  var l4 = 0;
  var l5 = 0;
  var l6 = 0;
  var l7 = 0;
  var l8 = 0;
  var l9 = 0;
  var l10 = 0;
  while (i < 10) {
    tenDaysAgo.setDate(today.getDate() - i);
    console.log(tenDaysAgo.toJSON().slice(0, 10));
    l.push(tenDaysAgo.toJSON().slice(0, 10));
    i++;
  }
  const documents = await getDocs(collection(db, "users"));
  documents.forEach(async (item) => {
    // console.log(item.data().timestamp);
    // var store = item.data().timestamp;
    const a =
      item.data().timestamp.seconds * 1000 +
      item.data().timestamp.nanoseconds / 1000000;
    const date = new Date(a);
    const str = date.toLocaleDateString().split("/");
    const format = `${str[2]}-${str[0].padStart(2, "0")}-${str[1].padStart(
      2,
      "0"
    )}`;
    if (l[0] === format) {
      l1 += 1;
    } else if (l[1] === format) {
      l2 += 1;
    } else if (l[2] === format) {
      l3 += 1;
    } else if (l[3] === format) {
      l4 += 1;
    } else if (l[4] === format) {
      l5 += 1;
    } else if (l[5] === format) {
      l6 += 1;
    } else if (l[6] === format) {
      l7 += 1;
    } else if (l[7] === format) {
      l8 += 1;
    } else if (l[8] === format) {
      l9 += 1;
    } else if (l[9] === format) {
      l10 += 1;
    }
    g = [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10];
    console.log(l);
    console.log(g)
  });

  return [l, g];
}

export default function Charts() {
  const [data, setData] = useState({ datasets: [] });
  console.log("hi");
  useEffect(() => {
    async function fetchData() {
      const [dates, users] = await getUsers_today();
      setData({
        labels: dates,
        datasets: [
          {
  //           
  // datasets: [{
  //   label: 'My First Dataset',
  //   data: [65, 59, 80, 81, 56, 55, 40],
  //   fill: false,
  //   borderColor: 'rgb(75, 192, 192)',
  //   tension: 0.1
            label: ["user_growth"],
            data: users,
            fill: false,
            borderColor: 'rgb(195, 177, 225)',
            tension: 0.1,
            
          },
        ],
      });
    }

    fetchData();
  }, []);

  const options = {scales: {
    x: {
      reverse: true // add the reverse option to the x-axis configuration
    }
  }
};
  console.log("hi");
  return (
    <div className="App">
      <div style={{ width: "130%", height: "120%" }}>
        <Line data={data} options={options}  />
      </div>
    </div>
  );
}
