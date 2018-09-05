function spider()
{
    var x = window.event.clientX;
    var y = window.event.clientY; 
    document.getElementById('web').style.top = y; 
    document.getElementById('web').style.left = x; 
    
}