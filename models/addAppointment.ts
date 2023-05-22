import { AppointmentInfo } from "./appointmentInfo";

export interface IAddAppointment{
    onSendAppointment : (appointment: any) => void;
    lastId: number
}