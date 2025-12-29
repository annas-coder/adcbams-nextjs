

function breadcrumbFix(){var e=$(".c-breadcrumbs__list .c-breadcrumbs__item a"),i=e.length,r=0;e.each(function(){r++;var e=$(this).attr("href");"javascript:;"!=e&&""!=e||!(window.innerWidth<=767)||r!=i-1&&r!=i/2-1?$(this).parent().removeClass("hide"):($(this).parent().addClass("hide"),$(this).parent().prev().css("display","inline-block"))})}$(document).ready(function(){breadcrumbFix(),window.onresize=breadcrumbFix});


  