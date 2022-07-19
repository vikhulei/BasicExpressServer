const getButton = document.getElementById("get")
const postButton = document.getElementById("post")
let fromServer = document.getElementById("fromServer")
document.getElementById("fromServer").style.cssText = `
font-weight: 200;
font-style: italic;
`;


getButton.addEventListener("click", getInfo)
postButton.addEventListener("click", postInfo);


const baseUrl = "http://localhost:4000";

let inputData;

async function getInfo(e) {
    e.preventDefault();
    const result = await fetch(baseUrl + "/info", {
        method: "GET"
    })
    const data = await result.json()

    const dataColored = data.info;

    fromServer.innerHTML = dataColored;

}

async function postInfo(e) {
    e.preventDefault();
    if(input.value == "") {return};
    inputData = input.value
    await fetch(baseUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify ({
            parcel: inputData
        })
    })
    alert(inputData + " was sent")
    input.value = "";
}
