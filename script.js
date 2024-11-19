<script src="script.js"></script>

     document.querySelectorAll('[href^=["#"'). forEach (anchor => {
        anchor.addEventListener('click', function(e) {
            e.prevenDefault();
            document.querySelector(this.getAttribute('href'
       ) ).scrollintoview ({
            behavier:"smooth"
        })
        }
        )
     }
        )