function myAlert()
{
  alert("hellow world")
}
function printdiv(elem) {
  var header_str = '<html><head><title>' + document.title  + '</title></head><body>';
  var footer_str = '</body></html>';
  var new_str = document.getElementById(elem).innerHTML;
  var old_str = document.body.innerHTML;
  document.body.innerHTML = header_str + new_str + footer_str;
  window.print();
  document.body.innerHTML = old_str;
  return false;
}
function makeTableHTML(myArray) {
    var result = "<table border=1>";
    var nmbr=1;
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        if(i>0 & i < myArray.length-3){
          if(myArray[i][4]=="CL" & myArray[i][11]=="Approve")
          {
            var fname = "foo"+myArray[i][0];
            var uid = myArray[i][12];
            var tdte = myArray[i][7];
            var fdte = myArray[i][5];
            var reason = myArray[i][10];
            var nreqd = myArray[i][9];
            result += "<td><form id="+fname+" name="+fname+">";  
            result += "<input type=\"hidden\" id=\"tdte\" name=\"tdte\" value="+tdte+" />";
            result += "<input type=\"hidden\" id=\"uid\" name=\"uid\" value="+uid+" />";
            result += "<input type=\"hidden\" id=\"reason\" name=\"reason\" value="+reason+" />";
            result += "<input type=\"hidden\" id=\"fdte\" name=\"fdte\" value="+fdte+" />";
            result += "<input type=\"hidden\" id=\"nreqd\" name=\"nreqd\" value="+nreqd+" />";
            result += "<input type=\"button\" onClick = \" leavePrint("+nmbr+");\" value=\"Generate Leave Form\" /> </form></td>";
            nmbr = nmbr+1;
        }
        
        result += "</tr>";
    }
    }
    result += "</table>";
    return result;
}
function makeTableHTMLNew(printData){
  var result = "<table border=1>";
  result += "<tr> <td> Name of Department</td> <td>"+printData[0][10]+"</td> </tr>";
  result += "<tr><td> Name of Applicant </td> <td>"+printData[0][9]+"</td> </tr>";
  result += "<tr><td> Designation </td> <td>Assistant Professor</td> </tr>";
  result += "<tr><td>Number of Leaves Required </td> <td>"+printData[0][13]+"</td> </tr>";
  result += "<tr><td>Date(s) of Leave </td> <td>"+printData[0][2]+ " to " +printData[0][11]+"</td> </tr>";
  result += "<tr><td>Reason for Leave</td> <td>"+printData[0][12]+"</td> </tr>";
  result += "<tr><td> Number of Casual Leaves Already Availed </td> <td>"+printData[0][6]+"</td> </tr>";
  result += "<tr><td>Date Last Casual Leave Taken</td> <td>"+printData[0][4]+"</td> </tr>";
  result += "</table>";
  return result;
}
var B2Value;
var fnmbr;
function onSuccess(B2Value){var table=makeTableHTML(B2Value); document.getElementById('output').innerHTML = table;} 
function onSuccess2(B2Value){var table=makeTableHTMLNew(B2Value); document.getElementById('myprint').innerHTML = table; document.getElementById('myprint2').innerHTML = table;} 
function formSubmit(){google.script.run.markleave(document.leave);}
function showmsg(){document.getElementById('confirmleave').innerHTML = "Leave Application Submitted.";}
function refreshtable(){google.script.run.withSuccessHandler(onSuccess).leavedisplay();}
function resetform(){document.getElementById('leave').reset();}
function alertFunction() {alert("Leave Applied. Thank You")};
google.script.run.withSuccessHandler(onSuccess).leavedisplay();


//function leavePrint(fnmbr){google.script.run.withSuccessHandler(onSuccess2).leavePrint(document.forms[fnmbr]);

function leavePrint(fnmbr){
  alert("Check your email.Thanks")
  google.script.run.getLeaveForm(document.forms[fnmbr]);

/*
document.getElementById("lprinthead").style.display='block';
document.getElementById("lprinthead2").style.display='block';
document.getElementById("finalprint").style.display='block';
document.getElementById("headremarks").style.display='block';
document.getElementById("headremarks2").style.display='block';*/
}
function handleClick()
{
    document.getElementById("testbutton").innerText="In Progress";
}
