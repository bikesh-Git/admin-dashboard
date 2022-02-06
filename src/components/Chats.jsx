import React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import {Line} from 'react-chartjs-2';
import { adminRequest } from '../requestMethod';


const Chats = () => {

  const [userStats, setUserStats] = useState([])
  const MONTHS = useMemo(()=>[
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Spt",
    "Oct",
    "Nov",
    "Dec"
  ],[])

  useEffect(() => {
    const getStats = async () => {
      try {
          const { data } = await adminRequest.get("/users/stats")
          console.log("stats", data)
          data.map(item =>
            setUserStats(prev =>[
              ...prev,
              {name:MONTHS[item._id-1] ,"ActiveUser":item.total}
            ])
          )
      }
      catch (e) {
          alert('Error', e)
      }
  }
  getStats();
  }, [MONTHS])

  console.log("userStats",userStats);

  const state = {
    labels: MONTHS,
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data:userStats.ActiveUser
      }
    ]
  }
  return  <Line 
  data={state}
  options={{
    title:{
      display:true,
      text:'Average Rainfall per month',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    },
    responsive: true,
  }}
/>
};

export default Chats;
