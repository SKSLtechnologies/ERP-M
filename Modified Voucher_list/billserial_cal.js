
$(function() {
    // Select2
$(".select2").each(function() {
    $(this)
            .wrap("<div class=\"position-relative\"></div>")
            .select2({
                    // placeholder: "Select value",
                    dropdownParent: $(this).parent()
});
})

//calendar
$("#Bill_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#Receipt_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true,
minDate:moment()
});

$("#Purchase_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

});



function DisplayForm() {

//display accounts voucher
        if (document.getElementById('BillSerial').checked) {
                  document.getElementById('if_BillSerial').style.display = 'block';
                }



}

var counter = 0;
    //one key
    function sum() {
        document.getElementById("Bill_srl_no").value = $('#Location_code').val()+'/'+$('#Project_code').val()+'/'+$('#Fin_year').val()+'/'+$('#Last_srl_no').val()
           
        }

        

  $('#AddVoucherBtn').click(function () {

                 //check for non empty value
        var acode = document.getElementById('Account_code').value;  
        var bno = document.getElementById('Bill_no').value;  
        var nar = document.getElementById('Narration').value;  
        var bamt = document.getElementById('Bill_amount').value;  
        var bsrl = document.getElementById('Bill_srl_no').value;  
       
        if (!acode && !bno && !nar && !bamt && !bsrl)  
        {  
                alert("Empty form cannot be added");  
        }  
        else   
        {  
       
                document.getElementById('Bill_table').style.display = 'block';

                //srl no

                // $('#srl_no').html(function(i, val) { return val*1+1 });

                //adding multiple rows into the accounts table
                        var table = document.getElementById("Bill_display_table");

                        counter=counter+1;

                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);


                        var cell1 = row.insertCell(0);
                        cell1.innerHTML = $('#Last_srl_no').val();
                        

                        var cell2 = row.insertCell(1);
                        cell2.innerHTML =  $('#Account_code').val();
                        

                        var cell3 = row.insertCell(2);
                        cell3.innerHTML =  $('#Bill_no').val();


                        var cell4 = row.insertCell(3);
                        cell4.innerHTML =  $('#Bill_date').val();
                

                        var cell5 = row.insertCell(4);
                        cell5.innerHTML =  $('#Narration').val();
                

                        var cell6 = row.insertCell(5);
                        cell6.innerHTML =  $('#Bill_amount').val();
                

                        var cell7 = row.insertCell(6);
                        cell7.innerHTML =  $('#Bill_srl_no').val();

                        var cell8 = row.insertCell(7);
                        cell8.innerHTML =  $('#Receipt_date').val();


                          //enable Submit button

                          document.getElementById("Bill_SubmitBtn").disabled = false;

                             //form reset after adding voucher

                              $("#BillSerialForm").clearForm();

                        //sorting the table after the second entry
                        if(counter>1)
                        {
                                sortTable();
                        }
                     
        }
                
});

//sorting table

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("Bill_display_table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

     
//accounts final submit button

$('#Bill_SubmitBtn').click(function () {

alert("Bill Voucher Submitted!");
window.location.replace("Bill_serial_insert.html");

});


//validation for number

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}


// Install input filters.

setInputFilter(document.getElementById("Last_srl_no"), function(value) {
  return /^\d*$/.test(value); });


setInputFilter(document.getElementById("Bill_amount"), function(value) {
  return /^\d*$/.test(value); });

  setInputFilter(document.getElementById("Purchase_amount"), function(value) {
    return /^\d*$/.test(value); });