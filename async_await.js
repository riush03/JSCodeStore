const { rejects } = require("assert");
const { resolve } = require("path");

async function showAvatar(){

    //read JSON
    let response = await fetch('./user.json');
    let user = await response.json();

    //read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    //show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve,reject)=> setTimeout(resolve,3000));

    img.remove();

    return githubUser;
}

showAvatar();