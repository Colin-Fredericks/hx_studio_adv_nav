"use strict";

let course_structure = [
    {'Difficulty': [
        {'easy': [
            {
                'icon': '',
                'location': 'pageNumber1'
            },
            {
                'icon': '',
                'location': 'pageNumber2'
            },
            {
                'icon': '',
                'location': 'pageNumber3'
            },
            {
                'icon': '',
                'location': 'pageNumber4'
            },
            {
                'icon': '',
                'location': 'pageNumber5'
            },
            {
                'icon': '',
                'location': 'pageNumber6'
            }
        ]},
        {'medium': [
            {
                'icon': '',
                'location': 'pageNumber11'
            },
            {
                'icon': '',
                'location': 'pageNumber12'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            },
            {
                'icon': '',
                'location': 'pageNumber14'
            },
            {
                'icon': '',
                'location': 'pageNumber15'
            },
            {
                'icon': '',
                'location': 'pageNumber16'
            }
        ]},
        {'hard': [
            {
                'icon': '',
                'location': 'pageNumber21'
            },
            {
                'icon': '',
                'location': 'pageNumber22'
            },
            {
                'icon': '',
                'location': 'pageNumber23'
            },
            {
                'icon': '',
                'location': 'pageNumber24'
            },
            {
                'icon': '',
                'location': 'pageNumber25'
            },
            {
                'icon': '',
                'location': 'pageNumber26'
            }
        ]}
    ]},
    {'Unnecessarily long category name': [
        {'a': [
            {
                'icon': '',
                'location': 'pageNumber31'
            },
            {
                'icon': '',
                'location': 'pageNumber42'
            },
            {
                'icon': '',
                'location': 'pageNumber53'
            }

        ]},
        {'b': [
            {
                'icon': '',
                'location': 'pageNumber61'
            },
            {
                'icon': '',
                'location': 'pageNumber72'
            },
            {
                'icon': '',
                'location': 'pageNumber83'
            }

        ]},
        {'c': [
            {
                'icon': '',
                'location': 'pageNumber111'
            },
            {
                'icon': '',
                'location': 'pageNumber112'
            },
            {
                'icon': '',
                'location': 'pageNumber113'
            }

        ]}
    ]},
    {'Short': [
        {'aaaaaaaaaaaaaaaaaaa': [
            {
                'icon': '',
                'location': 'pageNumber11'
            },
            {
                'icon': '',
                'location': 'pageNumber12'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            }
        ]},
        {'bbbbbbbbbbbbbbbb': [
            {
                'icon': '',
                'location': 'pageNumber23'
            },
            {
                'icon': '',
                'location': 'pageNumber24'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            }
        ]},
        {'cccccccccccccccccccccccc': [
            {
                'icon': '',
                'location': 'pageNumber1'
            },
            {
                'icon': '',
                'location': 'pageNumber2'
            },
            {
                'icon': '',
                'location': 'pageNumber3'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            }
        ]},
        {'ddddddddddddddddddddddddddd': [
            {
                'icon': '',
                'location': 'pageNumber1'
            },
            {
                'icon': '',
                'location': 'pageNumber2'
            },
            {
                'icon': '',
                'location': 'pageNumber3'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            }
        ]},
        {'eee eeeee eee eeeee ee eeeeeeeeee': [
            {
                'icon': '',
                'location': 'pageNumber1'
            },
            {
                'icon': '',
                'location': 'pageNumber2'
            },
            {
                'icon': '',
                'location': 'pageNumber3'
            },
            {
                'icon': '',
                'location': 'pageNumber13'
            }
        ]}
    ]},
    {'PlaceholderL': [
        {'aaaa': [
            {
                'icon': '',
                'location': 'pageNumber31'
            },
            {
                'icon': '',
                'location': 'pageNumber42'
            },
            {
                'icon': '',
                'location': 'pageNumber53'
            }

        ]},
        {'bb bbbb': [
            {
                'icon': '',
                'location': 'pageNumber61'
            },
            {
                'icon': '',
                'location': 'pageNumber72'
            },
            {
                'icon': '',
                'location': 'pageNumber83'
            }

        ]},
        {'cc cccc cccccc': [
            {
                'icon': '',
                'location': 'pageNumber111'
            },
            {
                'icon': '',
                'location': 'pageNumber112'
            },
            {
                'icon': '',
                'location': 'pageNumber113'
            }

        ]},
        {'ddddddd dddddd dd': [
            {
                'icon': '',
                'location': 'pageNumber111'
            },
            {
                'icon': '',
                'location': 'pageNumber112'
            },
            {
                'icon': '',
                'location': 'pageNumber113'
            }

        ]}
    ]},
    {'PlaceholderR': [
        {'arthaus': [
            {
                'icon': '',
                'location': 'pageNumber31'
            },
            {
                'icon': '',
                'location': 'pageNumber42'
            },
            {
                'icon': '',
                'location': 'pageNumber53'
            }

        ]},
        {'barthaus': [
            {
                'icon': '',
                'location': 'pageNumber61'
            },
            {
                'icon': '',
                'location': 'pageNumber72'
            },
            {
                'icon': '',
                'location': 'pageNumber83'
            }

        ]}
    ]},
];

