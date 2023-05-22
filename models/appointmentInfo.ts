export interface AppointmentInfo {
    appointment:{
    id: string;
    ownerName: string;
    petName: string;
    aptNotes: string;
    aptDate: string; 
    };
    onDeleteAppointment: (id: string) => void;
}