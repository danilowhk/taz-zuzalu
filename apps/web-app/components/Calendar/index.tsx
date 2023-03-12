import React from "react"
import Link from "next/link"

import Loading from "../Loading"

const columns = ["Name", "Time", "Location", "Organizers", "Tags", "Additional Info"]

interface EventsProps {
    events: {
        created_at: Date
        endDate: Date
        endTime: string
        id: number
        info: string
        location: string
        name: string
        organizers: string[]
        startDate: Date
        startTime: string
        tags: string[]
    }[]
}

const Accordian = (props: any) => {

  function handleActive(event: any) {
    console.log(event.target)
  }

  return (
    <>
    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={(event) => handleActive(event)}className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 bg-green-300 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                  <span className="px-2 text-lg text-black">Week 1</span>
                  <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </h2>
              <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">

                <h1 className="text-sm px-2 mt-2">March 25-April 2, 2023</h1>
                <table className="my-10 table-auto w-full table-fixed">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className="border border-black w-[200px] px-2 text-start">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.events.map((event, index) => {
                            const {
                                name,
                                endDate,
                                endTime,
                                id,
                                info,
                                location,
                                organizers,
                                startDate,
                                startTime,
                                tags
                            } = event
                            return (
                                <tr key={index} className="h-[80px] text-sm">
                                    <td className="border border-black p-2">
                                        {name}
                                        <Link href={`/answers/${id}`}>
                                            <h1
                                                className="bg-brand-yellow rounded-md p-1 text-[10px] w-[80px] cursor-pointer"
                                                onClick={() => console.log("event details", id)}
                                            >
                                                Event info.
                                            </h1>
                                        </Link>
                                    </td>
                                    <td className="border border-black p-2">
                                        {`${startDate} ${startTime}-> ${endDate} ${endTime}`}
                                    </td>
                                    <td className="border border-black p-2">{location}</td>
                                    <td className="border border-black p-2">
                                        <div className="flex gap-2 flex-wrap">
                                            {organizers &&
                                                organizers.map((item, i) => (
                                                    <div key={i} className="uppercase">
                                                        <h1 className="bg-green-200 p-1 rounded-md text-[12px] tracking-widest">
                                                            {item}
                                                        </h1>
                                                    </div>
                                                ))}
                                        </div>
                                    </td>
                                    <td className="border border-black p-2">
                                        <div className="flex flex-wrap gap-2">
                                            {tags &&
                                                tags.map((item, i) => (
                                                    <div key={i} className="uppercase">
                                                        <h1 className="bg-green-200 p-1 rounded-md text-[12px] tracking-widest">
                                                            {item}
                                                        </h1>
                                                    </div>
                                                ))}
                                        </div>
                                    </td>
                                    <td className="border border-black p-2">{info}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
              </div>
            </div>
    </>
  )

                      }

const Calendar = (props: EventsProps) => {
    const { events } = props

    function handleActive(event) {
      console.log(event.target)
    }

    if (events.length === 0) {
        return (
            <div className="w-full my-10">
                <div>
                    <h1 className="text-lg">Zulalu Oficial Events Schedule</h1>
                </div>
                <div className="py-5 flex justify-center">
                    <div className="">
                        <Loading />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full my-10">
            <h1 className="text-lg px-2">Zulalu Oficial Events Schedule</h1>
            <div className="py-5 w-full overflox-x-auto">

            <Accordian events={events} week={"Week 1"} date={"March 25-April 2, 2023"}  />

                <div className="w-full bg-green-300 mt-5 px-2">
                    <h1 className="text-lg">Week 1</h1>
                </div>
                <div className="bg-[#ccc] w-full h-[1px] my-2" />
                <h1 className="text-sm px-2">March 25-April 2, 2023</h1>
                <table className="my-10 table-auto w-full  table-fixed">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className="border border-black w-[200px] px-2 text-start">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => {
                            const {
                                name,
                                endDate,
                                endTime,
                                id,
                                info,
                                location,
                                organizers,
                                startDate,
                                startTime,
                                tags
                            } = event
                            return (
                                <tr key={index} className="h-[80px] text-sm">
                                    <td className="border border-black p-2">
                                        {name}
                                        <Link href={`/answers/${id}`}>
                                            <h1
                                                className="bg-brand-yellow rounded-md p-1 text-[10px] w-[80px] cursor-pointer"
                                                onClick={() => console.log("event details", id)}
                                            >
                                                Event info.
                                            </h1>
                                        </Link>
                                    </td>
                                    <td className="border border-black p-2">
                                        {`${startDate} ${startTime}-> ${endDate} ${endTime}`}
                                    </td>
                                    <td className="border border-black p-2">{location}</td>
                                    <td className="border border-black p-2">
                                        <div className="flex gap-2 flex-wrap">
                                            {organizers &&
                                                organizers.map((item, i) => (
                                                    <div key={i} className="uppercase">
                                                        <h1 className="bg-green-200 p-1 rounded-md text-[12px] tracking-widest">
                                                            {item}
                                                        </h1>
                                                    </div>
                                                ))}
                                        </div>
                                    </td>
                                    <td className="border border-black p-2">
                                        <div className="flex flex-wrap gap-2">
                                            {tags &&
                                                tags.map((item, i) => (
                                                    <div key={i} className="uppercase">
                                                        <h1 className="bg-green-200 p-1 rounded-md text-[12px] tracking-widest">
                                                            {item}
                                                        </h1>
                                                    </div>
                                                ))}
                                        </div>
                                    </td>
                                    <td className="border border-black p-2">{info}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar
