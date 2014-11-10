function RandInt() {
    var e = Math.floor(Math.random() * 89 + 1);
    $.UIGoToArticle("#boukala" + e)
}
$(function() {
    $.fn.extend({
        UIHorizontalScrollPanel: function() {
            return this.each(function() {
                var e = $(this).find("ul");
                var t = 0;
                e.find("li").each(function(e, n) {
                    t += parseInt($(n).outerWidth(true))
                });
                var n = parseInt($(this).css("padding-left")) + parseInt($(this).css("padding-right"));
                e.css("width", t + (n + n / 2))
            })
        }
    });
    $(".horizontal-scroll-panel").UIHorizontalScrollPanel()
});
$(function() {
    var e = {
        valueNames: ["word", "significance"]
    };
    var t = new List("dictionary", e)
});
$(function() {
    $("#backToMain").on("singletap", function() {
        $.UIGoBackToArticle("#boukalat")
    })
});
$(function() {
    $("#backToIstikhbarat").on("singletap", function() {
        $.UIGoBackToArticle("#istikhbarat")
    })
})