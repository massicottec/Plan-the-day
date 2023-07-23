var currentDay = dayjs().format('dddd');
var currentTime = dayjs().format('h:mm A')

$(document).ready(function () {
  document.getElementById('currentDay').textContent = `${currentDay}: ${currentTime}`;

  // saves input plans to local storage to keep track of.
  $('.saveBtn').on('click', function () {
    var info = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, info);
  });

  // applies the past, present, or future class to the time-block divs to appropriately colour code the blocks base
  // on time of day.
  function ebenezer() {
    var currentTime = dayjs().format('HH')

    $('.time-block').each(function () {
      var plannerTime = this.id;

      if (plannerTime === currentTime) {
        $(this).removeClass('future');
        $(this).addClass('present');
        $(this).removeClass('past');
      } else if (plannerTime < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      };
    });

  };

  // calls the populate function
  populate();

  ebenezer();

  // populates the daily planner with the stored information in local storage. 
  function populate() {
    for (i = 9; i <= 17; i++) {
      $(`#${i} .description`).val(localStorage.getItem(`${i}`));
    };
  };
});