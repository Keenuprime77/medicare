export interface Medicines {
    medicine_name: string
    quantity: string;
    frequency: string;
    dosage_pattern: string;
    times_days: string;
    number_days: string;
    startdate: string;
}

export interface Dose {
    time: string;
    dosage: string;
}

export interface ScheduleEntry {
    day: number;
    date: string;
    doses: Dose[]
}

export interface Reminder {
    reminder: string;
    date: string;
}

export interface MedicineWithSchedule extends Medicines {
    schedule: ScheduleEntry[];
}

export interface Days {
    label: number,
    className: string
}