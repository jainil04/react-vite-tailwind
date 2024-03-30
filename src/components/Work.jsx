import React from 'react'
import WorkItem from './WorkItem';

const data = [
  {
    year: 2023,
    title: "NTT Data",
    duration: "1 year and 4 Months",
    details: "Sr. Software Engineer 1"
  },
  {
    year: 2022,
    title: "Nexient",
    duration: "6 Months",
    details: "Sr. Software Engineer 1"
  },
  {
    year: 2018,
    title: "Info Way Solutions",
    duration: "4 year",
    details: "Software Engineer Front End"
  },
  {
    year: 2017,
    title: "Staffmark",
    duration: "1 year",
    details: "Internal Server Tester"
  },
];

const Work = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="work">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
