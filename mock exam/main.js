var account= 
{   
   clientname: "Iqra Habib",
   clientbalance: 100000,
   accountcurrency: "PKRS",
   IBAN: "PKN1234564321",
};

function display()
{
     document.getElementById("title").innerText = account.clientname;
     document.getElementById("balance").innerText = account.clientbalance;
     document.getElementById("currency").innerText = account.accountcurrency;
     document.getElementById("IBAN").innerText = account.IBAN;
}

display();
function deposit(e)
{ 
	var dep;
	if(e.keycode == 13)
	{
        dep= document.getElementById("deposit").value;
        if(! isNan(dep))
        {
        	
        }
	}
}
