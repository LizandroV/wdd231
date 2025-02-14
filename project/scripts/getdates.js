//Copyright
const date = new Date().getFullYear();
document.querySelector("#copyrightYear").innerHTML = date;

//Last Modified
let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified