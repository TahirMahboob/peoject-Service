import React from 'react';
import { Table } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';

const columns = [
  {
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Hire Date',
    dataIndex: 'hireDate',
    key: 'hireDate',
  },
  {
    title: 'Report To',
    dataIndex: 'reportTo',
    key: 'reportTo',
  },
  {
    title: 'Employee ID',
    dataIndex: 'employeeId',
    key: 'employeeId',
  },
];

const data = [];
for (let i = 1; i <= 90; i++) {
  data.push({
    key: i,
    employee: `Employee ${i}`,
    designation: `Designation ${i}`,
    city: `City ${i}`,
    hireDate: `2024-06-${i < 10 ? '0' + i : i}`,
    reportTo: `Manager ${i}`,
    employeeId: `EMP-${i}`,
  });
}

const Employees = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl">Employees</h3>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ pageSize: 10, total: data.length, showSizeChanger: false, defaultCurrent: 1 }} 
      />
    </div>
  );
};

export default Employees;
