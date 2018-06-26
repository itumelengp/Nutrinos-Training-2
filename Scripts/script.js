function ValidateForm()
{
    let txtName = document.getElementById("txtName");
    let txtPhone = document.getElementById("txtPhone");
    let txtEMail = document.getElementById("txtEmail");
    let dtFrom = document.getElementById("dtDateFrom");
    let dtTo = document.getElementById("dtDateTo");
    let check = true;
    let message ="";

    if(txtName.value.length<3)
    {
        message+="Name must be atleast 3 charecters \n";
        txtName.style.backgroundColor = "red";   
        check = false;      
    }else
    {
        txtName.style.backgroundColor = "white";          
    }
    
    if(txtPhone.value.length<10)
    {
        message+="Phone must be atleast 10 characters \n";
        txtPhone.style.backgroundColor="red";
        check = false;
    }
    else
    {
        txtPhone.style.backgroundColor = "white";  
        
    }

    if(txtEmail.value.length==0)
    {
        message+="Please enter email \n";
        txtEmail.style.backgroundColor = "red";   
        check = false;      
    }else
    {
        txtEmail.style.backgroundColor = "white";          
    }

    let dateFrom = dtFrom.value;
    let varDateFrom = new Date(dateFrom); //dd-mm-YYYY
    let today = new Date();
    today.setHours(0,0,0,0);
    
    
    if(!Date.parse(dtFrom.value))
    {
            
        message+="Please select Date From\n";
        dtFrom.style.backgroundColor = "red";
        check=false;
    }
    else if(varDateFrom < today)
    {
        message+="Date From earliest Date must be today\n";
        dtFrom.style.backgroundColor = "red";
        check = false;
    }
    else
    {
        dtFrom.style.backgroundColor = "white";  
       
    }  
    
    
    let dateTo = dtTo.value;
    let varDateTo = new Date(dateTo); //dd-mm-YYYY


    if(!Date.parse(dtTo.value))
    {            
        message+="Please select Date To\n";
        dtTo.style.backgroundColor = "red";
        check=false;
    }
    else if(varDateTo < today)
    {
        message+="Date To earliest date must be today\n";
        dtTo.style.backgroundColor = "red";
        check = false;
    }
    else if(varDateTo < varDateFrom)
    {
        message+="Date To cannot be earlier than Date From\n";
        dtTo.style.backgroundColor = "red";
        check = false;
    }
    else
    {
        dtTo.style.backgroundColor = "white";          
    }

    if (check==false)
    {
        alert(message);
    }
    
    return check;

}

function setMinDate()
{
    let dtFrom = document.getElementById("dtDateFrom");
    let dtTo = document.getElementById("dtDateTo");
    
    dtFrom.valueAsDate = new Date();
    dtTo.valueAsDate = new Date();
}

function validateNewsEmail()
{   
    
    let check = true;
    let message = "";
    
    let txtNewsEMail = document.getElementById("txtNewsEmail");
    
     if(txtNewsEMail.value.length==0)
    {        
        message = "Please enter newsletter email";
        txtNewsEMail.style.backgroundColor = "red"; 
        check=false;        
    }
    else
    {
        txtNewsEMail.style.backgroundColor = "white";    
        check=true;
    }
    if(check == false)
      {
         
          alert(message);
      }

    return check;
}