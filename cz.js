
 /*
     ___________
    /   _  _    \
   /   /_   \_   \
  /_______________\
  \_______________/

  Original Distribution from cordzip
  credit if in use

  for specific user only!

  should not distribute, if want to share to other
  send official link https://cordzip.github.io/ 
  this is made for commercial,personal use,

  Please add
  <license src="https://cordzip.web.app/license.html"></license>

  Ask Us at https://cordzip.web.app/contact.html  
  
 
    */

/* Import assets and needs Automatically*/

function add_css() {
document.write(
    '<link rel="stylesheet"',
     'href="cz.css"/>',
    '<link rel="stylesheet"',
     'href="https://cordzip.github.io/cz.css"/>',
    '<link rel="stylesheet"',
     'href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.css"/>',
    );
}

function add_css_local() {
    document.write(
        '<link rel="stylesheet"',
         'href="cz.css"/>',
        '<link rel="stylesheet"',
         'href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.css"/>',
        );
    }

    function add_css_fontawesome() {
        document.write(
            '<link rel="stylesheet"',
             'href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.css"/>',
            );
        }
        
/*Console*/
var greeting = ("Welcome to CZ Console");
console.log(greeting);

var verify = console > '%5'; const pages = ('<HTMLElement> > ${pages}');
const start = ('true', true); const console_comment = 'console';
document < `${pages}` ? 'continue' : verify;

document < verify ? verify : 'continue'
console < matchMedia('error') ? start.verify : 'continue'
    var log_comment = ('/:function', "Uncaught TypeError: %reason%")

console_comment < true ? log_comment : 'continue';
/*Menu*/
function menu() {
    /*One click opens menu, Second Click closes the menu*/
       menuu = document.getElementById("menu")
        menuu.classList.toggle("hide");
}


/*page1*/

function page1() {
   
    document.getElementById("page1").classList.remove("hide");

    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");


}


/*page2*/

function page2() {
    document.getElementById("page2").classList.remove("hide");

    
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");


}


/*page3*/

function page3() {
    document.getElementById("page3").classList.remove("hide");

    
    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
    document.getElementById("page5").classList.add("hide");

    

}


/*page4*/

function page4() {
    document.getElementById("page4").classList.remove("hide");

    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page5").classList.add("hide");
}


/*page5*/

function page5() {
    document.getElementById("page5").classList.remove("hide");

    document.getElementById("page1").classList.add("hide");
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");
    document.getElementById("page4").classList.add("hide");
}

/*slider1*/

function slider1() {
   
    document.getElementById("slider1").classList.remove("hide");

    document.getElementById("slider2").classList.add("hide");
    document.getElementById("slider3").classList.add("hide");
    document.getElementById("slider4").classList.add("hide");
    document.getElementById("slider5").classList.add("hide");


}


/*slider2*/

function slider2() {
    document.getElementById("slider2").classList.remove("hide");

    document.getElementById("slider1").classList.add("hide");
    document.getElementById("slider3").classList.add("hide");
    document.getElementById("slider4").classList.add("hide");
    document.getElementById("slider5").classList.add("hide");


}


/*slider3*/

function slider3() {
    document.getElementById("slider3").classList.remove("hide");

    
    document.getElementById("slider1").classList.add("hide");
    document.getElementById("slider2").classList.add("hide");
    document.getElementById("slider4").classList.add("hide");
    document.getElementById("slider5").classList.add("hide");

    

}


/*slider4*/

function slider4() {
    document.getElementById("slider4").classList.remove("hide");

    document.getElementById("slider1").classList.add("hide");
    document.getElementById("slider2").classList.add("hide");
    document.getElementById("slider3").classList.add("hide");
    document.getElementById("slider5").classList.add("hide");
}


/*slider5*/

function slider5() {
    document.getElementById("slider5").classList.remove("hide");

    document.getElementById("slider1").classList.add("hide");
    document.getElementById("slider2").classList.add("hide");
    document.getElementById("slider3").classList.add("hide");
    document.getElementById("slider4").classList.add("hide");
}


/*
   __              ______
  |  \      /\     |_   _|     /\
  |   |    /  \      | |      /  \
  |   |   / /\ \     | |     / /\ \
  |__/   /______\    |_|    /______\


*/

dataPack = document.cookie;
let set = [setData = dataPack];

