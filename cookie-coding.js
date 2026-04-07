
const postColor = document.querySelector(".postColor");
const bgColor = document.querySelector(".bgColor");

const fontColor = document.querySelector(".fontColor");

const submitBtn = document.querySelector(".submit_button");

const siteFont = document.querySelector(".siteFont");

const textbug = document.querySelector(".test");

const sitePost = document.querySelector(".textContainer");


window.onload = function() {

    console.log(getCookie());
    if (getCookie() != '')
        {
             textbug.innerHTML = getCookie();
        }
    else 
    {
        console.log("here");
        //Date
        const date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        let cookie_date = "expires=" + date.toUTCString();
        document.cookie = "bgName=" + "yellow" +";" +  cookie_date + null + ";" + "path=/";
    }
   //resetCookies();
   //document.body.style.backgroundColor = getCookie();
  

    // let savedColor = getCookie();
    // if (savedColor != "") {
    //     document.body.style.backgroundColor = savedColor;
    // }

    // let savedPColor = getPostCookie();
    // if (savedPColor != "") {
    //     sitePost.style.color = savedPColor;
    // }

    // let savedFColor = getFontCookie();
    // if (savedFColor != "") {
    //     siteFont.style.color = savedFColor;
    // }

};

function getCookie()
{
    let name = "bgColor";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";");
    console.log("Hello");
    console.log(cArray);
    let result = null;

    cArray.forEach(element =>
    {
        if (element.indexOf(name) == 0)
        {
            textbug.innerHTML = "onload called";
            result = element.substring(name.length + 1);
        }

        //textbug.innerHTML = element.substring(name.length + 1);
    }
    )

    //textbug.innerHTML = "onload NOT called";
    return result;
}

function getPostCookie()
{
    let name = "sitePost.style.color=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            textbug.innerHTML = "onload called";
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getBgCookie() {

    // const cDecoded = decodedURIComponent(document.cookie);
    // const cArray = cDecoded.split("; ");

    // for(let i = 0; i < cArray.length; i++) {
    //     let c = ca[i].trim();
    //     if (c.indexOf(name) == 0) {
    //         textbug.innerHTML = "onload called";
    //         return c.substring(name.length, c.length);

    // }
    
    // return "";

    let name = "document.body.style.backgroundColor=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            textbug.innerHTML = "onload called";
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updatePref()
{
    //Date
    const date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    let cookie_date = "expires=" + date.toUTCString();


    //bgColor
    let bgName = "bgColor";
    let b_color = document.querySelector(".bgColor").value;
    document.cookie = `${bgName}=${b_color};${cookie_date};path=/`;
    console.log(document.cookie);
    //"bgColor"+"="+b_color+";"+cookie_date+";path=/";
    document.body.style.backgroundColor= b_color;

 
    //fontColor
    // let f_color = document.querySelector(".fontColor").value;
    // document.cookie = "sitefont.style.color=" + f_color  + ";" + cookie_date  + ";path=/";
    // siteFont.style.color = f_color;


    // //postColor
    // let p_color = document.querySelector(".postColor").value;
    // document.cookie = "sitePost.style.color=" + p_color + ";" + cookie_date  + ";path=/";
    // sitePost.style.color = p_color;

}


function resetCookies()
{
    //Date
    const date = new Date();
    date.setTime(date.getTime() + 0 * 24 * 60 * 60 * 1000);
    let cookie_date = "expires=" + date.toUTCString();


    document.cookie = "bgName=" + null +";" +  cookie_date + null + ";" + "path=/";
}