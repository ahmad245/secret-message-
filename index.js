const { hash } = window.location;


if (hash) {
    let messageShow = document.getElementById('message-show')
    //document.getElementById('link-form').classList.add('hide');
    document.getElementById('message-form').classList.add('hide');
    messageShow.classList.remove('hide');
    messageShow.querySelector('h1').innerText=atob(hash.replace(/#/g, ""));

}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('message-input');
    if (input.value) {
        let encrypt = btoa(input.value);

        document.getElementById('link-form').classList.remove('hide');
        document.getElementById('message-form').classList.add('hide');
        let input2 = document.getElementById('link-input')
        input2.value = `${window.location}#${encrypt}`;
        input2.select();
    }

})