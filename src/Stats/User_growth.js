import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { async, FirebaseError } from "@firebase/util";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

Chart.register(ArcElement, Tooltip, Legend);

async function getUsers_today() {
  var count_pub = 0;
  var count_pri = 0;
  const documents = await getDocs(collection(db, "users"));
  documents.forEach(async (item) => {
    console.log(item.data().accountType);
    var store = item.data().accountType;
    if (store == "Public") {
      count_pub += 1;
      console.log(count_pub);
    } else {
      count_pri += 1;
      console.log(count_pri);
    }
  });

  return [count_pub, count_pri];
}

export default function User_growth() {
  const [data, setData] = useState({ datasets: [] });
  console.log("hi");
  useEffect(() => {
    async function fetchData() {
      const [count_pub, count_pri] = await getUsers_today();
      setData({
        labels: ["public", "private"],
        datasets: [
          {
            data: [count_pub, count_pri],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
          },
        ],
      });
    }

    fetchData();
  }, []);

  const options = {};
  
  return (
    <div className="App">
      <div style={{ width: "100%", height: "10%" }}>
        <Typography>Account Type</Typography>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
