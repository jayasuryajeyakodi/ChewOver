var everything = [];

function ShowHideDiv() {
  var multiSelect = document.getElementById("multiSelect");
  var singleSelect = document.getElementById("singleSelect");
  if (selectionDropDown.value == "M") {
    console.log("singleSelect found");
    singleSelect.style.display = "block";
    multiSelect.style.display = "none";
  }
  else if (selectionDropDown.value == "S") {
    console.log("multiSelect found");
    multiSelect.style.display = "block";
    singleSelect.style.display = "none";
  }
  console.log("everything is below :");
  console.log(everything);
};

function SSButtonHandler() {
  var singleSelect = document.getElementById("singleSelect").value;
  document.getElementById("radioTitle").innerText = document.getElementById('gender').value;
  console.log("value is " + document.getElementById('gender').value);
  document.getElementById("radioEditor").style.display = "block"
  console.log("Done Selected for SS");
  var form_elements = document.getElementById('SSForm').elements;
  var selectedGender = form_elements['gender'].value;
  console.log(form_elements['gender'][0]);
  everything.push(
    {
      "type": "singleSelect",
      "value": form_elements['gender'].value,
      "values": form_elements['gender']
    });
  UpdateEverything();
};

function UpdateEverything() {
  console.log("Updating everything");
  everything.forEach(function (element) {
    if (element.type == "singleSelect") {
      console.log("single select found, updating !");
      /*
      var form = document.getElementById("everythingForm");

      element.values.forEach(function(el){
        var i = document.createElement("input");
        i.setAttribute('type',"radio");
        i.setAttribute('name',"testName");
        form.appendChild(el);
      });
      */
      // e.appendChild(element.values);
    }
  });
}

var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);