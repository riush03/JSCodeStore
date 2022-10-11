//attach button event handler
document.getElementById('testBtn').addEventListener('click',buttonClicked);

//run when a button clicked
function buttonClicked()
{
	
	const timeoutCallback = showMessage()
	{
		alert("You clicked the button.
	}
	
	//trigger the function after 2000 milliseconds
	setTimeout(showMessage,2000);
}

function showMessage()
{
	alert("you clciked the button!);
}