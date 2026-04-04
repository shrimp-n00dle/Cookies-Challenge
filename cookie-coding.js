
const bgColor = document.querySelector(".bgColor");

const submitBtn = document.querySelector(".submit_button");

const textbug = document.querySelector(".test");

// submitBtn.addEventListener("click", () => 
//     {
    
//             //Debugging purposes
//         textbug.innerHTML = "Yiee!";
//         updatePref(bgColor, bgColor.value, 1);
//     } )

function Test()
{
        textbug.innerHTML = "Yiee!";
}


function updatePref(name,value,exp_Day)
{



    const date = new Date();
    date.setTime(date.getTime() + exp_day * 24 * 60 * 60 * 1000);
    let cookie_date = "expries at: " + date.toUTCString();
    document.cookie = '${name}=${value}; ${expires}; path=/';
}

//updatePref("background-color","White",1);


function deletePref(name)
{
    updatePref(name,null,null);
}