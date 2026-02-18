// 
// service_78sivrc
// GhA8jXNTSVE36AlQE

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
      const success = document.querySelector('.modal__overlay--success')
      loading.classList += " modal__overlay--visible"
     emailjs
        .sendForm(
            'service_78sivrc',
            'template_mw5wxlk',
            event.target,
           'GhA8jXNTSVE36AlQE'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at raquelledschoolcraft@gmail.com"
            )
        })
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false
            return document.body.classList.remove("modal--open")
        }
        isModalOpen = true
        document.body.classList += " modal--open"
    }