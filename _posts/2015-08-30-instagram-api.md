---
layout: post
title: "Instagram API"
date: 2015-08-30
keywords: ",instagram, api"
---

Well. I just try instagram api from stackoverflow question.

<a href="http://stackoverflow.com/questions/24556445/display-instagram-photos-from-different-account-to-my-webpage">
link
</a>

<br/>

Also, it takes a few seconds to loading :) <br/>

<!-- css -->
<style type="text/css">
  img {
    max-width: 100px;
    margin: 2px;
  }
</style>
<script type="text/javascript">
// whateverorigin.org app service
var URL = "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/auycro/media");
//var URL = encodeURIComponent("http://instagram.com/auycro/media");
jQuery(function ($) {
    $.ajax({
        url: URL,
        dataType: "jsonp", // this is important
        cache: false,
        success: function (response) {
            var data = response.contents;
            for (var i = 0; i < data.items.length; i++) {
                var image = '<img src="'+data.items[i].images.standard_resolution.url+'" alt="" />';
                $(image).appendTo(".images");
            }
        },
        error: function () {
            var error = "<p>error processing ajax request</p>";
            $(error).appendTo(".images");
        }
    });
});
</script>
<div class="images"></div>