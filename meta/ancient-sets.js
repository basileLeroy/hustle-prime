function openNav() {
    document.getElementById("SideNav").style.width = "150px";
}

function closeNav() {
    document.getElementById("SideNav").style.width = "0px";
}

function closeModal() {
    document.EventTarget(".select").style.display = "none";
    console.log("check", document.querySelector(".select").EventTarget);
}

(function() {
    // Button for ashbringer
    const ashbringer = document.querySelector('.selAsh');

    //buttons for the items
    const selWeapon = document.querySelector('.weapon');
    const selWeaponSoul = document.querySelector('.weaponsoul');
    const selArmor = document.querySelector('.armor');
    const selAmrorSoul = document.querySelector('.armorsoul');
    const selRing = document.querySelector('.ring');
    const selAmulet = document.querySelector('.amulet');
    /*const selArtifact = document.querySelector('.'); */

    // Button to close the modal
    const closeBtn = document.querySelectorAll('.modal-close');
    
    
    // All the different modals to choose
    let weapon = "";
    let weaponSoul = "";
    let armor = "";
    let armorSoul = "";
    let ring = "";
    let amulet = "";
    /*let artifact = document.querySelector('.selectArtifact'); */



    ashbringer.addEventListener('click', function() {
        weapon = document.querySelector('.selectWeapon-ash');
        weaponSoul = document.querySelector('.selectWsoul-ash');
        armor = document.querySelector('.selectArmor-ash');
        armorSoul = document.querySelector('.selectAsoul-ash');
        ring = document.querySelector('.selectRing-ash');
        amulet = document.querySelector('.selectAmulet-ash');

        console.log("test");

    });



     

    selWeapon.addEventListener('click', function() {
        weapon.style.display = "block";
    })

    selWeaponSoul.addEventListener('click', function() {
        weaponSoul.style.display = "block";
    })

    selArmor.addEventListener('click', function() {
        armor.style.display = "block";
    })

    selAmrorSoul.addEventListener('click', function() {
        armorSoul.style.display = "block";
    })

    selRing.addEventListener('click', function() {
        ring.style.display = "block";
    })

    selAmulet.addEventListener('click', function() {
        amulet.style.display = "block";
    })

    
    closeBtn.addEventListener('click', function() {
        closeBtn.forEach(close => {
            close = document.querySelectorAll('.select');
            close.innerHTML.style.display = "none";
        })
        
    })

    
    
    
})();