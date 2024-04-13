/*

=========================================================
* Neumorphism UI - v1.0.0
=========================================================

* Product Page: https://themesberg.com/product/ui-kits/neumorphism-ui
* Copyright 2020 Themesberg MIT LICENSE (https://www.themesberg.com/licensing#mit)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

"use strict";
$(document).ready(function () {

    // options

    var breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };

    var $navbarCollapse = $('.navbar-main .collapse');

    // Collapse navigation
    $navbarCollapse.on('hide.bs.collapse', function () {
        var $this = $(this);
        $this.addClass('collapsing-out');
        $('html, body').css('overflow', 'initial');
    });

    $navbarCollapse.on('hidden.bs.collapse', function () {
        var $this = $(this);
        $this.removeClass('collapsing-out');
    });

    $navbarCollapse.on('shown.bs.collapse', function () {
        $('html, body').css('overflow', 'hidden');
    });

    $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
        var $this = $(this).find('.dropdown-menu');

        $this.addClass('close');

        setTimeout(function () {
            $this.removeClass('close');
        }, 200);

    });

    $(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '.navbar-nav > .dropdown', function (e) {
        e.stopPropagation();
    });

    $('.dropdown-submenu > .dropdown-toggle').click(function (e) {
        e.preventDefault();
        $(this).parent('.dropdown-submenu').toggleClass('show');
    });

    // Headroom - show/hide navbar on scroll
    if ($('.headroom')[0]) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Background images for sections
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    $('[data-background-color]').each(function () {
        $(this).css('background-color', $(this).attr('data-background-color'));
    });

    $('[data-color]').each(function () {
        $(this).css('color', $(this).attr('data-color'));
    });

    // Datepicker
    $('.datepicker')[0] && $('.datepicker').each(function () {
        $('.datepicker').datepicker({
            disableTouchKeyboard: true,
            autoclose: false
        });
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function () {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });

    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // NoUI Slider
    if ($(".input-slider-container")[0]) {
        $('.input-slider-container').each(function () {

            var slider = $(this).find('.input-slider');
            var sliderId = slider.attr('id');
            var minValue = slider.data('range-value-min');
            var maxValue = slider.data('range-value-max');

            var sliderValue = $(this).find('.range-slider-value');
            var sliderValueId = sliderValue.attr('id');
            var startValue = sliderValue.data('range-value-low');

            var c = document.getElementById(sliderId),
                d = document.getElementById(sliderValueId);

            noUiSlider.create(c, {
                start: [parseInt(startValue)],
                connect: [true, false],
                //step: 1000,
                range: {
                    'min': [parseInt(minValue)],
                    'max': [parseInt(maxValue)]
                }
            });

        })
    }

    if ($("#input-slider-range")[0]) {
        var c = document.getElementById("input-slider-range"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            tooltips: true,
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function (a, b) {
            f[b].textContent = a[b]
        })
    }

    if ($("#input-slider-vertical-1")[0]) {
        var c = document.getElementById("input-slider-vertical-1"),
            d = document.getElementById("input-slider-range-value-low-3"),
            e = document.getElementById("input-slider-range-value-high-3"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            tooltips: false,
            orientation: 'vertical',
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function (a, b) {
            f[b].textContent = a[b]
        })
    }

    if ($("#input-slider-vertical-2")[0]) {
        var c = document.getElementById("input-slider-vertical-2"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            tooltips: true,
            orientation: 'vertical',
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function (a, b) {
            f[b].textContent = a[b]
        })
    }

    //Progress bars
    $(".progress-bar").each(function () {
        $(this).waypoint(function () {
            var progressBar = $(".progress-bar");
            progressBar.each(function (indx) {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
            $('.progress-bar').css({
                animation: "animate-positive 3s",
                opacity: "1"
            });
        }, {
            triggerOnce: true,
            offset: '60%'
        });
    });

    // When in viewport
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            //alert();
        },
        doOut: function () {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });

    // Scroll to anchor with scroll animation
    $('[data-toggle="scroll"]').on('click', function (event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('offset') ? $(this).data('offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });

    //Rotating Cards
    $(document).on('click', '.card-rotate .btn-rotate', function () {
        var $rotating_card_container = $(this).closest('.rotating-card-container');

        if ($rotating_card_container.hasClass('hover')) {
            $rotating_card_container.removeClass('hover');
        } else {
            $rotating_card_container.addClass('hover');
        }
    });

    //CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });

    //Countdown
    $('#clock').countdown('2020/10/10').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%-w</span> week%!w '
            + '<span>%-d</span> day%!d '
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec'));
    });

    //Parallax
    $('.jarallax').jarallax({
        speed: 0.2
    });

    //Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    // Equalize height to the max of the elements
    if ($(document).width() >= breakpoints.lg) {

        // object to keep track of id's and jQuery elements
        var equalize = {
            uniqueIds: [],
            elements: []
        };

        // identify all unique id's
        $('[data-equalize-height]').each(function () {
            var id = $(this).attr('data-equalize-height');
            if (!equalize.uniqueIds.includes(id)) {
                equalize.uniqueIds.push(id)
                equalize.elements.push({ id: id, elements: [] });
            }
        });

        // add elements in order
        $('[data-equalize-height]').each(function () {
            var $el = $(this);
            var id = $el.attr('data-equalize-height');
            equalize.elements.map(function (elements) {
                if (elements.id === id) {
                    elements.elements.push($el);
                }
            });
        });

        // equalize
        equalize.elements.map(function (elements) {
            var elements = elements.elements;
            if (elements.length) {
                var maxHeight = 0;

                // determine the larget height
                elements.map(function ($element) {
                    maxHeight = maxHeight < $element.outerHeight() ? $element.outerHeight() : maxHeight;
                });

                // make all elements with the same [data-equalize-height] value
                // equal the larget height
                elements.map(function ($element) {
                    $element.height(maxHeight);
                })
            }
        });
    }

    // update target element content to match number of characters
    $('[data-bind-characters-target]').each(function () {
        var $text = $($(this).attr('data-bind-characters-target'));
        var maxCharacters = parseInt($(this).attr('maxlength'));
        $text.text(maxCharacters);

        $(this).on('keyup change', function (e) {
            var string = $(this).val();
            var characters = string.length;
            var charactersRemaining = maxCharacters - characters;
            $text.text(charactersRemaining);
        })
    });

    // copy docs
    $('.copy-docs').on('click', function () {
        var $copy = $(this);
        var htmlEntities = $copy.parents('.nav-wrapper').siblings('.card').find('.tab-pane:last-of-type').html();
        var htmlDecoded = $('<div/>').html(htmlEntities).text().trim();

        var $temp = $('<textarea>');
        $('body').append($temp);
        console.log(htmlDecoded);
        $temp.val(htmlDecoded).select();
        document.execCommand('copy');
        $temp.remove();

        $copy.text('Copied!');
        $copy.addClass('copied');

        setTimeout(function () {
            $copy.text('Copy');
            $copy.removeClass('copied');
        }, 1000);
    });

    $('.current-year').text(new Date().getFullYear());

    var xhr = new XMLHttpRequest();
    var projectsData = [];
    xhr.open('GET', './assets/data/data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            displayDataInit(jsonData);
            projectsData = jsonData;
        }
    };
    xhr.send();

    // Display JSON data
    function displayDataInit(data) {
        var jsonDataElement = document.getElementById('jsonData');
        //   jsonDataElement.textContent = JSON.stringify(data, null, 2);
        data.forEach(function (item) {
            var div = document.createElement('div');
            div.className = 'col-12 col-md-6 col-lg-4 mb-5';

            var card = document.createElement('div');
            card.className = 'card bg-primary border-light shadow-soft';

            var img = document.createElement('img');
            img.src = './assets/img/projects/' + item.Image;
            img.className = 'card-img-top rounded-top';
            img.alt = 'Themesberg office';

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var span = document.createElement('span');
            span.className = 'h6 icon-tertiary small';
            span.innerHTML = '<span class="fas fa-microchip mr-2"></span>' + item.technologie;

            var h3 = document.createElement('h3');
            h3.className = 'h5 card-title mt-3';
            h3.textContent = item.name;

            var p = document.createElement('p');
            p.className = 'card-text';
            p.textContent = item.description;

            var a = document.createElement('a');
            a.href = item.url;
            a.className = 'btn btn-primary btn-sm';
            a.textContent = 'Learn More';
            a.target = '_blank';
            
            cardBody.appendChild(span);
            cardBody.appendChild(h3);
            cardBody.appendChild(p);
            cardBody.appendChild(a);

            card.appendChild(img);
            card.appendChild(cardBody);

            div.appendChild(card);

            jsonDataElement.appendChild(div);
        });
    }

    var categoryButtons = document.querySelectorAll('.category-button');
    // Add event listeners to buttons
    document.querySelector('#filterAll').addEventListener('click', function () {
        filterData('All');
        categoryButtons.forEach(function (btn) {
            btn.classList.remove('active-category');
        });

        // Add "active" class to the clicked button
        this.classList.add('active-category');
    });

    document.querySelector('#filterLaravel').addEventListener('click', function () {
        filterData('Laravel');
        categoryButtons.forEach(function (btn) {
            btn.classList.remove('active-category');
        });

        // Add "active" class to the clicked button
        this.classList.add('active-category');
    });

    document.querySelector('#filterJavaScript').addEventListener('click', function () {
        filterData('Javascript');
        categoryButtons.forEach(function (btn) {
            btn.classList.remove('active-category');
        });

        // Add "active" class to the clicked button
        this.classList.add('active-category');
    });

    document.querySelector('#filterWordpress').addEventListener('click', function () {
        filterData('Wordpress');
        categoryButtons.forEach(function (btn) {
            btn.classList.remove('active-category');
        });

        // Add "active" class to the clicked button
        this.classList.add('active-category');
    });

    // Filter data based on category
    function filterData(category) {
        displayData(jsonData, category);
    }

    // Display JSON data with filtering
    function displayData(data, category) {
        var jsonDataElement = document.getElementById('jsonData');
        jsonDataElement.innerHTML = ''; // Clear previous content

        projectsData.forEach(function (item) {
            if (category === 'All' || item.categorie === category) {
                // Create a div for each item
                var div = document.createElement('div');
                div.className = 'col-12 col-md-6 col-lg-4 mb-5 fade-in-complex';

                // Create a card container
                var card = document.createElement('div');
                card.className = 'card bg-primary border-light shadow-soft';

                // Create an image element
                var img = document.createElement('img');
                img.src = './assets/img/projects/' + item.Image;
                img.className = 'card-img-top rounded-top';
                img.alt = 'Themesberg office';

                // Create a card body
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                // Create a span for category
                var span = document.createElement('span');
                span.className = 'h6 icon-tertiary small';
                span.innerHTML = '<span class="fas fa-microchip mr-2"></span>' + item.technologie;

                // Create a title (h3)
                var h3 = document.createElement('h3');
                h3.className = 'h5 card-title mt-3';
                h3.textContent = item.name;

                // Create a description (p)
                var p = document.createElement('p');
                p.className = 'card-text';
                p.textContent = item.description;

                // Create a "Learn More" link (a)
                var a = document.createElement('a');
                a.href = item.url;
                a.className = 'btn btn-primary btn-sm';
                a.textContent = 'Learn More';
               

                // Append elements to build the card
                cardBody.appendChild(span);
                cardBody.appendChild(h3);
                cardBody.appendChild(p);
                cardBody.appendChild(a);

                card.appendChild(img);
                card.appendChild(cardBody);

                div.appendChild(card);

                // Append the card to the jsonDataElement
                jsonDataElement.appendChild(div);

            }
        });
    }


    var form = document.getElementById("contact-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)



});   
