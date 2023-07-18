$(document).ready(function () {
    // General Structure
    $('body').addClass('bg-dark');
    for (i = 1; i <= 6; ++i) {
        $('body').append('<div id=row' + i + ' class=row>');
        $('<div id=step' + i + ' class=col>#Step ' + i + '</div>').appendTo('#row' + i);
        $('<div id=action' + i + ' class=col>#action' + i + '</div>').appendTo('#row' + i);
        $('.col').addClass('text-warning');
        $('#step' + i).addClass('col-2');
        $('#action' + i).addClass('bg-primary');
    };
    // functions and var
    function randomRgb() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    let count = 0;
    // Basic Details + with chaining of jQ
    $('.row').addClass('m-4');
    $('#action1').addClass('col-6 btn').text('Click me for a nice message').click(function () {
        alert('Yes, have some! Reference Ghostbuster.');
    });
    $('#action2').addClass('col-3 btn').text('Click me to view this input ->').click(function () {
        let textVal = $('input').val();
        alert(textVal);
    });
    $('#action3').addClass('col-6 rounded-2 text-center').text('Mouse over to change background color').mouseover(function () {
        $(this).removeClass('bg-primary');
        this.style.backgroundColor = randomRgb();
    });;
    $('#action4').addClass('col-6 rounded-2 text-center').text('Click me to change the text color').click(function () {
        $(this).removeClass('text-warning');
        this.style.color = randomRgb();
    });
    $('#action5').addClass('col-6 btn text-center').text('Click me to see my friends').click(function () {
        let freinds = ['fred', 'ben', 'bob', 'jim', 'bo', 'john', 'susan', 'mary', 'margo', 'wes'];
        if (count == 0) {
            $('#action6').append('<ul>');
            $('ul').append('<li>' + freinds[count]);
            ++count;
            $('#action5').text('Keep clicking to see more friends');
        } else if (count > 0 && count <= 9) {
            $('ul').append('<li>' + freinds[count]);
            ++count;
        } else {
            $('#action5').text('Now you see them all');
        };
    });;
    $('#action6').addClass('col-6 text-center');
    $("<input type=text class=col>").appendTo('#row2');
    $('input').addClass('col-3 rounded-3');
    $('#action6').removeClass('bg-primary');
    $('#step6').text('');
    $('#action6').text('');

// Basic structure with no chaining notes
    // text updates
    // $("#action1").text('Click me for a nice message');
    // $("#action2").text('Click me to view this input ->');
    // $("#action3").text('Mouse over to change background color');
    // $("#action4").text('Click me to change the text color');
    // $("#action5").text('Click me to see my friends');

    // Functions and events
    // Step 1 
    // $("#action1").click(function () {
    //     alert('Yes, have some! Reference Ghostbuster.');
    // });
    // Step 2 
    // $('#action2').click(function () {
    //     let textVal = $('input').val();
    //     alert(textVal);
    // });
    // Step 3
    // $("#action3").mouseover(function () {
    //     $(this).removeClass('bg-primary');
    //     this.style.backgroundColor = randomRgb();
    // });
    // Step 4
    // $("#action4").click(function () {
    //     $(this).removeClass('text-warning');
    //     this.style.color = randomRgb();
    // });
    // Step 5
    // $('#action5').click(function () {
    //     let freinds = ['fred', 'ben', 'bob', 'jim', 'bo', 'john', 'susan', 'mary', 'margo', 'wes'];
    //     if (count == 0) {
    //         $('#action6').append('<ul>');
    //         $('ul').append('<li>' + freinds[count]);
    //         ++count;
    //         $('#action5').text('Keep clicking to see more friends');
    //     } else if (count > 0 && count <= 9) {
    //         $('ul').append('<li>' + freinds[count]);
    //         ++count;
    //     } else {
    //         $('#action5').text('Now you see them all');
    //     };
    // });
});