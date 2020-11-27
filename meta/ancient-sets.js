function openNav() {
    document.getElementById("SideNav").style.width = "150px";
}

function closeNav() {
    document.getElementById("SideNav").style.width = "0px";
}


(function() {
    // Button for ashbringer
    const ashbringer = document.querySelector('.selAsh');
    const paladin = document.querySelector('.selPala');
    const oracle = document.querySelector('.selOracle');
    const darkula = document.querySelector('.selDark');
    const annihilator = document.querySelector('.selAnni');

    //buttons for the items
    const selWeapon = document.querySelector('.weapon');
    const selWeaponSoul = document.querySelector('.weaponsoul');
    const selArmor = document.querySelector('.armor');
    const selAmrorSoul = document.querySelector('.armorsoul');
    const selRing = document.querySelector('.ring');
    const selAmulet = document.querySelector('.amulet');
    /*const selArtifact = document.querySelector('.'); */

    // Button to close the modal
    
    
    
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

        //console.log("test");

    });

    paladin.addEventListener('click', function() {
        weapon = document.querySelector('.selectWeapon-pala');
        weaponSoul = document.querySelector('.selectWsoul-pala');
        armor = document.querySelector('.selectArmor-pala');
        armorSoul = document.querySelector('.selectAsoul-pala');
        ring = document.querySelector('.selectRing-pala');
        amulet = document.querySelector('.selectAmulet-pala');

        //console.log("test");

    });

    oracle.addEventListener('click', function() {
        weapon = document.querySelector('.selectWeapon-oracle');
        weaponSoul = document.querySelector('.selectWsoul-oracle');
        armor = document.querySelector('.selectArmor-oracle');
        armorSoul = document.querySelector('.selectAsoul-oracle');
        ring = document.querySelector('.selectRing-oracle');
        amulet = document.querySelector('.selectAmulet-oracle');

        //console.log("test");

    });

    darkula.addEventListener('click', function() {
        weapon = document.querySelector('.selectWeapon-dark');
        weaponSoul = document.querySelector('.selectWsoul-dark');
        armor = document.querySelector('.selectArmor-dark');
        armorSoul = document.querySelector('.selectAsoul-dark');
        ring = document.querySelector('.selectRing-dark');
        amulet = document.querySelector('.selectAmulet-dark');

        //console.log("test");

    });

    annihilator.addEventListener('click', function() {
        weapon = document.querySelector('.selectWeapon-anni');
        weaponSoul = document.querySelector('.selectWsoul-anni');
        armor = document.querySelector('.selectArmor-anni');
        armorSoul = document.querySelector('.selectAsoul-anni');
        ring = document.querySelector('.selectRing-anni');
        amulet = document.querySelector('.selectAmulet-anni');

        //console.log("test");

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

    const closeModal = document.querySelectorAll('.modal-close');
    const modal = document.querySelectorAll('modal');
    

    closeModal.forEach((spanBtn) => {
        spanBtn.addEventListener('click', function (close) {
            let parent = close.target.parentElement.parentElement; //get the parent of the parent of the close btn.
            parent.style.display = 'none';
            console.log(parent);
    
        });
    });

    
    

    
    
    
    
    
})();