function getColor(n){
    // d3 chromatic color scales, schemeCategory10
    let colortext = "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf";
    return '#' + colortext.slice(n, n+6);
}

// From David Baron on StackOverflow
// https://stackoverflow.com/questions/4571813/why-is-this-javascript-function-so-slow-on-firefox
function getEmSize(el) {
    return Number(getComputedStyle(el[0], "").fontSize.match(/(\d+)px/)[1]);
}

// Add major categories in their divs to the screen
function addCategories(nav){

    let height = 0;

    course_structure.forEach( function(e, index){
        let div = $('<div>');
        let span = $('<span>');
        let text = Object.keys(e)[0];

        div.addClass('category');
        div.css('background-color', getColor(index));
        span.addClass('sideways');
        span.text(text);
        div.append(span);
        nav.append(div);

        // half-assing the height from string length and font size.
        height = Math.max(height, getEmSize(div) / 2 );

    });

    $('.category').css('height', height + 'em');

}

// Add subcategories next to the major category.
function addSubCategories(nav, catname){
    console.log(catname);

    // Continue here next time.
    let subcats = course_structure.find( e => Object.keys(e)[0] === catname );
    let subnavbox = $('<div>');
    let width = 0;

    subnavbox.addClass('subnavbox');
    nav.append(subnavbox);

    subcats[catname].forEach(function(sc, index){
        let div = $('<div>');
        let span = $('<span>');
        let text = Object.keys(sc)[0];

        div.addClass('subcat');
        div.css('background-color', getColor(index));
        div.css('display', 'none');
        span.text(text);
        div.append(span);
        subnavbox.append(div);

        width = Math.max(width, getEmSize(div) / 1.8 );

    });

    $('.subcat').css('width', (width + 2) + 'em');
    $('.subcat').show('slide', 500);
    $('.category').css('z-index', 10);

    // If they click on the category, go back.
    $('.category').off('click tap');
    $('.category').on('click tap', function(e){
        let that = this;
        console.log('here?');
        $('.subcat').hide('slow', function(){ $('.subcat').remove(); });
        $('.iconbox').hide('slow', function(){ $('.iconbox').remove(); });
        setTimeout(function(){
            $('.category').off('click tap');
            addListeners();
            $(that).siblings().show('slow');
        }, 600);
    });

}

function addNavIcons(nav, catname, subcatname){
    console.log(catname, subcatname);
    console.log(course_structure);

    // Continue here next time.
    let icons = course_structure
                    .find( e => Object.keys(e)[0] === catname )[catname]
                    .find( e => Object.keys(e)[0] === subcatname );
    console.log(icons)

    let iconbox = $('<div>');
    iconbox.addClass('iconbox');
    iconbox.css('display', 'none');
    $('.subnavbox').append(iconbox);

    icons[subcatname].forEach(function(link, index){
        let div = $('<div>');
        let span = $('<span>');
        let contents = $('<img src="http://placeskull.com/75/75/' + getColor(index).slice(1,7) + '"/>')

        div.addClass('icon');
        div.css('background-color', getColor(index));
        span.append(contents);
        div.append(span);
        iconbox.append(div);

    });

    iconbox.show('slide', {'direction': 'up'}, 500);

    // If they click on the subcategory, go back.
    $('.subcat').off('click tap');
    $('.subcat').on('click tap', function(e){
        $('.iconbox').hide('slow', function(){ $('.iconbox').remove(); });
        $(this).siblings().show('slow');
        $('.subcat').off('click tap');
        $('.subcat').on('click tap', function(){
            let subcatname = $(this).text();
            $(this).siblings().hide('slow');
            setTimeout(function(){
                addNavIcons(nav, catname, subcatname);
            }, 600);
        });
    });
}

function addListeners(){

    let nav = $('#stux_navbox');

    // When something is clicked, hide its siblings and bring in its children.
    $('.category').on('click tap', function(){
        $(this).siblings().hide('slow');
        let catname = $(this).text();
        setTimeout(function(){
            addSubCategories(nav, catname);
            $('.subcat').on('click tap', function(){
                let subcatname = $(this).text();
                $(this).siblings().hide('slow');
                setTimeout(function(){
                    addNavIcons(nav, catname, subcatname);
                }, 600);
            });
        }, 600);
    });
}


$(document).ready(function(){

    console.log('working');
    console.log(course_structure);

    let nav = $('#stux_navbox');
    let resetbutton = $('#stux_reset_navbox');

    resetbutton.on('click tap', function(){
        nav.empty();
        addCategories(nav);
        addListeners();
    });

    // Set up the stage.
    addCategories(nav);
    addListeners();

});
