class employee {
  login() {
    console.log("Employee has been login.");
  }
  logout() {
    console.log("Employee has been logout.");
  }

  requestedLeaves(left) {
    console.log(`${left} employee has left from this company.`);
  }
}

class programmer extends employee {
  java(num) {
    console.log(`Company hierd ${num} java programmer.`);
  }
  requestedLeaves(left) {
    super.requestedLeaves(5);
    console.log("One extra employee.");
  }
}

var emp = new employee();
emp.login();
emp.requestedLeaves(10);

var emp = new programmer();
emp.login();
emp.requestedLeaves(10);
