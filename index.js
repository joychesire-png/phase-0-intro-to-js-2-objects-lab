// Write your solution in this file!
const employee = {
  name: "Sam",
  street: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
// 4. Mutates the original employee object by deleting the specified key, returns the mutated object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
