// JavaScript Document

  $(document).ready(function(){
	$("#nav-icon").click(function(){
        $(this).toggleClass("open");
        $(".menu-hamburger").toggleClass("active");
    });
});