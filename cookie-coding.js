
const postColor = document.querySelector(".postColor");
const bgColor = document.querySelector(".bgColor");
const fontColor = document.querySelector(".fontColor");
const submitBtn = document.querySelector(".submit_button");
const siteFont = document.querySelector(".siteFont");
const textbug = document.querySelector(".test");
const sitePost = document.querySelector(".textContainer");


window.onload = function() {
    let savedColor = getBgCookie();
    if (savedColor != "") {
        document.body.style.backgroundColor = savedColor;
    }

    let savedPColor = getPostCookie();
    if (savedPColor != "") {
        sitePost.style.color = savedPColor;
    }

    let savedFColor = getFontCookie();
    if (savedFColor != "") {
        siteFont.style.color = savedFColor;
    }

};

function getBgCookie()
{
    let name = "bgColor";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";");
    let result = null;

    cArray.forEach(element =>
    {
        if (element.indexOf(name) == 0)
        {
            result = element.substring(name.length + 1);
        }
    }
    )
    return result;
}

function getFontCookie()
{
    let name = "fontColor";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getPostCookie()
{
    let name = "postColor";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
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
    let b_color = document.querySelector(".bgColor").value;
    document.cookie = "bgColor=" + b_color  + ";" + cookie_date  + ";path=/";
    document.body.style.backgroundColor= b_color;

 
    //fontColor
    let f_color = document.querySelector(".fontColor").value;
    document.cookie = "fontColor=" + f_color  + ";" + cookie_date  + ";path=/";
    siteFont.style.color = f_color;


    //postColor
    let p_color = document.querySelector(".postColor").value;
    document.cookie = "postColor=" + p_color + ";" + cookie_date  + ";path=/";
    sitePost.style.color = p_color;

}


function resetCookies()
{
    //Date
    const date = new Date();
    date.setTime(date.getTime() + 0 * 24 * 60 * 60 * 1000);
    let cookie_date = "expires=" + date.toUTCString();


    document.cookie = "bgColor=" + null +";" +  cookie_date + null + ";" + "path=/";
    document.cookie = "fontColor=" + null +";" +  cookie_date + null + ";" + "path=/";
    document.cookie = "postColor=" + null +";" +  cookie_date + null + ";" + "path=/";
}