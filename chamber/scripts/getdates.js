//the copyright year (the current year) in the footer's first paragraph, and
//the date the document was last modified in the second paragraph.


//Copyright
const date = new Date().getFullYear();
document.querySelector("#copyrightYear").innerHTML = date;

//Last Modified
let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified