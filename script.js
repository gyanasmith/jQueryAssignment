$(document).ready(function () {
  $(".show-more-btn").click(function () {
    const card = $(".profile-card");
    const img = $(".profile-img");
    const showMoreBtn = $(this);
    const showLessBtn = $(".show-less-btn");

    card.animate({ height: "300px" }, 300, function () {

      showLessBtn.fadeIn();
    });

    img.css("filter", "blur(3px)"); 
    showMoreBtn.hide(); 
  });

  $(".show-less-btn").click(function () {
    const card = $(".profile-card");
    const img = $(".profile-img");
    const showMoreBtn = $(".show-more-btn");
    const showLessBtn = $(this);

  
    card.animate({ height: "150px" }, 300, function () {
      
      showMoreBtn.fadeIn();
    });

    img.css("filter", "none");
    showLessBtn.hide(); 
  });
});
