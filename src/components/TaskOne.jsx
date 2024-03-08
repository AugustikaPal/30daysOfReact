import React from 'react';
import { useEffect ,useState } from 'react';

const TaskOne = () => {
    const [currentDateTime,setCurrentDateTime] = useState (new Date());

	useEffect(()=>{
		const interval = setInterval(()=>{
			setCurrentDateTime(new Date())
		},1000);

		return()=>clearInterval(interval)
	},[]);

	const formatDate=(date)=>{
      const options ={
		day:'numeric',
		month:'long',
		year:'numeric'
	  }
	  return new Intl.DateTimeFormat('en-US', options).format(date);
	}

	const formatDay=(date)=>{
        const options={
			weekday:'long'
		}
		return new Intl.DateTimeFormat('en-US',options).format(date);
	}
	const formatTime=(date)=>{
		return date.toLocaleTimeString('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		  });
	}
	return (
		<>
			<div id='day'>{formatDay(currentDateTime)}</div>
			<div id='date'>{formatDate(currentDateTime)}</div>
			<div id='time'>{formatTime(currentDateTime)}</div>
		</>
	);
}

export default TaskOne
