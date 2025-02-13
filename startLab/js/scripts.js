const openButton = document.getElementById('openButton');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
  dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
    });