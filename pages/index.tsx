import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BiCalendar} from 'react-icons/bi';
import Search from '@/components/search';
import Appointment from '@/components/addApointment';
import AppointmentInfo from '@/components/appointmentInfo';
import {useState, useEffect, useCallback} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() <
      b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() =>
  {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {setAppointmentList(data)})
  }, [])

  useEffect(() =>
  {
    fetchData()
  },[fetchData])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='App container mx-auto mt-3'>
      <h1 className='text-5xl'><BiCalendar className='inline-block text-red-400'/> Your Appointments</h1>
      <Search query={query} 
      onQueryChange={myQuery => setQuery(myQuery)} 
      orderBy={orderBy} 
      onOrderByChange={mySort => setOrderBy(mySort)}
      sortBy={sortBy}
      onSortByChange={mySort => setSortBy(mySort)}
      />
      <Appointment 
      onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
      lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
         />
      <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(appointment => (
            <AppointmentInfo key={appointment.id} 
            appointment={appointment} 
            onDeleteAppointment={
              appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))
            } />
          ))
        }
      </ul>
      </div>
    </main>    
  )
}
