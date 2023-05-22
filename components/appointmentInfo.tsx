import { BiTrash } from "react-icons/bi";
import {AppointmentInfo} from "../models/appointmentInfo";



export default function AppointmentInfo(props : AppointmentInfo)
{

    return(
<li className="px-3 py-3 flex items-start">
<button type="button" onClick={ () => props.onDeleteAppointment(props.appointment.id)}
  className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
  <BiTrash /></button>
<div className="flex-grow">
  <div className="flex items-center">
    <span className="flex-none font-medium text-2xl text-blue-500">{props.appointment.petName}</span>
    <span className="flex-grow text-right">{props.appointment.aptDate}</span>
  </div>
  <div><b className="font-bold text-blue-500">Owner:</b> {props.appointment.ownerName}</div>
  <div className="leading-tight">{props.appointment.aptNotes}</div>
</div>
</li>)
}