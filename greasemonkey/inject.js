(function (func) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + func + ')();';
    document.body.appendChild(script); // run the script
    document.body.removeChild(script); // clean up
}(sangu_ready));


