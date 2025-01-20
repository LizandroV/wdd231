window.addEventListener('load', function () {
    Array.from(document.querySelectorAll('[role^=switch]')).forEach(
        (element) => {
        new Switch(element)
    }
    );
    displayChamberMembers();
});

function displayChamberMembers() {
    const memberCardBox = document.querySelector('.member-card-section');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');

    const renderMembers = function (members) {
        members.forEach((member) => {
        const html = `
        <div class="member-card">
            <figure>
                <div>
                    <img src="${member.image}" alt="${member.name} logo" width="1000" height="623" loading="lazy">
                </div>
                <figcaption>${member.name}</figcaption>
            </figure>
            <div class="member-info-box">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">${member.website.slice(8)}</a>
                <img src="${member.membershipLevel}" alt="" width="45" height="64">
            </div>
        </div>
        `;
        memberCardBox.insertAdjacentHTML('afterbegin', html)
    })
    }

    const getMembersData = async function () {
        const membersUrl = 'data/members.json';
        const response = await fetch(membersUrl);
        const data = await response.json();
        renderMembers(data.data);
    }
    getMembersData()


const saveView = function (view) {
    localStorage.setItem("localView", JSON.stringify(view));
}

const changeView = function () {
    const btn = this;

    if (memberCardBox.classList.contains('list')) {
        memberCardBox.classList.remove('list');
    } else {
        memberCardBox.classList.remove('grid');
    }
    memberCardBox.classList.add(btn.id.slice(0, 4))
    saveView(btn.id.slice(0, 4));
}

const theView = function () {
    const isView = JSON.parse(localStorage.getItem("localView"));
    console.log(isView);
    if (isView && isView != 0) {
        memberCardBox.classList.add(isView);
    }
}

theView();

gridBtn.addEventListener('click', changeView.bind(gridBtn));
listBtn.addEventListener('click', changeView.bind(listBtn));
};