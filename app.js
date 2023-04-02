var hamburger = document.getElementById("menu");

    /* Event Listener */
    hamburger.addEventListener('click', ()=>{
        var menuBox= document.getElementById('menuBox');
        menuBox.classList.add('d-block');
        }
    );

    const closeBtn = document.getElementById("closeBtn")
    closeBtn.addEventListener('click', ()=>{
        var  menuBox= document.getElementById('menuBox');
        menuBox.classList.remove('d-block');
    }
    );

   