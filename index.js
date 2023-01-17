
    const instruction = document.querySelector('.instructions-text')
    const startDis = document.querySelector('.main')
    startDis.style.display = "none";
    setTimeout(() => {
        startDis.style.display = "block"
        instruction.style.display = "none"
    }, 5000);

   



    var form = document.getElementById('form')
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        
            var username = document.getElementById('username').value
            var email = document.getElementById('email').value
            var textarea = document.getElementById('textarea').value
            let text ="Username:" + " " + username + "\n" + "Email:" + " " + email + "\n" + "You Want to Get the Results on:" + " " + textarea
            if (confirm(text) == true) {
                window.location.href="typing.html";
            } else {
                
            }
            document.getElementById("demo").innerHTML = text;
         

    })
    