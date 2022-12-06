// darksun.js --- darksun JS file
//
// Copyright (C) 2011-2016 All Right Reserved, Fabrice Niessen
//
// This file is free software: you can redistribute it and/or
// modify it under the terms of the GNU General Public License as
// published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.
//
// This file is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// Author: Fabrice Niessen <(concat "fniessen" at-sign "pirilampo.org")>
// URL: https://github.com/fniessen/org-html-themes/
// Version: 20140515.1841

$(function() {
    $('p').
        html(function(index, old) {
            return old.replace('FIXME',
                               '<span class="fixme">FIXME</span>');
    });
    $('p').
        html(function(index, old) {
            return old.replace('XXX',
                               '<span class="fixme">XXX</span>');
    });
});

// Remove leading section number
// $(function() {
//     $('.section-number-2').text("");
//     for (var i = 3; i <= 5; i++) {
//         $('.section-number-' + i).each(function() {
//             $(this).text($(this).text().replace(/^[0-9]+\./g, ""));
//         });
//     }
// });

$(document).ready(function() {

    // Initialize hideShow
    hsInit();

    // Handle click on internal links
    $('.ui-tabs-panel a[href^="#"]').click(function(e) {
        var href = $(this).attr('href');
        hsExpandAnchor(href);
        selectTabAndScroll(href);
        e.preventDefault();
    });

    // add sticky headers to tables
    $('table').stickyTableHeaders();
});

$(function() {
    $('li > code :contains("[X]")')
        .parent()
            .addClass('checked')
        .end()
        .remove();
    $('li > code :contains("[-]")')
        .parent()
            .addClass('halfchecked')
        .end()
        .remove();
    $('li > code :contains("[ ]")')
        .parent()
            .addClass('unchecked')
        .end()
        .remove();
});

$(function() {
    $('i :contains("[#A]")')
        .replaceWith('<i><span style="color: #F67777;">[#A]</span></i>');
    $('i :contains("[#B]")')
        .replaceWith('<i><span style="color: #B6E864;">[#B]</span></i>');
    $('i :contains("[#C]")')
        .replaceWith('<i><span style="color: #C3DCFF;">[#C]</span></i>');
});

// window.onload = function() {
	// hsCollapseAll();
// };
