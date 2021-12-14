$(document).ready(function() {
  var currentFloor = 2;
  var currentFlat = 1;
  let usCurrentFlat = 1;
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var flatPath = $(".modal-dialog path");
  let flatLink = $(".flat-item a");

  // Квартиры
  flatPath.on("mouseover", function() {
    let currentFlatOrder = $(this).attr("data-flat") - 1;
    $(`.flat-link:eq(${currentFlatOrder})`).addClass("flat-link-mouseover");
  });
  flatPath.on("mouseout", function() {
    $('.flat-link').removeClass('flat-link-mouseover');
  });
  
  // $(".flat-link").on("mouseover", () => {
  //   console.log($(this).index());
  // });
  
  flatLink.on("mouseover", function() {
    currentFlat = +$(this).attr("data-flat-link");
    let usCurrentFlat = currentFlat.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
    $(`[data-flat=${usCurrentFlat}]`).addClass("flat-path-mouseover");
  });
  flatLink.on("mouseout", function() {
    $(`.flats path`).removeClass("flat-path-mouseover");
  });

  // Этажи
  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function() {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function() {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});