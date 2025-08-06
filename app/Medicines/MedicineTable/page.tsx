import React from 'react'

const MedicineTablePage = () => {
  return (
    <div>
       <div className="box box-2">
    <h2>Your Medicine Schedule</h2>
    <div className="table-container">
      <table className="table-ocean">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Dose</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acitrom</td>
            <td>2mg</td>
            <td>Evening</td>
            <td>17-8-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default MedicineTablePage