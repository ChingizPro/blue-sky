(() => {
    $('#tarif-one').addClass('tarif--active');
    $('#trigger-one').addClass('tarif__trigger--active');

    $('.tarif__trigger').on('click', (evt) => {
        let sign = $(evt.target).attr('sign');
        $('.tarif--active').removeClass('tarif--active');
        $('#' + sign).addClass('tarif--active');
        $('.tarif__trigger--active').removeClass('tarif__trigger--active');
        $(evt.target).addClass('tarif__trigger--active');
    });
})();