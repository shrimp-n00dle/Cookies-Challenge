
const bgColor = document.querySelector("bgColor");

const submitBtn = document.getElementById("ClckBtn");

submitBtn.addEventListener("click", () => 
    {
        updatePref("bgColor", bgColor.value, 1);
    } )


function updatePref(name,value,exp_Day)
{
    const date = new Date();
    date.setTime(date.getTime() + exp_day * 24 * 60 * 60 * 1000);
    let cookie_date = "expries at: " + date.toUTCString();
    document.cookie = '${name}=${value}; ${expires}; path=/';
}

updatePref("background-color","White",1);


function deletePref(name)
{
    updatePref(name,null,null);
}