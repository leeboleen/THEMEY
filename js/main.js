    

    // onclick event for circle buttons

    // define buttons, assign functions
    document.getElementById('whiteBtn').onclick = changeColorWhite;
    document.getElementById('yellowBtn').onclick = changeColorYellow;
    document.getElementById('pinkBtn').onclick = changeColorPink;

    // define vars for site elems
    var title = document.getElementById('titlem');
    var title2 = document.getElementById('title2');

    var paragraph = document.getElementById('paragraph');
    var paragraph2 = document.getElementById('paragraph2');
    var paragraph3 = document.getElementById('paragraph3');
    var paragraph4 = document.getElementById('paragraph4');
    var paragraph5 = document.getElementById('paragraph5');
    var paragraph6 = document.getElementById('paragraph6');

    function changeColorWhite() {
        title.style.color = '#ffffff';
        title2.style.color = '#ffffff';

        paragraph.style.color = '#ffffff';
        paragraph2.style.color = '#ffffff';
        paragraph3.style.color = '#ffffff';
        paragraph4.style.color = '#ffffff';
        paragraph5.style.color = '#ffffff';
        paragraph6.style.color = '#ffffff';
    }

    function changeColorYellow() {
        title.style.color = '#ffde59';
        title2.style.color = '#ffde59';

        paragraph.style.color = '#ffde59';
        paragraph2.style.color = '#ffde59';
        paragraph3.style.color = '#ffde59';
        paragraph4.style.color = '#ffde59';
        paragraph5.style.color = '#ffde59';
        paragraph6.style.color = '#ffde59';
    }

    function changeColorPink() {
        title.style.color = '#e4138f';
        title2.style.color = '#e4138f';

        paragraph.style.color = '#e4138f';
        paragraph2.style.color = '#e4138f';
        paragraph3.style.color = '#e4138f';
        paragraph4.style.color = '#e4138f';
        paragraph5.style.color = '#e4138f';
        paragraph6.style.color = '#e4138f';
    }