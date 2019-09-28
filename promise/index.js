fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(res=>{
    return res.json();
})
.then(data=>{
    console.log(data);
    return data;
})
.then(insertDataTable);
function insertDataTable (data){
    let table =document.getElementById(table-employees)
    console.log(data);
    let body = ``
    data.forEach(employeeInfo => {
        let id = employeeInfo.id;
        let name = employeeInfo.employee_name;
        let salary = employeeInfo.employee_salary;
        let age = employeeInfo.employee_age;
        body += `<tr>
           <td> ${id}</td>
           <td> ${name}</td>
           <td> ${salary}</td>
           <td> ${age}</td>
        </tr>` ;
    });
tableBody.innerHTML = body;
}
