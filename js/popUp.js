

// ======================================= upcoming ================================
/* function upcomingEventDetails() {
    console.log('upcomingEventDetails');
    const upcomingBox = document.getElementById("upcomingEventDetails")
    /*  upcomingBox.style.width = "90%";
     upcomingBox.style.borderRadius = "5px"; 
}
 */
function displayNone(id, bg) {
    console.log('none');
    document.getElementById(id).style.display = "none";
    document.getElementById(bg).style.display = "block";
};
function displayElement(id, bg) {
    document.getElementById(id).style.display = "block";
    document.getElementById(bg).style.display = "none";
};