// replace empty #nav-placeholder with nav.html
$.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

// replace empty #footer-placeholder with footer.html
$.get("footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});