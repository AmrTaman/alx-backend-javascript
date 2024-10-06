export default function createReportObject(employeesList) {
  const bigBoss = {
    allEmployees: employeesList,
    getNumberOfDepartments(all) {
      return Object.keys(all).length;
    },
  };
  return bigBoss;
}
