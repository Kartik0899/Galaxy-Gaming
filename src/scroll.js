
export default function ScrollInitiate(){

        (function() {
            "use strict";
            /*[pan and well CSS scrolls]*/
            var pnls = document.querySelectorAll('.panel').length,
                scdir, hold = false;
    
            
        
            function _scrollY(obj) {
                
                if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
                    pan = this || obj;
                    plength = parseInt(pan.offsetHeight / vh);
                }
                if (pan === undefined) {
                    return;
                }
                plength = plength || parseInt(pan.offsetHeight / vmin);
                slength = parseInt(pan.style.transform.replace('translateY(', ''));
                if (scdir === 'up' && slength>-1000) {
                    slength = slength - step;
                } else if (scdir === 'down' && slength < 0) {
                    slength = slength + step;
                } else if (scdir === 'top') {
                    slength = 0;
                }
                else if (scdir === 'about') {
                    slength = -500;
                }
                if (hold === false) {
                    hold = true;
                    pan.style.transform = 'translateY(' + slength + 'vh)';
                    if(scdir === 'up' && section < 10){
                        section += 1
                    }
                    else if(scdir === 'down' && section > 0){
                        section -= 1
                    }
                    else if(scdir === 'top'){
                        section = 0
                    }
                    else if(scdir === 'about'){
                        section = 5
                    }
                    setTimeout(function() {
                        hold = false;
                    }, 1000);
                }
                // console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
                // console.log('Sec: ', section)
            }
            /*[swipe detection on touchscreen devices]*/
            function _swipe(obj) {
                var swdir,
                    sX,
                    sY,
                    dX,
                    dY,
                    threshold = 100,
                    /*[min distance traveled to be considered swipe]*/
                    slack = 50,
                    /*[max distance allowed at the same time in perpendicular direction]*/
                    alT = 500,
                    /*[max time allowed to travel that distance]*/
                    elT, /*[elapsed time]*/
                    stT; /*[start time]*/
                obj.addEventListener('touchstart', function(e) {
                    var tchs = e.changedTouches[0];
                    swdir = 'none';
                    sX = tchs.pageX;
                    sY = tchs.pageY;
                    stT = new Date().getTime();
                    //e.preventDefault();
                }, false);
        
                obj.addEventListener('touchmove', function(e) {
                    e.preventDefault(); /*[prevent scrolling when inside DIV]*/
                }, false);
        
                obj.addEventListener('touchend', function(e) {
                    var tchs = e.changedTouches[0];
                    dX = tchs.pageX - sX;
                    dY = tchs.pageY - sY;
                    elT = new Date().getTime() - stT;
                    if (elT <= alT) {
                        if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                            swdir = (dX < 0) ? 'left' : 'right';
                        } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                            swdir = (dY < 0) ? 'up' : 'down';
                        }
                        if (obj.id === 'well') {
                            if (swdir === 'up') {
                                scdir = swdir;
                                _scrollY(obj);
                            } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                                scdir = swdir;
                                _scrollY(obj);
        
                            }
                            e.stopPropagation();
                        }
                    }
                }, false);
            }
            /*[assignments]*/
            var well = document.getElementById('well');
            well.style.transform = 'translateY(0)';
            well.addEventListener('wheel', function(e) {
                if (e.deltaY < 0) {
                    scdir = 'down';
                }
                if (e.deltaY > 0) {
                    scdir = 'up';
                }
                e.stopPropagation();
            });
            well.addEventListener('wheel', _scrollY);
            _swipe(well);
            
            var tops = document.querySelectorAll('#top');
            for (var i = 0; i < tops.length; i++) {
                tops[i].addEventListener('click', function() {
                    scdir = 'top';
                    _scrollY(well);
                });
            }
    
            var about = document.getElementById('about');
     
            about.addEventListener('click', function() {
                scdir = 'about';
                _scrollY(well);
            });


            //console.log('SCROLL LOADED')
    
        })();
    
 
}
