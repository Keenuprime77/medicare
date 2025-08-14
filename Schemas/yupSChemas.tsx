import * as Yup from "yup";

export const MedicineSchema = Yup.object({
    medicine_name: Yup.string().required("please enter Medicine Name"),
    quantity: Yup.string().required("please enter Quantity"),
    frequency: Yup.string().required("please enter Frequancy"),
    dosage_pattern: Yup.string().matches(/^[0-9]+(,[0-9]+)*$/, 'Only numbers and commas allowed (e.g., 2,3,4)').required("please enter Dosage Pattern"),
    times_days: Yup.string().matches(/^[A-Za-z0-9]+(:[A-Za-z0-9]+)?(,[A-Za-z0-9]+(:[A-Za-z0-9]+)?)*$/,
    'Words or time (e.g., 10:00AM,Evening) allowed with one colon and comma per item').required("please enter Time of Day"),
    number_days: Yup.string().required("please enter No. of Days"),
    startdate: Yup.string().required("please enter Start Date"),
})

export const ReminderSchema=Yup.object({
    reminder:Yup.string().required("please enter Reminder"),
    date:Yup.date().required("please enter date")
})