/*jshint sub:true*/
/*jshint esversion: 6 */
/*jshint -W030 */

$(document).ready(function(){

  /* Image Preloader */
  //Adapted: https://css-tricks.com/snippets/jquery/image-preloader/
  $.preloadImages = function() {
  //Iterates over image array in arguments to ensure that they display at correct intervals
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};

$.preloadImages("https://lh3.googleusercontent.com/8tPNwyVPxzAeW80yKxDvNhpQXk6StvGrNkJ_DZNfZGwhzuUJR0KgStj_sytgWhJBYllzPSKThPODmzfD5EcpZshlMUrg6PkZssAazsp89qeHzBAU6m-MyvxOBV8xvU6WMhLuDu1jIkT32Dzl55N2B9bFh0CYjvHbwd9mY_rvqk0UffHgz3xUTRCrO86mBCGcF4hTS5xGll0Ez9d8kss2Vpdze92nPYGEZ5fZcRyRFigpRl56S0HCBwtq5xW6b42PvmmQJ9MnPy0FphWN2xE58MJPDTzjeq1gIC1M-IkMt93oYxjAKGv45phoMWGxvRilKu0sTZ5s9YhAt8_FBKtjDyZvd9ydd8rNRX0gKE2uapuYCREFCZ0LaCAey8W7V_uxLKDQC7JCkmqAEOVbGBuAh9sSPf5b0eyRyjACilaSOxZbzwT6mJ7lfhCVzmdPl60U9NV9G3qUk4sZmNLuPci6pwm63_ZaowQDrZeAfWA_FqB3xgp2NWkZuViV3d7Sa0PyqEblVZEMCq7vbzAS3XfVEt6z5_m55D9R4_JfrWMlc_7f2oEwvepsh3XoPLbnguD_p1g6Kf_DtUj_by6enahQzBV9pudjAIuaHW9iIobfpUeJG8Q=w441-h787-no", "https://lh3.googleusercontent.com/kpq1ur38NdL6gab-K2UmmT6-Q8uZebzBKL05LfDPgCdmoieUE-9d2A1abJmeGWvkJik7uxuY=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/gn8aTMt88lOq5Esol53wwPjzLJ0CVrwgEs5l2EUn1cMsQn4X-x_31VcooKbmgsyC9aZ8Rlr8=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/vqllDgJH17eeRYV7mC7yyXD8qv5TsLgZF4HZAUBWrsOs-K9zRABOcLxaGhc9parnTnNexDPm=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/pJ0rQ2jWxfIx1HrRSKRVnvH-tp5zHsplYWC84gQEN0HZL3NE0CNyYPmfJZ4ykUDoCbTdIf85=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/COUJQVBQKPJKGCU97S8pi-o1rY9vhbpfIfGt2z3iTAQoDy4OLtLsPzs0crjlK_TBbymzqmN3=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/bGbRS55Tt1xbmTEyN17uq4NviwYKtEmx8T1ukbyJIdi9AHWBxxyXj7zffUYssNvqGV5wClgD=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/sq48Yp8dQINnzLZBk23YUjazP7AIxROu9fy0lU3WVtixrzMzXX5o4L9-x8d2aOeOOgLUdTFW=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/rPG4cvFTm9nNo5EZ3y142VFdEP3_70d2GSGGbA4UcnpZ3vxDtdSUXG02seQzGWwx43oEXq6F=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/qRRvuhkOBOUY0bn7nmAo8bNsIMbXL3PGwmSCFsNLcbpISQpM8YjkXF56zmf3UUT686E-FWyW=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/pmVYTWxiZC0ImfJs4Ro_LBnmd5Aa49iRA1cxVWpwLagN1r1YC5L-mLiSYB6e4gLS2bZJQchN=w1920-h1080-rw-no", "https://lh3.googleusercontent.com/-wl4f2-PH_14/V_-gJRhxz4I/AAAAAAAAAEo/uCMjG2oEeYciQs8tSwxNgfntqnmoVb4KgCL0B/w530-d-h219-p-rw/1794728_10202006501428733_1648473097523840234_n%255B1%255D.jpg"); //Use google photos as host because other hosts generally don't allow permanent hotlinking
  
/* Timer */
  var timer,
      canvas = $("#myCanvas")[0],
      context = canvas.getContext("2d"),
      x = canvas.height / 2,
      y = canvas.width / 2,
      radius = 150,
      curPerc = 0,
      circ = Math.PI * 2,
      quart = Math.PI / 2;

  context.lineWidth = 10;
  context.strokeStyle = "white";



 function animate(current) {
   // Time for stroke to complete full arc = 106 seconds
   $("#time").html(106 - curPerc + "<p>seconds</p>");  
   context.clearRect(0, 0, canvas.width, canvas.height);
     context.beginPath();
     context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
     context.stroke();
     if (curPerc <= 106) {
         window.requestAnimationFrame(function () {
             animate(curPerc / 106);
         });
     }
   
 }


/* Functions */
  // Adapted: http://stackoverflow.com/questions/32680614/jquery-hide-all-div-click-function-issue-with-appendto-content
  function showText (message, id, destination, delay) {
    //Show text by word with popup effect
    //Use class and not ID because calling hide() should hide the entire block and not just a particular word
    var text = "<span class = '" + id + "'>" + message.split(" ").join(" </span><span class = '" + id + "'>") + "</span>";

      $(text).hide(0).appendTo(destination).each(function (x) {
          $(this).delay(delay * x).show(0).animate({fontSize: "1.1 em"}, 200);
      });
  }
  // Adapted: http://stackoverflow.com/questions/7264974/show-text-letter-by-letter
  function showText2 (target, message, index, interval, ID, white = 0, noSpace = 0) {
    // Show text by word WITHOUT popup effect
    white === 0 ? $("#mainText").append("<span id = '" + ID + "'></span>") : $("#mainText").append("<span id = '" + ID + "' class = 'white'></span>");
    if (index < message.length) {
      (index == message.length - 1 && noSpace === 0) ? $(target).append(message[index++]) : noSpace == 1 ? $(target).html(message[index++]) : $(target).append(message[index++] + " ");
      setTimeout (function () { 
        showText2(target, message, index, interval, ID, white, noSpace); 
      }, interval);
    }
  }
  

  function numberUp (starting, number, target, speed) {
    //Function to increment integer at set speed
    var interval,
        originalNumber = starting;
    
    interval = setInterval(function(){
      $(target).html(originalNumber);
      originalNumber += 1;
      if (originalNumber == number) {
        clearInterval(interval);
      }
    }, speed);
  }

  
/* Introduction */
  var intro = {
    opening: "<span id = 's1'>Presenting...</span>",
    para1: "Why anyone would ever hire <em>Leonard</em>",
    para2: "<p id = 'para2' class = 'white'>Aka an elevator pitch of himself.</p>",
    time1: "<span id = 'time1'></span>",
    para3: " reasons...",
    pic: "<div id = 'pic0'><img src = 'https://lh3.googleusercontent.com/uejTI-Xcp9PeLQkiWd9Qstrwz_SUBE789GjtwiA86Y3lHI4_Dyo-js_8Dsmfz857ZgJRc5w0hDQ=w441-h787-no' class = 'img-responsive'></img></div>"
  }; 
  

  function start(){
    $(intro["opening"]).hide().appendTo("#mainText").delay(500).show(0).animate({fontSize: "5vw"}, 500).hide(0);
//Use vw and not em for better responsive effect
    
    setTimeout (function () { 
      $("body").css("background-color", "black");
      showText(intro["para1"], "para1", "#mainText", 200);
    }, 1000);

    setTimeout (function () {
      $(".para1").remove(); //.remove method cleaner than .hide
      $(intro["para2"]).appendTo("#mainText");
    }, 3000);

    setTimeout (function () {
      $("body").css("background-color", "white");
      $("#para2").remove();
      showText2 ("#para3", intro["para3"].split(" "), 0, 500, "para3");
      $(intro["time1"]).prependTo("#para3");
      numberUp(0, 7, "#time1", 20);
    }, 4000);

    setTimeout (function () {
      $("#para3").fadeOut(500, function() { $(this).remove(); });
      $("body").css("background-color", "black");
      $("#timer").show();
      numberUp(0, 107, "#time", 3);
      timer = setInterval(function() {
      //Interval function to start entire timer
        animate();
        curPerc++;
        if (curPerc == 106){
          clearInterval(timer);
        }
      }, 1000);
    }, 5000);

    setTimeout (function () {
      $("#timer").hide();
      $(intro["pic"]).appendTo("#mainText"); 
    }, 7000);
    
    setTimeout (function () {
      $("#pic0").remove();
      scene1();
    }, 8000);
  }

/* First Scene */
  var s1 = {
    opening: "Don't blink.",
    sceneNo: "<span id = 'scene' class = 'white'>#1</span>",
    p1: "He gives his <em>best</em> at all times",
    p2: "<span id = 'p2'>And best is (mostly) decent</span>",
    p3: "<span id = 'p3'>It got him these</span>",
    pic1: "<div id = 'pic1'><img src = 'https://lh3.googleusercontent.com/kpq1ur38NdL6gab-K2UmmT6-Q8uZebzBKL05LfDPgCdmoieUE-9d2A1abJmeGWvkJik7uxuY=w1920-h1080-rw-no' class = 'img-responsive'></img><img src = 'https://lh3.googleusercontent.com/gn8aTMt88lOq5Esol53wwPjzLJ0CVrwgEs5l2EUn1cMsQn4X-x_31VcooKbmgsyC9aZ8Rlr8=w1920-h1080-rw-no' class = 'img-responsive'></img></div>",
    p4: "<span id = 'p4'>And these</span>",
    pic2: "<div id = 'pic2'><img src = 'https://lh3.googleusercontent.com/vqllDgJH17eeRYV7mC7yyXD8qv5TsLgZF4HZAUBWrsOs-K9zRABOcLxaGhc9parnTnNexDPm=w1920-h1080-rw-no' class = 'img-responsive'></img><img src = 'https://lh3.googleusercontent.com/pJ0rQ2jWxfIx1HrRSKRVnvH-tp5zHsplYWC84gQEN0HZL3NE0CNyYPmfJZ4ykUDoCbTdIf85=w1920-h1080-rw-no' class = 'img-responsive'></img><img src = 'https://lh3.googleusercontent.com/COUJQVBQKPJKGCU97S8pi-o1rY9vhbpfIfGt2z3iTAQoDy4OLtLsPzs0crjlK_TBbymzqmN3=w1920-h1080-rw-no' class = 'img-responsive'></img></div>"
  };
  
  function scene1(){
        
    setTimeout (function () {
      showText2 ("#openingID", s1["opening"].split(" "), 0, 250, "openingID", 1);
    }, 0);
    
    setTimeout (function () {
      $("#openingID").animate({fontSize: "20vw"}, 500).hide(0);
    }, 1000);
    
    
    setTimeout (function () {
      $("#openingID").remove();
      $(s1["sceneNo"]).appendTo("#mainText");
    }, 1500);    
  
    setTimeout (function () {
      $("#scene").remove();
      $("body").css("background-color", "white");
      showText (s1["p1"], "p1", "#mainText", 150);
    }, 2000);
    
    
    setTimeout (function () {
      $(".p1").remove();
      $(s1["p2"]).appendTo("#mainText");
    }, 3500);
    
    setTimeout (function () {
      $("#p2").remove();
      $(s1["p3"]).appendTo("#mainText");
    }, 4500);
    
    setTimeout (function () {
      $("#p3").remove();
      $(s1["pic1"]).appendTo("#mainText");      
    }, 5500);
    
    setTimeout (function () {
      $("#pic1").remove();
      $(s1["p4"]).appendTo("#mainText");
    }, 7500);
    
    setTimeout (function () {
      $("#p4").remove();
      $(s1["pic2"]).appendTo("#mainText");
    }, 8000);
    
    setTimeout (function () {
      $("#pic2").remove();
      scene2();
    }, 10000);
    
  }

/* Second Scene */ 
  var s2 = {
    p1: ["It got him a full scholarship", "And a predicted 2:1 at law school"],
    p2: "<span id = 'p22' class = 'white'>But chances are</span>",
    p3: '<span id = "p23" class = "white">Many make "best" look <em>bad</em></span>',
    p4: "<span id = 'p24'>And he used to be <em>worse</em></span>",
    pic1: "<div id = 'pic21'><img src = 'https://lh3.googleusercontent.com/bGbRS55Tt1xbmTEyN17uq4NviwYKtEmx8T1ukbyJIdi9AHWBxxyXj7zffUYssNvqGV5wClgD=w1920-h1080-rw-no' class = 'img-responsive'></img></div>",
    p5: "<span id = 'p25'><em>A lot</em> worse</span>",
    pic2: "<div id = 'pic22'><img src = 'https://lh3.googleusercontent.com/sq48Yp8dQINnzLZBk23YUjazP7AIxROu9fy0lU3WVtixrzMzXX5o4L9-x8d2aOeOOgLUdTFW=w1920-h1080-rw-no' class = 'img-responsive'></img></div>",
    p6: "<span id = 'p26'>According to his testimonials...</span>",
    p7: "<span id = 'p27'>He turned things around by</span>",
    p8: '<span id = "p28">"Constantly ' + '<span id = "quotes"></span>"</span>',
    quotes: ["striving to exceed himself", "pushing his boundaries",
 "seeking to ameliorate his weaknesses"],
    p9: "<span id = 'p29'>The point is</span>",
    p10: "<span id = 'p210' class = 'white'>#2</span>",
    p11: '<span id = "p211" class = "white">"Best" keeps getting <em>better and better</em></span>',
    p12: "<span id = 'p212' class = 'white'>Just like the next</span>"
  };
  
  function scene2(){
    setTimeout (function () {
      $("body").css("background-color", "black");
      showText2 ("#p21", s2["p1"], 0, 750, "p21", 1, 1);
    }, 0);
    
    setTimeout (function () {
      $("#p21").remove();
      $(s2["p2"]).appendTo("#mainText");
    }, 2000);
    
    setTimeout (function () {
      $("#p22").remove();
      $(s2["p3"]).appendTo("#mainText");
    }, 3000);
    
    setTimeout (function () {
      $("#p23").remove();
      $("body").css("background-color", "white");
      $(s2["p4"]).appendTo("#mainText");
    }, 4000);
    
    setTimeout (function () {
      $("#p24").remove();
      $(s2["pic1"]).appendTo("#mainText");
    }, 5000);
    
    setTimeout (function () {
      $("#pic21").remove();
      $(s2["p5"]).appendTo("#mainText");
    }, 6500);
    
    setTimeout (function () {
      $("#p25").remove();
      $(s2["pic2"]).appendTo("#mainText");
    }, 7500);
    
    setTimeout (function () {
      $("#pic22").remove();
      $(s2["p6"]).appendTo("#mainText");
    }, 9000);
    
    setTimeout (function () {
      $("#p26").remove();
      $(s2["p7"]).appendTo("#mainText");
    }, 9500);
    
    setTimeout (function () {
      $("#p27").remove();
      $("#mainText").append(s2["p8"]);
      for (var x = 0; x < s2["quotes"].length; x++){
        setTimeout (function (y) {
          $("#quotes").html("");
          showText2 ("#quotes", s2["quotes"][y].split(" "), 0, 200, "quotes");
        }, 1000*x, x);
      }
    }, 10500);
        
    setTimeout (function () {
      $("#p28").remove();
      $(s2["p9"]).appendTo("#mainText");
    }, 14000);
    
    setTimeout (function () {
      $("#p29").remove();
      $("body").css("background-color", "black");
      $(s2["p10"]).appendTo("#mainText");
    }, 14500);
    
    setTimeout (function () {
      $("#p210").remove();
      $(s2["p11"]).hide().appendTo("#mainText").fadeIn();
    }, 15000);
    
    setTimeout (function () {
      $("#p211").remove();
      $(s2["p12"]).appendTo("#mainText");
    }, 16000);
    
    
    setTimeout (function () {
      $("#p212").remove();
      scene3();
    }, 16500);
  }

  
/* Third Scene */
  var s3 = {
    p1: "<span id = 'p31' class = 'white'>#3</span>",
    p2: "He commits to causes, and stays committed",
    p3: "Like <em>mentorship</em>",
    p4: "For a friend <br> Someone from another school <br> Or an online acquaintance",
    p5: "In national examinations <br> Drafting mock legislation <br> Or giving general advice",
    p6: "<span id = 'p36'>All may indulge freely in his limited knowledge</span>"
  };
  
  function scene3(){
    setTimeout (function () {
      $("body").css("background-color", "black");
      $("#timer").show();
    }, 0);
    
    setTimeout (function () {
      $("#timer").hide();
  $(s3["p1"]).appendTo("#s3p1").animate({fontSize: "10em"}, 600).hide(0);
    }, 500);
    
    setTimeout (function () {
      $(s3["p1"]).remove();
      $("body").css("background-color", "white");
      showText (s3["p2"], "p32", "#mainText", 150);
    }, 1000);
    
    setTimeout (function () {
      $(".p32").remove();
      showText (s3["p3"], "p33", "#mainText", 150);
    }, 2500);
    
    setTimeout (function () {
      $(".p33").remove();
      $("#mainText").append("<span id = 'p34'></span>");
      showText2 ("#p34", s3["p4"].split(" "), 0, 200);
    }, 3500);
    
    setTimeout (function () {
      $("#p34").remove();
      $("#mainText").append("<span id = 'p35'></span>");
      showText2 ("#p35", s3["p5"].split(" "), 0, 200);
    }, 6500);

    setTimeout (function () {
      $("#p35").remove();
      $(s3["p6"]).hide().appendTo("#mainText").fadeIn();
    }, 9500);
    
    
    setTimeout (function () {
      $("#p36").remove();
      scene4();
    }, 11000);
  }
  
  
/* Fourth Scene */
  var s4 = {
    p1: "<span id = 'p41' class = 'white'>He didn't win any medals for that</span>",
    p2: "<span id = 'p42' class = 'white'>... or for anything else</span>",
    p3: "<span id = 'p43' class = 'white'>(Unlike the rest)</span>",
    p4: "What he did instead...",
    p5: "<span id = 'p45' class = 'white'>#4</span>",
    list: ["Managed a Chinese music online forum", "Administrated South-East Asian gaming channels at Garena", "Founded his high school's contemporary music club", "Developed learning pedegogies for military officers", "Picked up programming at law school", "Fell in love (with blockchains)", "And ditched traditional contracts for smart contracts"],
    p6: "<span id = 'p46'>So some call him an innovator</span>",
    p7: "<span id = 'p47'>Others a <em>rebel</em></span>"
  };
  
  function scene4(){
    setTimeout (function () {
      $("body").css("background-color", "black");
      $(s4["p1"]).appendTo("#mainText");
    }, 0);
    
    setTimeout (function () {
      $("#p41").remove();
      $("#timer").show();
    }, 1500);
    
    setTimeout (function () {
      $("#timer").hide();
      $(s4["p2"]).appendTo("#mainText");
    }, 2000);
    
    setTimeout (function () {
      $("#p42").remove();
      $(s4["p3"]).appendTo("#mainText");
    }, 3000);
    
    setTimeout (function () {
      $("#p43").remove();
      showText2 ("#p44", s4["p4"].split(" "), 0, 200, "p44", 1);
    }, 3500);
    
    setTimeout (function () {
      $("#p44").remove();
      $(s4["p5"]).appendTo("#mainText").animate({fontSize: "40vw"}, 600).hide(0);
    }, 5000);
    
    setTimeout (function () {
      $("#p45").remove();
      $("body").css("background-color", "white");
      for (var x = 0; x < s4["list"].length; x++){
        setTimeout (function (y) {
          $(".list").html("");          
          showText (s4["list"][y], "list", "#mainText", 150);
        }, 1500*x, x);
      }
    }, 5500);
    
    setTimeout (function () {
      $(".list").remove();
      $(s4["p6"]).appendTo("#mainText");
    }, 16000);
    
    setTimeout (function () {
      $("#p46").remove();
      $(s4["p7"]).appendTo("#mainText").animate({fontSize: "1.5em"}, 200);
    }, 17000);
    
    setTimeout (function () {
      $("#p47").remove();
      scene5();
    }, 18000);
  }

  /* Fifth Scene */
  var s5 = {
    p1: "Nevertheless they all agree that",
    p2: "<span id = 'p52' class = 'white'>#5</span>",
    p3: "Leonard has a <em>big bag of tricks</em>",
    p4: "He cooks <em>all</em> his meals",
    pic1: "<div id = 'pic51'><img src = 'https://lh3.googleusercontent.com/rPG4cvFTm9nNo5EZ3y142VFdEP3_70d2GSGGbA4UcnpZ3vxDtdSUXG02seQzGWwx43oEXq6F=w1920-h1080-rw-no' class = 'img-responsive'></img></div>",
    p5: "Bakes occasionally (and shares!)",
    pic2: "<div id = 'pic52'><img src = 'https://lh3.googleusercontent.com/qRRvuhkOBOUY0bn7nmAo8bNsIMbXL3PGwmSCFsNLcbpISQpM8YjkXF56zmf3UUT686E-FWyW=w1920-h1080-rw-no' class = 'img-responsive'></img></div>",
    p6: "Studied speech level singing",
    pic3: "<div id = 'pic53'><p>Like him!</p><p><img src = 'https://lh3.googleusercontent.com/pmVYTWxiZC0ImfJs4Ro_LBnmd5Aa49iRA1cxVWpwLagN1r1YC5L-mLiSYB6e4gLS2bZJQchN=w1920-h1080-rw-no' class = 'img-responsive'></p></img></div>", //Image from Wikipedia
    p7: "Played most of the popular video games",
    pic4: "<div id = 'pic54'><p>10 years before law school</p><p><img src = 'https://lh3.googleusercontent.com/-wl4f2-PH_14/V_-gJRhxz4I/AAAAAAAAAEo/uCMjG2oEeYciQs8tSwxNgfntqnmoVb4KgCL0B/w530-d-h219-p-rw/1794728_10202006501428733_1648473097523840234_n%255B1%255D.jpg' class = 'img-responsive'></img></p></div>",
    p8: "And is a health and fitness junkie",
    p9: "<span id = 'p59'>(See for yourself in person!)</span>"
  };

  function scene5(){
    setTimeout (function () {
      showText2 ("#p51", s5["p1"].split(" "), 0, 200, "p51");
    }, 0);
    
    setTimeout (function () {
      $("#p51").remove();
      $("body").css("background-color", "black");
      $(s5["p2"]).appendTo("#mainText").animate({fontSize: "40vw"}, 600).hide(0);
    }, 1500);
       
    setTimeout (function () {
      $("#p52").remove();
      $("body").css("background-color", "white");
      showText (s5["p3"], "p53", "#mainText", 200);
    }, 2000);
    
    setTimeout (function () {
      $(".p53").remove();
      $("body").css("background-color", "black");
      $("#timer").show();
    }, 3500);
    
    setTimeout (function () {
      $("#timer").hide();
      $("body").css("background-color", "white");
      showText2 ("#p54", s5["p4"].split(" "), 0, 200, "p54");
    }, 4000);
    
    setTimeout (function () {
      $("#p54").remove();
      $(s5["pic1"]).appendTo("#mainText");
    }, 5500);
    
    setTimeout (function () {
      $("#pic51").remove();
      showText2 ("#p55", s5["p5"].split(" "), 0, 200, "p55");
    }, 6500);
    
    setTimeout (function () {
      $("#p55").remove();
      $(s5["pic2"]).appendTo("#mainText");
    }, 8000);
    
    setTimeout (function () {
      $("#pic52").remove();
      showText2 ("#p56", s5["p6"].split(" "), 0, 200, "p56");
    }, 9000);
    
    setTimeout (function () {
      $("#p56").remove();
      $(s5["pic3"]).appendTo("#mainText");
    }, 10500);
    
    setTimeout (function () {
      $("#pic53").remove();
      showText2 ("#p57", s5["p7"].split(" "), 0, 200, "p57");
    }, 11500);
    
    setTimeout (function () {
      $("#p57").remove();
      $(s5["pic4"]).appendTo("#mainText");
    }, 13000);
    
    setTimeout (function () {
      $("#pic54").remove();
      showText2 ("#p58", s5["p8"].split(" "), 0, 200, "p58");
    }, 14000);
    
    setTimeout (function () {
      $("#p58").remove();
      $(s5["p9"]).appendTo("#mainText");
    }, 16000);
    
    setTimeout (function () {
      $("#p59").remove();
      scene6(); 
    }, 17000);
  }
  

/* Sixth Scene */
  var s6 = {
    p1: "<span id = 'p61'>A few quotes from his testimonials to finish off...</span>",
    p2: "<span id = 'p62'>#6</span>",
    adjectives: "Confident Assiduous Adjuvant Responsible Disciplined Well-Respected Perseverant Efficient Conscientious Intelligent Analytical Aggressive Go-Getter Candid Confident Focused Sharp Analytical Systematic Level-Headed Task-Oriented Stable Self-Possessed Well-Mannered Sincere Driven Enthusiastic Unselfish Diligent Motivated Receptive Fair Flexible Leader Team-Player",
    p3: "<span id = 'p63'>The remaining time is dedicated to...</span>",
    p4: "<span id = 'p64'>... redirecting you to another marketing pitch!</span>",
    p5: "<span id = 'p65'>It's his debut article on medium named...</span>",
    p6: '<span id = "p66">"<em>Mental illnesses</em> and the <em>pragmatic employer</em>>"</span>',
    p7: "<span id = 'p67'>(Link provided on the ending page)</span>",
    p8: "<span id = 'p68'>Chances of someone you know becoming a sufferer: <em>1 in 5</em></span>",
    p9: "<span id = 'p69'>You're make a <em>big</em> contribution to the cause just by reading it</span>",
    p10: "<span id = 'p610'>Thanks for watching and have a GREAT week ahead!</span>"
  };
  
  function scene6(){
    setTimeout (function () {
      $("body").css("background-color", "black");
      $("#mainText").css("color", "white");
      $(s6["p1"]).appendTo("#mainText");
    }, 0);
    
    setTimeout (function () {
      $("#p61").remove();
      $(s6["p2"]).appendTo("#mainText").animate({fontSize: "40vw"}, 600).hide(0);
    }, 1000);
   
    //Local function looping through adjectives
    var y = 0,
        adjectives2 = s6["adjectives"].split(" ");
    
    function loop(){
      if (y < adjectives2.length){
        $("#adjectives").html(adjectives2[y]);
        y++;
        setTimeout(loop, 300);
      }
    }
    
    setTimeout (function () {
      $("#p62").remove();
      $("#timer").show();
      $("#time").attr("id", "adjectives"); //Change #time ID to #adjectives to disconnect timer function and loop adjectives instead
      loop();
    }, 2000);
    
   setTimeout (function () {
      $("#timer").fadeOut(400, function() { $(this).remove(); });
     //Removes timer to prevent #timer from acting as a hidden overlay over links in #contact and making them unclickable
    }, 13000);
    
    setTimeout (function () {
      $(s6["p3"]).hide().appendTo("#mainText").fadeIn();
    }, 14000);
    
    setTimeout (function () {
      $("#p63").remove();
      $(s6["p4"]).hide().appendTo("#mainText").fadeIn();
    }, 16000);
    
    setTimeout (function () {
      $("#p64").remove();
      $(s6["p5"]).appendTo("#mainText");
    }, 18000);
    
    setTimeout (function () {
      $("#p65").remove();
      $(s6["p6"]).hide().appendTo("#mainText").fadeIn();
    }, 20000);
    
    setTimeout (function () {
      $("#p66").remove();
      $(s6["p7"]).hide().appendTo("#mainText").fadeIn();
    }, 22000);
    
    setTimeout (function () {
      $("#p67").remove();
      $(s6["p8"]).hide().appendTo("#mainText").fadeIn();
    }, 24000);
    
    setTimeout (function () {
      $("#p68").remove();
      $(s6["p9"]).hide().appendTo("#mainText").fadeIn();
    }, 26000);
    
    setTimeout (function () {
      $("#p69").remove();
      $(s6["p10"]).hide().appendTo("#mainText").fadeIn();
    }, 28000);
    
   setTimeout (function () {
     $("#p610").remove();
     $("body").css("background-color", "white");
     $("html, body").css("overflow", "visible"); //Allows smaller devices to scroll through page
     $("#contact").fadeIn();
    }, 30000);
  }

  start();
  
});