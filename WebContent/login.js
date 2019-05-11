function loginF()
{
    var pwd= document.getElementById("pwd").value;
    var epwd=pwd.split();
    var r= epwd.reverse();
    alert("Login only if you trust this site")
    alert("Your code is- "+r);
}

function validate()
{
    var user=document.getElementById("user").value;
    var pwd=document.getElementById("pwd").value;
    var att=3;

    if(user=="username" && pwd=="password")
    {
        alert("login success");
        alert("You are redirected to next page");
        window.location="nopage.html";
        return false;
    }

    else
    {
        att--;
        alert("Incorrect username or password");
        alert("Only "+att+" attempts are left");
        if( att == 0)
        {
            document.getElementById("user").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}