$(document).ready(function() {
//Displays the current date at the top of the calender
$("#currentDay").text(moment().format("dddd MMMM Do"));

// listen for save button clicks
$('.saveBtn').on('click', function () {
    // get nearby values
    var input = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

//store input and time in local storage
localStorage.setItem(time, input);

// adds show class to notification (displays the notification)
$('.notification').addClass('show');

// after 5 seconds remove show class (hides notification)
setTimeout(function () {
  $('.notification').removeClass('show');
}, 5000);
});


// load any saved data from localStorage for every hour
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
$('#hour-19 .description').val(localStorage.getItem('hour-19'));
$('#hour-20 .description').val(localStorage.getItem('hour-20'));
  
 
function hourChecker() {
    // uses moment get current number of hours
    var currentHour = moment().hours();
    
    // goes and loops through time blocks to determine if past, present or future
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
    }
    
    hourChecker();       
});