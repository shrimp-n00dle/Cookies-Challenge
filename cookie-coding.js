
const bgColor = document.querySelector(".bgColor");

const submitBtn = document.querySelector(".submit_button");

const textbug = document.querySelector(".test");

// document.cookie = "BackgroundColor=red; path=/";
// document.cookie = "FontColor=white; path=/";
// document.cookie = "PostColor=blue; path=/";


function Test(text)
{
        textbug.innerHTML = text;
}


function updatePref()
{
    //Date
    const date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    let cookie_date = "expries at: " + date.toUTCString();
    Test(cookie_date);

    //test toggle
   //document.body.style.backgroundColor = "red";
   //document.cookie = '; ${cookie_date}; path=/';


    //bgColor
    document.body.style.backgroundColor=red;



    //fontColor
    document


    //postColor


   


}