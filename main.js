let object = document.getElementById('squer');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 400)
        document.getElementById('squer').style.borderRadius = "0px 0px 0px 0px;";
        console.log(object);
  });
