var slideIndexTechnician = 1;
var slideIndexStudent = 1;
var slideIndexMobile = 1;
var slideIndexWIKI = 1;



function plusSlidesTechnician(n) {
    showSlidesTechnician(slideIndexTechnician += n);
}

function currentSlideTechnician(n) {
    showSlidesTechnician(slideIndexTechnician = n);
}

function showSlidesTechnician(n) {
    var i;
    var slidesTechnician = document.getElementsByClassName("slidesTechnician");
    if (n > slidesTechnician.length) {slideIndexTechnician = 1}
    if (n < 1) {slideIndexTechnician = slidesTechnician.length}
    for (i = 0; i < slidesTechnician.length; i++) {
        slidesTechnician[i].style.display = "none";
    }

    slidesTechnician[slideIndexTechnician-1].style.display = "block";
}

function plusSlidesStudent(m) {
    showSlidesStudent(slideIndexStudent += m);
}

function currentSlideStudent(m) {
    showSlidesStudent(slideIndexStudent = m);
}

function showSlidesStudent(m) {
    var j;
    var slidesStudent = document.getElementsByClassName("slidesStudent");

    if (m > slidesStudent.length) {slideIndexStudent = 1}
    if (m < 1) {slideIndexStudent = slidesStudent.length}
    for (j = 0; j < slidesStudent.length; j++) {
        slidesStudent[j].style.display = "none";
    }
    slidesStudent[slideIndexStudent-1].style.display = "block";
}

function plusSlidesMobile(m) {
    showSlidesMobile(slideIndexMobile += m);
}

function currentSlideStudent(m) {
    showSlidesMobile(slideIndexMobile = m);
}

function showSlidesMobile(m) {
    var j;
    var slidesMobile = document.getElementsByClassName("slidesMobile");

    if (m > slidesMobile.length) {slideIndexMobile = 1}
    if (m < 1) {slideIndexMobile = slidesMobile.length}
    for (j = 0; j < slidesMobile.length; j++) {
        slidesMobile[j].style.display = "none";
    }
    slidesMobile[slideIndexMobile-1].style.display = "block";
}

function plusSlidesWIKI(m) {
    showSlidesWIKI(slideIndexWIKI += m);
}

function currentSlideWIKI(m) {
    showSlidesWIKI(slideIndexWIKI = m);
}

function showSlidesWIKI(m) {
    var j;
    var slidesWIKI = document.getElementsByClassName("slidesWIKI");

    if (m > slidesWIKI.length) {slideIndexWIKI = 1}
    if (m < 1) {slideIndexWIKI = slidesWIKI.length}
    for (j = 0; j < slidesWIKI.length; j++) {
        slidesWIKI[j].style.display = "none";
    }
    slidesWIKI[slideIndexWIKI-1].style.display = "block";
}

