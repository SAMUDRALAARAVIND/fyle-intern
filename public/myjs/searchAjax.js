














var app = angular.module("app", []);
app.controller("ctrl", function($scope){
    $scope.serverResponse = [];
    $scope.serverTable = [];
    $scope.func = function(){
      clearAll();
      var searchItem = document.getElementById('search').value;
      var limit = document.getElementById("limit").innerHTML;
      var state = document.getElementById("stateSelect").value;
      var xhttp  = new XMLHttpRequest();
      xhttp.open("POST","/",true);
      xhttp.onload = function(){
        // console.log(`Response is ${this.response} type is: ${typeof(this.response)}`);
        console.log(JSON.parse(this.response)[0]);
        var result = JSON.parse(this.response);
        for(var i=0;i<result.length;i++){
          $scope.serverResponse.push(result[i]);
        }
       }
      xhttp.onerror = function(){ console.log(`Error occured`); }
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(`searchItem=${searchItem}&limit=${limit}&state=${state}`);
    }
});

function func(value){
  document.getElementById("rootTable").innerHTML = "";
  var bhanu = document.getElementById('rootTable');
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var th1 = document.createElement('th');
  th1.scope = "col";
  th1.innerHTML = "id";
  var th2 = document.createElement('th');
  th2.scope = "col";
  th2.innerHTML = "ifsc"
  var th3 = document.createElement('th');
  th3.scope = "col";
  th3.innerHTML = "bank_id";
  var th4 = document.createElement('th');
  th4.scope = "col";
  th4.innerHTML = "bank_name";
  var th5 = document.createElement('th');
  th5.scope = "col";
  th5.innerHTML = "branch";
  var th6 = document.createElement('th');
  th6.scope = "col";
  th6.innerHTML = "address";
  var th7 = document.createElement('th');
  th7.scope = "col";
  th7.innerHTML = "city";
  var th8 = document.createElement('th');
  th8.scope = "col";
  th8.innerHTML = "district";
  var th9 = document.createElement('th');
  th9.scope = "col";
  th9.innerHTML = "state";
  tr.appendChild(th1);tr.appendChild(th2);tr.appendChild(th3);tr.appendChild(th4);
  tr.appendChild(th5);tr.appendChild(th6);tr.appendChild(th7);tr.appendChild(th8);
  tr.appendChild(th9);
  thead.appendChild(tr)
  bhanu.appendChild(thead);
  document.getElementById('search').value = value;
  var arr  =  document.getElementsByName('liSearchResult');
  for(var i=0;i<arr.length;i++){
    arr[i].innerHTML = "";
  }
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST","/bank/table", true);
  xhttp.onload = function(){
    var serverTable = JSON.parse(this.response);
    console.log(serverTable);
    var rootTree = document.getElementById('rootTable');
    var tbody = document.createElement('tbody');
  for(var i=0;i<serverTable.length;i++){
    var tr = document.createElement('tr');
    var tr1 = document.createElement('th');
    tr1.style.color =  "aqua";
    tr1.scope = "row";
    tr1.innerHTML = serverTable[i].id;
    var tr2 = document.createElement('td');
    tr2.style.color = "red";
    tr2.innerHTML = serverTable[i].ifsc;
    var tr3 = document.createElement('td');
    tr3.style.color = "blue";
    tr3.innerHTML = serverTable[i].bank_id;
    var tr4 = document.createElement('td');
    tr4.style.color = "cyan";
    tr4.innerHTML = serverTable[i].bank_name;
    var tr5 = document.createElement('td');
    tr5.style.color = "orange";
    tr5.innerHTML = serverTable[i].branch;
    var tr6 = document.createElement('td');
    tr6.style.color = "tomato";
    tr6.innerHTML = serverTable[i].address;
    var tr7 = document.createElement('td');
    tr7.style.color = "green";
    tr7.innerHTML = serverTable[i].city;
    var tr8 = document.createElement('td');
    tr8.innerHTML = serverTable[i].district;
    var tr9 = document.createElement('td');
    tr9.style.color = "chocolate";
    tr9.innerHTML = serverTable[i].state;

    tr.appendChild(tr1);tr.appendChild(tr2);tr.appendChild(tr3);tr.appendChild(tr4);
    tr.appendChild(tr5);tr.appendChild(tr6);tr.appendChild(tr7);tr.appendChild(tr8);
    tr.appendChild(tr9);
    tbody.appendChild(tr);
  }
  rootTree.appendChild(tbody);

  }
  xhttp.onerror = function(){
    console.log("There's an error");
  }
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var limit = document.getElementById('limit').innerHTML;
  var state = document.getElementById('stateSelect').value;
  xhttp.send(`limit=${limit}&state=${state}&searchItem=${value}`);
}


function clearAll(){
  var arr = document.getElementsByName('liSearchResult');
  for(var i=0;i<arr.length;i++){
    arr[i].innerHTML = "";
  }
}
