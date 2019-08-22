<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<h2>Welcome to Employee Portal Page</h2>
<body>
<form action="displayAll" method="post">
Click here to see all the employee records<br><br>
 <input type="submit" value="Display All Employees" name="submit">
</form>
<hr>
<form action="displayEmp">
<h2>
<!--name should match the variable name in Employee class -->
Enter EmpID <input type="text" name="eid"><br>
<input type="submit" value="DISPLAY" name="submit">
</h2>
</form>
<hr>
<form action="displayEmpByDesig">
<h2>
<!--name should match the variable name in Employee class -->
Enter Emp Designation <input type="text" name="designation"><br>
<input type="submit" value="DISPLAY" name="submit">
</h2>
<hr>
</form>
<form action="deleteEmp">
<h2>
<!--name should match the variable name in Employee class -->
Enter Employee ID<input type="text" name="eid"><br>
<input type="submit" value="DISPLAY" name="submit">
</h2>
</form>
<hr>
<form action="insertEmp" method="post">
<h2>
<!--name should match the variable name in Employee class -->
Enter Employee ID<input type="text" name="eid"><br>
Enter Employee Name<input type="text" name="name"><br>
Enter Employee Designation<input type="text" name="designation"><br>
Enter Employee Age<input type="text" name="age"><br>
<input type="submit" value="UPDATE" name="submit">
<input type="reset" value="RESET" name="submit">
</h2>
</form>
</body>
</html>