function getHeader() {
    document.write('<meta charset="utf-8">');
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">');
    document.write('<link rel="stylesheet" href="styles.css">');
}

function getFooter() {
    document.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>');
}

function getAccordion() {
    const accordionHeaders = document.getElementsByClassName('accordion-header');
    const accordionContents = document.getElementsByClassName('accordion-content');
    const accordionIcons = document.getElementsByClassName('accordion-icon'); 

    for (let i = 0; i < accordionHeaders.length; i++){
        accordionHeaders[i].addEventListener('click', () => 
        {   
            accordionContents[i].style.display = accordionContents[i].style.display == 'block' ? 'none' : 'block';
            accordionIcons[i].innerHTML = accordionContents[i].style.display == 'block' ? '-' : '+';
        });
    }
}