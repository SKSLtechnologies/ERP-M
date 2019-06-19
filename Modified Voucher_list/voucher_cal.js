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
$("#datesingle").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#Cheque_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#Bill_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#PO_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#MRN_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});
$("#M_Bill_date").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
 });

$("#Challan_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#Me_Challan_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});

$("#Me_Bill_date").daterangepicker({
singleDatePicker: true,
showDropdowns: true
});


});



var counter1 = 0
var counter2 = 0
var counter3 = 0


function Display() {

    //display accounts voucher
    if (document.getElementById('AccVoucher').checked) {

        document.getElementById('if_MV').style.display = 'none';
        document.getElementById('if_MeV').style.display='none';

        document.getElementById('if_AV').style.display = 'block';

        if(counter2 > 0)
                {
                       
                        $("#M_display_table td").parent().remove();
                        document.getElementById('Mat_table').style.display = 'none';
                        counter2 = 0;
                        document.getElementById('M_srl_no').innerHTML = parseInt(1);
                        document.getElementById("M_SubmitBtn").disabled = true;

                        
                }

        if(counter3 > 0)
        {
                
                $("#Me_display_table td").parent().remove();
                document.getElementById('Mec_table').style.display = 'none';
                counter3 = 0;
                document.getElementById('Me_srl_no').innerHTML = parseInt(1);
                document.getElementById("Me_SubmitBtn").disabled = true;
                
        }
               
    }

    //display material voucher

           if (document.getElementById('MatVoucher').checked) {

                document.getElementById('if_AV').style.display = 'none';
                document.getElementById('if_MeV').style.display='none';


                document.getElementById('if_MV').style.display = 'block';


                if(counter1 > 0)
                {
                        
                        $("#A_display_table td").parent().remove();
                        document.getElementById('Acc_table').style.display = 'none';
                        counter1 = 0;
                        document.getElementById('A_srl_no').innerHTML = parseInt(1);
                        document.getElementById("A_SubmitBtn").disabled = true;
                        
                } 

                if(counter3 > 0)
                {
                
                $("#Me_display_table td").parent().remove();
                document.getElementById('Mec_table').style.display = 'none';
                counter3 = 0;
                document.getElementById('Me_srl_no').innerHTML = parseInt(1);
                document.getElementById("Me_SubmitBtn").disabled = true;
                
                 }



            }

    //display mechanical voucher

        if (document.getElementById('MecVoucher').checked) {

                        document.getElementById('if_AV').style.display = 'none';
                        document.getElementById('if_MV').style.display = 'none';

                        document.getElementById('if_MeV').style.display='block';

                        if(counter1 > 0)
                      {
                        
                            $("#A_display_table td").parent().remove();
                            document.getElementById('Acc_table').style.display = 'none';
                            counter1 = 0;
                            document.getElementById('A_srl_no').innerHTML = parseInt(1);
                            document.getElementById("A_SubmitBtn").disabled = true;
                            
                     } 

                     if(counter2 > 0)
                    {
                       
                            $("#M_display_table td").parent().remove();
                            document.getElementById('Mat_table').style.display = 'none';
                            counter2 = 0;
                            document.getElementById('M_srl_no').innerHTML = parseInt(1);
                            document.getElementById("M_SubmitBtn").disabled = true;
                        
                    }
                               
            }

}
//Accounts Add Voucher button
  $('#A_AddVoucherBtn').click(function () {

        //check for non empty value
        var acode = document.getElementById('Account_code').value;  
        var pcode = document.getElementById('Party_code').value;  
        var nar = document.getElementById('A_Narration').value;  
        var cno = document.getElementById('Cheque_no').value;  
        var bno = document.getElementById('A_Bill_no').value;  
        var amt = document.getElementById('Amount').value;  

        if (!acode && !pcode && !nar && !cno && !bno && !amt)  
        {  
                alert("Empty form cannot be added");  
        }  
        else   
        {  
        
                document.getElementById('Acc_table').style.display = 'block';

                //srl no
                $('#A_srl_no').html(function(i, val) { return val*1+1 });
                        //amount : debit or credit
                        if (document.getElementById('Debitf').checked) {
                                document.getElementById("Debitf").value = $('#Amount').val();
                                document.getElementById("Creditf").value = 0

                        }
                        if (document.getElementById('Creditf').checked) {
                                document.getElementById("Creditf").value = $('#Amount').val();

                                document.getElementById("Debitf").value = 0

                        }

                        //adding multiple rows into the accounts table
                        var A_table = document.getElementById("A_display_table");
                        //incrementing counter
                        counter1 = counter1 + 1;

                        var A_rowCount = A_table.rows.length;
                        var A_row = A_table.insertRow(A_rowCount);
                        

                        var A_cell1 = A_row.insertCell(0);
                        A_cell1.innerHTML = counter1;

                        var A_cell2 = A_row.insertCell(1);
                        A_cell2.innerHTML =  $('#Account_code').val();


                        var A_cell3 = A_row.insertCell(2);
                        A_cell3.innerHTML =  $('#Party_code').val();

                        var A_cell4 = A_row.insertCell(3);
                        A_cell4.innerHTML =  $('#A_Narration').val();


                        var A_cell5 = A_row.insertCell(4);
                        A_cell5.innerHTML =  $('#Cheque_no').val();
                        

                        var A_cell6 = A_row.insertCell(5);
                        A_cell6.innerHTML =  $('#Cheque_date').val();
                        

                        var A_cell7 = A_row.insertCell(6);
                        A_cell7.innerHTML =  $('#A_Bill_no').val();

                        var A_cell8 = A_row.insertCell(7);
                        A_cell8.innerHTML =  $('#Bill_date').val();
                

                        var A_cell9 = A_row.insertCell(8);
                        A_cell9.innerHTML =  $('#GST_no').val();

                        var A_cell10 = A_row.insertCell(9);
                        A_cell10.innerHTML =  $('#Debitf').val();
                

                        var A_cell11 = A_row.insertCell(10);
                        A_cell11.innerHTML = $('#Creditf').val();

                        
                
                        //enable Submit button

                        document.getElementById("A_SubmitBtn").disabled = false;

                        //form reset after adding voucher

                        $('#AccVoucherForm').clearForm();
                         
                        // document.getElementById("AccVoucherForm").reset();
                

                        //sorting the table after the second entry
                        if(counter1>1)
                        {
                                sortTable1();
                        }
                
        }

});