/*Get Data from a - g*/
function getdata() {
    localStorage.setItem("a", document.getElementById("a").value);
    localStorage.setItem("b", document.getElementById("b").value);
    localStorage.setItem("c", document.getElementById("c").value);
    localStorage.setItem("d", document.getElementById("d").value);
    localStorage.setItem("e", document.getElementById("e").value);
    localStorage.setItem("f", document.getElementById("f").value);
    localStorage.setItem("g", document.getElementById("g").value);
}

/*Deletes Data from a - g*/
function deldata() {
    localStorage.clear("a", document.getElementById("a").value);
    localStorage.clear("b", document.getElementById("b").value);
    localStorage.clear("c", document.getElementById("c").value);
    localStorage.clear("d", document.getElementById("d").value);
    localStorage.clear("e", document.getElementById("e").value);
    localStorage.clear("f", document.getElementById("f").value);
    localStorage.clear("g", document.getElementById("g").value);
}

/*Gets Local Data a - g to result page*/
function getLocal() {
    document.getElementById("a-txt").innerText =  localStorage.getItem("a");
    document.getElementById("b-txt").innerText =  localStorage.getItem("b");
    document.getElementById("c-txt").innerText =  localStorage.getItem("c");
    document.getElementById("d-txt").innerText =  localStorage.getItem("d");
    document.getElementById("e-txt").innerText =  localStorage.getItem("e");
    document.getElementById("f-txt").innerText =  localStorage.getItem("f");
    document.getElementById("g-txt").innerText =  localStorage.getItem("g");


}

/*Unsecurely Gets Local Data a - g to result page*/
function unsecure_getLocal() {
    document.getElementById("a-txt").innerHTML =  localStorage.getItem("a");
    document.getElementById("b-txt").innerHTML =  localStorage.getItem("b");
    document.getElementById("c-txt").innerHTML =  localStorage.getItem("c");
    document.getElementById("d-txt").innerHTML =  localStorage.getItem("d");
    document.getElementById("e-txt").innerHTML =  localStorage.getItem("e");
    document.getElementById("f-txt").innerHTML =  localStorage.getItem("f");
    document.getElementById("g-txt").innerHTML =  localStorage.getItem("g");

    
}

/*Sends a - g to result page*/
function uptLocal() {
    localStorage.setItem("a", document.getElementById("a").value);
    document.getElementById("a-txt").innerText =  localStorage.getItem("a");
    localStorage.setItem("b", document.getElementById("b").value);
    document.getElementById("b-txt").innerText =  localStorage.getItem("b");
    localStorage.setItem("c", document.getElementById("c").value);
    document.getElementById("c-txt").innerText =  localStorage.getItem("c");
    localStorage.setItem("d", document.getElementById("d").value);
    document.getElementById("d-txt").innerText =  localStorage.getItem("d");
    localStorage.setItem("e", document.getElementById("e").value);
    document.getElementById("e-txt").innerText =  localStorage.getItem("e");
    localStorage.setItem("f", document.getElementById("f").value);
    document.getElementById("f-txt").innerText =  localStorage.getItem("f");
    localStorage.setItem("g", document.getElementById("g").value);
    document.getElementById("g-txt").innerText =  localStorage.getItem("g");
}

/*Sends & Gets Local Data a - g to result page*/
function uptLocal() {
    localStorage.setItem("a", document.getElementById("a").value);
    document.getElementById("a-txt").innerText =  localStorage.getItem("a");
    localStorage.setItem("b", document.getElementById("b").value);
    document.getElementById("b-txt").innerText =  localStorage.getItem("b");
    localStorage.setItem("c", document.getElementById("c").value);
    document.getElementById("c-txt").innerText =  localStorage.getItem("c");
    localStorage.setItem("d", document.getElementById("d").value);
    document.getElementById("d-txt").innerText =  localStorage.getItem("d");
    localStorage.setItem("e", document.getElementById("e").value);
    document.getElementById("e-txt").innerText =  localStorage.getItem("e");
    localStorage.setItem("f", document.getElementById("f").value);
    document.getElementById("f-txt").innerText =  localStorage.getItem("f");
    localStorage.setItem("g", document.getElementById("g").value);
    document.getElementById("g-txt").innerText =  localStorage.getItem("g");
}

