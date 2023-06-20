
/*****************************************Create-Starry-Background*****************************************/ 
(function () {

    /* Simple Stary Background - kurt.grigg@yahoo.co.uk */
    
    var n = 1500;
    
    var a = [],y = [],x = [],s = [],strs = [],
    d = document,
    cols = ['#9db4ff', '#a2b9ff', '#a7bcff',
    '#aabfff', '#afc3ff', '#baccff', '#c0d1ff',
    '#cad8ff', '#e4e8ff', '#edeeff', '#fbf8ff',
    '#fff9f9', '#fff5ec', '#fff4e8', '#fff1df',
    '#ffebd1', '#ffd7ae', '#ffc690', '#ffbe7f',
    '#ffbb7b', '#ffbb7b', '#fff', '#fff'];
    
    var container = d.createElement('div');
    container.setAttribute('style','display:block;'
    +'position:fixed;'
    +'height:100%;width:100%;'
    +'margin:auto;padding:0px;'
    +'top:0;left:0;left:0;right:0;'
    +'background-color:transparent;'
    +'overflow:hidden;');
    d.body.appendChild(container);
    
    for (var i = 0; i < n; i++){
        var col = cols[Math.random() * cols.length | 0];
        strs[i] = d.createElement('div');
        strs[i].setAttribute('style', 'display:block;'
        +'position:absolute;'
        +'border-radius:50%;'
        +'background-color:#fff;'
        +'box-shadow: 0 0 12px 1.2px '+col+';');
    container.appendChild(strs[i]);
    }

    function gen() {
        for (var i = 0; i < n; i++) {
            var r = Math.random() * 100 | 0;
            var cen = (r == 0)? 2.3 : 0.7;
            a[i] = Math.random() * Math.PI * 2;
            y[i] = 50 + Math.random() * 50 / cen * Math.sin(a[i]);
            x[i] = 50 + Math.random() * 50 / cen * Math.cos(a[i]);
            s[i] = 0.4 + Math.random() * 2;
            strs[i].style.transform = 'translate3d('+x[i]+'vw, '+y[i]+'vh, 0)';
            strs[i].style.width = (strs[i].style.height = (s[i]) + 'px');
            strs[i].style.opacity = s[i] / 3;
        }
    }
    window.addEventListener("load",gen,false);
    })();
    let n = "Master";
    let nn = "1905";
    function UpdatePage(){
        let userInput = document.getElementById("username").value;
        let passwordInput = document.getElementById("password").value;
            if(userInput === n && passwordInput === nn){
            LogInContainer.style.display = "none";
            Name.innerHTML = "By Asuki";
            } 
        }   window.onkeyup = function(event) {
            if (event.keyCode === 38) {
                LogInContainer.style.display = "none";
                Name.innerHTML = "ByAsuki";
            }
         };