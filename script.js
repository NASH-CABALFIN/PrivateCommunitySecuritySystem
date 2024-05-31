var currentPhotoIndex = 0;
var totalPhotos = 5; // Update this if you add/remove photos

function showPhoto(index) {
    var photos = document.querySelectorAll('#photoContainer img');
    var photoNames = document.querySelectorAll('#photoNames p');

    photos.forEach(function(photo) {
        photo.style.display = 'none';
    });

    photoNames.forEach(function(name) {
        name.style.display = 'none';
    });

    photos[index].style.display = 'block';
    photoNames[index].style.display = 'block';
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
    showPhoto(currentPhotoIndex);
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    showPhoto(currentPhotoIndex);
}

// Show the first photo initially
showPhoto(currentPhotoIndex);




function togglePhotos() {
    var photoContainer = document.getElementById('photoContainer');
    if (photoContainer.style.display === 'none') {
        photoContainer.style.display = 'block';
    } else {
        photoContainer.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});