/*Unsecurely Sends & Gets Local Data a - g to result page*/
function unsecure_uptLocal() {
    localStorage.setItem("a", document.getElementById("a").value);
    document.getElementById("a-txt").innerHTML =  localStorage.getItem("a");
    localStorage.setItem("b", document.getElementById("b").value);
    document.getElementById("b-txt").innerHTML =  localStorage.getItem("b");
    localStorage.setItem("c", document.getElementById("c").value);
    document.getElementById("c-txt").innerHTML =  localStorage.getItem("c");
    localStorage.setItem("d", document.getElementById("d").value);
    document.getElementById("d-txt").innerHTML =  localStorage.getItem("d");
    localStorage.setItem("e", document.getElementById("e").value);
    document.getElementById("e-txt").innerHTML =  localStorage.getItem("e");
    localStorage.setItem("f", document.getElementById("f").value);
    document.getElementById("f-txt").innerHTML =  localStorage.getItem("f");
    localStorage.setItem("g", document.getElementById("g").value);
    document.getElementById("g-txt").innerHTML =  localStorage.getItem("g");
}

function upt_db() {
 
    bytes01 = localStorage.setItem("a", document.getElementById("a").value);
    document.getElementById("a-txt").innerText = dataPack = localStorage.getItem("a");
    
    bytes02 = localStorage.setItem("b", document.getElementById("b").value);
    document.getElementById("b-txt").innerText = dataPack = localStorage.getItem("b");
    
    bytes03 = localStorage.setItem("c", document.getElementById("c").value);
    document.getElementById("c-txt").innerText = dataPack = localStorage.getItem("c");
    
    bytes04 = localStorage.setItem("d", document.getElementById("d").value);
    document.getElementById("d-txt").innerText = dataPack = localStorage.getItem("d");
    
    bytes05 = localStorage.setItem("e", document.getElementById("e").value);
    document.getElementById("e-txt").innerText = dataPack = localStorage.getItem("e");
    
    bytes06 = localStorage.setItem("f", document.getElementById("f").value);
    document.getElementById("f-txt").innerText = dataPack = localStorage.getItem("f");
    
    bytes07 = localStorage.setItem("g", document.getElementById("g").value);
    document.getElementById("g-txt").innerText = dataPack = localStorage.getItem("g");
    
    setData = [bytes[bytes01, bytes02, bytes03, bytes04, bytes05, bytes06, bytes07]];

}

function unsecure_upt_db() {
 
    bytes01 = localStorage.setItem("a", document.getElementById("a").value);
    document.getElementById("a-txt").innerHTML = dataPack = localStorage.getItem("a");
    
    bytes02 = localStorage.setItem("b", document.getElementById("b").value);
    document.getElementById("b-txt").innerHTML= dataPack = localStorage.getItem("b");
    
    bytes03 = localStorage.setItem("c", document.getElementById("c").value);
    document.getElementById("c-txt").innerHTML = dataPack = localStorage.getItem("c");
    
    bytes04 = localStorage.setItem("d", document.getElementById("d").value);
    document.getElementById("d-txt").innerHTML = dataPack = localStorage.getItem("d");
    
    bytes05 = localStorage.setItem("e", document.getElementById("e").value);
    document.getElementById("e-txt").innerHTML = dataPack = localStorage.getItem("e");
    
    bytes06 = localStorage.setItem("f", document.getElementById("f").value);
    document.getElementById("f-txt").innerHTML = dataPack = localStorage.getItem("f");
    
    bytes07 = localStorage.setItem("g", document.getElementById("g").value);
    document.getElementById("g-txt").innerHTML = dataPack = localStorage.getItem("g");
    
    setData = [bytes[bytes01, bytes02, bytes03, bytes04, bytes05, bytes06, bytes07]];

}

function send_db() {

    
    bytes01 = localStorage.setItem("a", document.getElementById("a").value);
    bytes02 = localStorage.setItem("b", document.getElementById("b").value);
    bytes03 = localStorage.setItem("c", document.getElementById("c").value);
    bytes04 = localStorage.setItem("d", document.getElementById("d").value);
    bytes05 = localStorage.setItem("e", document.getElementById("e").value);
    bytes06 = localStorage.setItem("f", document.getElementById("f").value);
    bytes07 = localStorage.setItem("g", document.getElementById("g").value);

    setData = [bytes[bytes01, bytes02, bytes03, bytes04, bytes05, bytes06, bytes07]];

}

