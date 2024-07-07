// targeting form

const btn = document.querySelector('#btn-submit');

btn.addEventListener('click', function () {
    animateForm(this);
});


function animateForm(button) {
    let form = document.querySelector('#myForm');

    button.disabled = true;

    form.classList.toggle('load');

    setTimeout(() => {
        form.classList.replace('load', 'submit');

        setTimeout(() => {
            form.classList.toggle('submit');
            form.submit();
        }, 1500);

    }, 1500);
}
