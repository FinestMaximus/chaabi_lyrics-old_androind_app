function RandInt(){var a=Math.floor(Math.random()*89+1);$.UIGoToArticle("#boukala"+a)}$(function(){$.fn.extend({UIHorizontalScrollPanel:function(){return this.each(function(){var b=$(this).find("ul");var a=0;b.find("li").each(function(d,f){a+=parseInt($(f).outerWidth(true))});var c=parseInt($(this).css("padding-left"))+parseInt($(this).css("padding-right"));b.css("width",a+(c+c/2))})}});$(".horizontal-scroll-panel").UIHorizontalScrollPanel()});$(function(){var b={valueNames:["word","significance"]};var a=new List("dictionary",b)});$(function(){$("#backToMain").on("singletap",function(){$.UIGoBackToArticle("#boukalat")})});$(function(){$("#backToIstikhbarat").on("singletap",function(){$.UIGoBackToArticle("#istikhbarat")})});