//sorting  accounts table

function sortTable1() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("A_display_table");
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

$('#A_SubmitBtn').click(function () {

        alert("Accounts Voucher Submitted!");
        window.location.replace("mod_Scroll_voucher.html");

});




//Material Add Voucher button
$('#M_AddVoucherBtn').click(function () {


          //check for non empty value
          var icode = document.getElementById('Item_code').value;  
        var m_nar = document.getElementById('M_Narration').value;  
        var ucode = document.getElementById('Unit_code').value;  
        var qty = document.getElementById('Quantity').value;  
        var challan = document.getElementById('Chal_rate').value;  
        var lval = document.getElementById('Land_val').value;  
        var tax = document.getElementById('Taxes').value;  

        if (!icode && !m_nar && !ucode && !qty && !challan && !lval && !tax)  
        {  
                alert("Empty form cannot be added");  
        }  
        else   
        {  

                document.getElementById('Mat_table').style.display = 'block';
                
                //srl no

                $('#M_srl_no').html(function(i, val) { return val*1+1 });
                $('#Total').html(function() { return document.getElementById("Total").value });


                //adding multiple rows into the table
                var M_table = document.getElementById("M_display_table");

                //incrementing counter
                counter2 = counter2 + 1;

                var M_rowCount = M_table.rows.length;
                var M_row = M_table.insertRow(M_rowCount);


                var M_cell1 = M_row.insertCell(0);   
                M_cell1.innerHTML = counter2;
            

                var M_cell2 = M_row.insertCell(1);
                M_cell2.innerHTML =  $('#Item_code').val();

                var M_cell3 = M_row.insertCell(2);
                M_cell3.innerHTML =  $('#M_Narration').val();

                var M_cell4 = M_row.insertCell(3);
                M_cell4.innerHTML =  $('#Unit_code').val();

                var M_cell5 = M_row.insertCell(4);
                M_cell5.innerHTML =  $('#Quantity').val();
        

                var M_cell6 = M_row.insertCell(5);
                M_cell6.innerHTML =  $('#Chal_rate').val();
        

                var M_cell7 = M_row.insertCell(6);
                M_cell7.innerHTML =  $('#Land_val').val();

                var M_cell8 = M_row.insertCell(7);
                M_cell8.innerHTML =  $('#Taxes').val();
        
                var M_cell9 = M_row.insertCell(8);
                M_cell9.innerHTML =  $('#GST_amt').val();

                var M_cell10 = M_row.insertCell(9);
                M_cell10.innerHTML =  $('#IGST_amt').val();

                var M_cell11 = M_row.insertCell(10);
                M_cell11.innerHTML =  $('#Total').val();

                  //enable Submit button

                  document.getElementById("M_SubmitBtn").disabled = false;

                //form reset after adding voucher

                $("#MatVoucherForm").clearForm();

                if(counter2>1)
                {
                        sortTable2();
                }

        }

});

