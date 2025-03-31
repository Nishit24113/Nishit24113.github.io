

function addToContacts() {
    const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Pankaj Patel
ORG:EMKAY PACKAGING
TEL:+919904333320
EMAIL:emkaypackaging@gmail.com
END:VCARD
    `;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Pankaj_Patel_Contact.vcf';
    link.click();
}



function toggleShareOptions() {
    const shareOptions = document.getElementById('shareOptions');
    shareOptions.classList.toggle('active');
    
    // Close share options if clicking outside
    document.addEventListener('click', function closePopup(e) {
        if (!shareOptions.contains(e.target) && e.target.className !== 'share-btn') {
            shareOptions.classList.remove('active');
            document.removeEventListener('click', closePopup);
        }
    });
}

function openMap() {
    const address = "11, Baba Farm, New Survey No. 183, Al. Rakarpar, Ts: Kalol, Gandhinagar, Gujarat, India";
    const url = `https://maps.app.goo.gl/y8g88iy9XeFnJ2fS6`;
    window.open(url, '_blank');
}


function shareVia(platform) {
    const message = `Hello,\nPankaj here,\nFrom Emkay Packaging\n\nPlease click on the link below to view my Digital Business Card!\nhttps://nishit24113.github.io/`;
    let url = 'https://nishit24113.github.io/';

    switch(platform) {
        case 'email':
            url = `mailto:?subject=Check out my Digital Business Card&body=${encodeURIComponent(message)}`;
            break;
        case 'linkedin':
            url = `https://www.linkedin.com/shareArticle?mini=true&url=https://nishit24113.github.io/`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(message)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=https://nishit24113.github.io/`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
            break;
    }

    window.open(url, '_blank');
}
