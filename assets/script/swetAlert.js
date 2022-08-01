(async () => {

    const {value: cafe} = await swal.fire ({
        title: "Bienvenido",
        text: "Selecciona tu café favorito:",
        icon: 'question',
        confirmButtonText: 'seleccionar',
        footer: 'Tu elección es muy importante para nosotros',
        // timer: 5000,
        timeProgressBar: true,
        allwOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
    
        input: 'select',
        inputPlaceholder: 'Cafés',
        inputValue: '',
        inputOptions: {
            latte:'Latte',
            frappe:'Frappe',
            mocha:'Mocha',
            espresso:'Espresso',
            capuccino:'Capuccino'
        },

        buttonsStyling: true,
        showCloseButton: true,
        closeButtonAriaLabel: 'cerrar alerta',

        imageUrl: './assets/img/cafe-fachada.jpg',
        imageWidth: '200px',
        imageHeigth: '40px'


    });
    
    if (cafe) {
        swal.fire({
            title: `Es mi favorito tambien, 🫘 ${cafe}`
        });
    }

})()