//sorting material table

function sortTable2() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("M_display_table");
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


//material final submit button

$('#M_SubmitBtn').click(function () {

alert("Material Voucher Submitted!");
window.location.replace("mod_Scroll_voucher.html");

});


//mechanical final submit button

$('#Me_SubmitBtn').click(function () {

alert("Mechanical Voucher Submitted!");
window.location.replace("mod_Scroll_voucher.html");

});


//mechanical Add Voucher button

$('#Me_AddVoucherBtn').click(function () {

          //check for non empty value
         var icode = document.getElementById('Me_Item_code').value;  
        var m_nar = document.getElementById('Me_Narration').value;  
        var ucode = document.getElementById('Me_Unit_code').value;  
        var qty = document.getElementById('Me_Quantity').value;  
        var challan = document.getElementById('Me_Chal_rate').value;  
        var lval = document.getElementById('Me_Land_val').value;  
        var tax = document.getElementById('Me_Taxes').value;  

        if (!icode && !m_nar && !ucode && !qty && !challan && !lval && !tax)  
        {  
                alert("Empty form cannot be added");  
        }  
        else   
        {  
       
                document.getElementById('Mec_table').style.display='block';

                //srl no

                $('#Me_srl_no').html(function(i, val) { return val*1+1 });
                $('#Me_Total').html(function() { return document.getElementById("Me_Total").value });


                //adding multiple rows into the table
                var Me_table = document.getElementById("Me_display_table");

                        //incrementing counter
                        counter3 = counter3 + 1;

                var Me_rowCount = Me_table.rows.length;
                var Me_row = Me_table.insertRow(Me_rowCount);


                var Me_cell1 = Me_row.insertCell(0);
                Me_cell1.innerHTML = counter3;


                var Me_cell2 = Me_row.insertCell(1);
                Me_cell2.innerHTML =  $('#Me_Item_code').val();
                

                var Me_cell3 = Me_row.insertCell(2);
                Me_cell3.innerHTML =  $('#Me_Narration').val();


                var Me_cell4 = Me_row.insertCell(3);
                Me_cell4.innerHTML =  $('#Me_Unit_code').val();

                var Me_cell5 = Me_row.insertCell(4);
                Me_cell5.innerHTML =  $('#Me_Quantity').val();


                var Me_cell6 = Me_row.insertCell(5);
                Me_cell6.innerHTML =  $('#Me_Chal_rate').val();


                var Me_cell7 = Me_row.insertCell(6);
                Me_cell7.innerHTML =  $('#Me_Land_val').val();

                var Me_cell8 = Me_row.insertCell(7);
                Me_cell8.innerHTML =  $('#Me_Taxes').val();

                var Me_cell9 = Me_row.insertCell(8);
                Me_cell9.innerHTML =  $('#Me_GST_amt').val();

                var Me_cell10 = Me_row.insertCell(9);
                Me_cell10.innerHTML =  $('#Me_IGST_amt').val();

                var Me_cell11 = Me_row.insertCell(10);
                Me_cell11.innerHTML =  $('#Me_Total').val();
                        
                  //enable Submit button

                  document.getElementById("Me_SubmitBtn").disabled = false;


                //form reset after adding voucher

                $("#MecVoucherForm").clearForm();


                if(counter3>1)
                {
                        sortTable3();
                }


        }
       
});


