$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq"),$(".menu-btn").on("click touch",function(){$(".menu").toggleClass("show")}),$(".map").click(function(){$(this).find("iframe").addClass("clicked")}).mouseleave(function(){$(this).find("iframe").removeClass("clicked")})});