    function trimstring(str) {
        if (str.trim)
            return str.trim()
        else
            return str.replace(/(^\s*)|(\s*$)/g, "") //find and remove spaces from left and right hand side of string
    }
    
    

    function clean()
    {
    var cleanconfirm = confirm("Are you sure you want to clean the data?");
    if(cleanconfirm)
    {
    $.post("clean.php", {clean:"1" },function(data) {alert("Clean: " + data);});
    }
    }

    function cleanskrill()
    {
    var cleanconfirm = confirm("Are you sure you want to clean the data?");
    if(cleanconfirm)
    {
    $.post("cleans.php", {clean:"1" },function(data) {alert("Clean: " + data);});
    }
    }

    function cleanpaypal()
    {
    var cleanconfirm = confirm("Are you sure you want to clean the data?");
    if(cleanconfirm)
    {
    $.post("cleanp.php", {clean:"1" },function(data) {alert("Clean: " + data);});
    }
    }

    function validate_fields() {


        var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var amountreg = /^[-+]?\d{1,5}(\.\d{1,2})?$/;
        var email = trimstring(document.getElementById("email").value);
        var amount = trimstring(document.getElementById("amount").value);
        var semail = trimstring(document.getElementById("semail").value);

        if (email == "" && semail == "") {
            alert("Please Fill In Your Address");
            document.getElementById("email").focus();
            return false;
        }
        if(email != ""){
        if (emailreg.test(email) == false) {
                alert("Please Fill In A Valid Paypal Address");
                document.getElementById("email").focus();
                return false;
            }
        } //end of else
        if(semail != ""){
        if (emailreg.test(semail) == false) {
                alert("Please Fill In A Valid Skrill Address");
                document.getElementById("semail").focus();
                return false;
            }
        }
        if (amount == "") {
            alert("Please Fill In Your Amount Due");
            document.getElementById("amount").focus();
            return false;
        }
        else {
            if (amountreg.test(amount) == false) {
                alert("Please Fill In A Valid Amount Due");
                document.getElementById("amount").focus();
                return false;
            }
        } //end of else
    }