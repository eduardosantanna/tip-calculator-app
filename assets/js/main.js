const btnTeste = document.querySelectorAll('.btn-percentage')

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-percentage')) {
        console.log(Number(event.target.innerHTML.replace(/%/g, '')))
    }
})