export default function createIteratorObject(report) {
  const allEmp = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmp.push(...department);
  }
  return allEmp;
}
