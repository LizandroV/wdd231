const currentUrl = window.location.href;

console.log(currentUrl);

const everything = currentUrl.split('?');
console.log(everything);

const formData = everything[1].split('&');
console.log(formData);

function show(cup){
    formData.forEach((item) => {
        console.log(item)
        if (item.startsWith(cup)) {
            result = item.split('=')[1].replace(/%40/g, "@").replace("+", " ").replace("+", " ");
        }})
    return result
};

const showInfo = document.getElementById("results");
showInfo.innerHTML = `
<p>Appoinment for: ${show('first')} ${show('last')}</p>
<p>Proxy Baptism on: ${show('fecha')} in ${show('location')}</p>
<p>Phone number: ${show('phone')}</p>
<p>Email: ${show('email')}</p>
`;

