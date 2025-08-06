export interface Medicines {
    medicine_name:string
    quantity:string;
    frequency:string;
    dosage_pattern:string;
    times_days:string;
    number_days:string;
    startdate:string;
}

export interface Dose{
    time:string;
    dosage:string;
}

export interface ScheduleEntry{
    day:number;
    date:string;
    doses:Dose[]
}