//sorting mechanical table

function sortTable3() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("Me_display_table");
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








//material land value calculation
function multiply() {
        document.getElementById("Land_val").value = $('#Quantity').val() * $('#Chal_rate').val();
           
        }


//material tax modal
function mat_modal(){

        $('#M_Tax_modal').modal('show');
}



//material tax modal
$('#M_Tax_Modal_submit').click(function () {
       
        document.getElementById("Taxes").value = $('#Other_amt').val();
        // document.getElementById("Land_val").value = $('#Quantity').val() * $('#Chal_rate').val();
       var sum = parseFloat($('#Other_amt').val() ) 
       sum = sum + parseFloat($('#Land_val').val() ) 
       document.getElementById("Total").value =  sum
       $('#M_Tax_modal').modal('hide')
       

 });

//mechanical land value calculation
function mul() {
        document.getElementById("Me_Land_val").value = $('#Me_Quantity').val() * $('#Me_Chal_rate').val();
           
        }


//material tax modal
function mec_modal(){

        $('#Me_Tax_modal').modal('show');
}

 //mechanical tax modal
 $('#Me_Tax_Modal_submit').click(function () {
       
        document.getElementById("Me_Taxes").value = $('#Me_Other_amt').val();
        // document.getElementById("Me_Land_val").value = $('#Me_Quantity').val() * $('#Me_Chal_rate').val();
       var sum = parseFloat($('#Me_Other_amt').val() ) 
       sum = sum + parseFloat($('#Me_Land_val').val() ) 
       document.getElementById("Me_Total").value =  sum
       $('#Me_Tax_modal').modal('hide')
       

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
      
      setInputFilter(document.getElementById("Amount"), function(value) {
        return /^-?\d*[.,]?\d*$/.test(value); });
      
      
      setInputFilter(document.getElementById("MRN_no"), function(value) {
        return /^\d*$/.test(value); });
      
      setInputFilter(document.getElementById("Bill_srl_no"), function(value) {
          return /^\d*$/.test(value); });

                //material voucher

      setInputFilter(document.getElementById("Quantity"), function(value) {
        return /^-?\d*[.,]?\d*$/.test(value); });

        
        setInputFilter(document.getElementById("Chal_rate"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });

      
        setInputFilter(document.getElementById("Other_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });


        setInputFilter(document.getElementById("Trans_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });

        setInputFilter(document.getElementById("GST_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });

        setInputFilter(document.getElementById("IGST_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });
                
                
      
       

        //mechanical voucher


        setInputFilter(document.getElementById("Me_Quantity"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });

        setInputFilter(document.getElementById("Me_Chal_rate"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });


        setInputFilter(document.getElementById("Me_Other_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });


        setInputFilter(document.getElementById("Me_Trans_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });



        setInputFilter(document.getElementById("Me_GST_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });

        setInputFilter(document.getElementById("Me_IGST_amt"), function(value) {
                return /^-?\d*[.,]?\d*$/.test(value); });
                
    
       