// Data Covid Dashboard
const indonesiaPositif = document.querySelector('#positif');
const IndonesiaSembuh = document.querySelector('#sembuh');
const indonesiaMeninggal = document.querySelector('#meninggal');

$.getJSON('https://api.kawalcorona.com/indonesia/', function (response) {
    let data = response[0];
    const { positif, sembuh, meninggal } = data;

    indonesiaPositif.innerHTML = `${positif} Orang`;
    IndonesiaSembuh.innerHTML = `${sembuh} Orang`;
    indonesiaMeninggal.innerHTML = `${meninggal} Orang`;
});
// End Data Dashboard

// Data DKI Jakarta
const casePositifDKI = document.querySelector('#case-positif-dki')
const caseSembuhDKI = document.querySelector('#case-sembuh-dki')
const caseMeninggalDKI = document.querySelector('#case-meninggal-dki')

$.getJSON('https://api.kawalcorona.com/indonesia/provinsi/', function (response) {
    let data = response[0].attributes;
    const { Kasus_Posi: positif, Kasus_Semb: sembuh, Kasus_Meni: meninggal } = data;

    casePositifDKI.innerHTML = `${positif}`;
    caseSembuhDKI.innerHTML = `${sembuh}`;
    caseMeninggalDKI.innerHTML = `${meninggal}`;
});
// End data DKI Jakarta

// event saat nav diklik
$('.page-scroll').on('click', function (e) {

    $(this).parent().addClass('active').siblings().removeClass('active')

    let href = $(this).attr('href');
    let elementHref = $(href);

    $('html, body').animate({
        scrollTop: elementHref.offset().top - 140
    });

    e.preventDefault();
})