function get_db() {

    document.getElementById("a-txt").innerText = dataPack = localStorage.getItem("a");
    document.getElementById("b-txt").innerText = dataPack = localStorage.getItem("b");
    document.getElementById("c-txt").innerText = dataPack = localStorage.getItem("c");
    document.getElementById("d-txt").innerText = dataPack = localStorage.getItem("d");
    document.getElementById("e-txt").innerText = dataPack = localStorage.getItem("e");
    document.getElementById("f-txt").innerText = dataPack = localStorage.getItem("f");
    document.getElementById("g-txt").innerText = dataPack = localStorage.getItem("g");

 }

function unsecure_get_db() {

    document.getElementById("a-txt").innerHTML = dataPack = localStorage.getItem("a");
    document.getElementById("b-txt").innerHTML = dataPack = localStorage.getItem("b");
    document.getElementById("c-txt").innerHTML = dataPack = localStorage.getItem("c");
    document.getElementById("d-txt").innerHTML = dataPack = localStorage.getItem("d");
    document.getElementById("e-txt").innerHTML = dataPack = localStorage.getItem("e");
    document.getElementById("f-txt").innerHTML = dataPack = localStorage.getItem("f");
    document.getElementById("g-txt").innerHTML = dataPack = localStorage.getItem("g");

}


const scrollfix = document.querySelector('.nav').offsetHeight;
 
// console.log(document.documentElement);

document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");

/* Animation */
function scroll_animate_fade() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
    
            if (entry.isIntersecting) {
                animate = entry.target.classList.add("white")
                animate = entry.target.classList.add("fade-2s")
            }
           
            else {
                animate = entry.target.classList.remove("white")
                animate = entry.target.classList.remove("fade-2s")
            }
        })
    });
    
    const toAnimate = document.querySelectorAll('.scrollanimate')
    toAnimate.forEach((el) => observer.observe(el))
    }
    
    function scroll_animate_totop() {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
        
                if (entry.isIntersecting) {
                    animate = entry.target.classList.add("white")
                    animate = entry.target.classList.add("to-top2s")
                }
               
                else {
                    animate = entry.target.classList.remove("white")
                    animate = entry.target.classList.remove("to-top2s")
                }
            })
        });
        
        const toAnimate = document.querySelectorAll('.scrollanimate')
        toAnimate.forEach((el) => observer.observe(el))
        }
    
    
    function scroll_animate_toleft() {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
        
                if (entry.isIntersecting) {
                    animate = entry.target.classList.add("white")
                    animate = entry.target.classList.add("to-left2s")
                }
               
                else {
                    animate = entry.target.classList.remove("white")
                    animate = entry.target.classList.remove("to-left2s")
                }
            })
        });
        
        const toAnimate = document.querySelectorAll('.scrollanimate')
        toAnimate.forEach((el) => observer.observe(el))
        }

      
    
    function scroll_animate_toright() {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
        
                if (entry.isIntersecting) {
                    animate = entry.target.classList.add("white")
                    animate = entry.target.classList.add("to-right2s")
                }
               
                else {
                    animate = entry.target.classList.remove("white")
                    animate = entry.target.classList.remove("to-right2s")
                }
            })
        });
        
        const toAnimate = document.querySelectorAll('.scrollanimate')
        toAnimate.forEach((el) => observer.observe(el))
        }
    
    
    function scroll_animate_tobottom() {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
        
                if (entry.isIntersecting) {
                    animate = entry.target.classList.add("white")
                    animate = entry.target.classList.add("to-bottom2s")
                }
               
                else {
                    animate = entry.target.classList.remove("white")
                    animate = entry.target.classList.remove("to-bottom2s")
                }
            })
        });
        
        const toAnimate = document.querySelectorAll('.scrollanimate')
        toAnimate.forEach((el) => observer.observe(el))
        }

custom_animate = any
custom_see = any
    
    function scroll_animate_custom() {


        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
        
                if (entry.isIntersecting) {
                    animate = entry.target.classList.add(custom_see)
                    animate = entry.target.classList.add(custom_animate)
                }
               
                else {
                    animate = entry.target.classList.remove(custom_see)
                    animate = entry.target.classList.remove(custom_animate)
                }
            })
        });
        
        const toAnimate = document.querySelectorAll('.scrollanimate')
        toAnimate.forEach((el) => observer.observe(el))
        }

