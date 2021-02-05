// javascript for opening and closing side nav when iconbar is clicked, starts

function openNav() {
    var sideNav = document.getElementsByClassName('sidenav')[0];
    var iconBarButton = document.getElementsByClassName('iconbar')[0];
    var sidenavParent = document.querySelector('.sidenav-parent');
    sidenavParent.style.width = '100%';
    sideNav.style.width = '300px';
    iconBarButton.style.display = 'none';
}

//close sidenav when cross or outside window is clicked
var closeButton = document.getElementsByClassName('closeBtn')[0];
var sidenavParent = document.querySelector('.sidenav-parent');
var sideNav = document.getElementsByClassName('sidenav')[0];
var iconBarButton = document.getElementsByClassName('iconbar')[0];
closeButton.addEventListener('click', closeSideNav);
function closeSideNav() {
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
}
// close sidenav + sidenav parent disply= none when anywhere outside window is clicked
var sidenavParent = document.querySelector('.sidenav-parent');
sidenavParent.addEventListener('click', closeSideNavforWindow);
function closeSideNavforWindow(e) {
    if(e.target.className == 'sidenav-parent') {
        sidenavParent.style.width = '0';
        sideNav.style.width = '0';
        iconBarButton.style.display = 'block';
    }
}
// javascript for opening and closing side nav when iconbar is clicked, ends

//sign in modal javascript starts
//open sign in modal
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
var parentModalSignup = document.querySelector('.modal-parent-signup');
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');

var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
var parentModalContact = document.querySelector('.modal-parent-contact');
        
function openSignInModal() {
    parentModalSignin.style.display = 'block';
    parentModalSignup.style.display = 'none';
    parentModalSignupAdmin.style.display = 'none';
//closing sidenav when signin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';
    //closing give details sign up modal when signin is clicked
    parentModalGiveYourDetails.style.display = 'none';
     //closing Contact modal when signin is clicked
    parentModalContact.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //blur background when modal is opened
    
    //window.classList.openSignInModal('blur-background');
}
// close sign in modal
var closeButtonModalSignin = document.getElementsByClassName('X-signin')[0];
closeButtonModalSignin.addEventListener('click', closeSigninModal);
function closeSigninModal() {
    var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
    parentModalSignin.style.display = 'none'; 
}
//close modal when clicked anywhere outside
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
parentModalSignin.addEventListener('click', closeSigninModalForWindow);
function closeSigninModalForWindow(e) {
    if(e.target.className == 'modal-parent-signin') {
        parentModalSignin.style.display = 'none';

    }
}
//sign in modal javascript ends

//sign up modal javascript starts here
//open sign up modal when sign up button is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
var parentModalContact = document.querySelector('.modal-parent-contact');

function openSignUpModal() {
    parentModalSignup.style.display = 'block';
    parentModalSignin.style.display = 'none';
//closing sidenav when signup is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalContact.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}

//close sign up modal when close or cancel button is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
function closeSignupModal() {
    parentModalSignup.style.display = 'none';
}

//close sign up modal when outside modal is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup');
parentModalSignup.addEventListener('click', closeSignupModadforWindow);
function closeSignupModadforWindow(e) {
    if(e.target.className == 'modal-parent-signup') {
        parentModalSignup.style.display = 'none';
    }
}
//sign up modal javascript ends here

//sign up Admin modal javascript starts here
//open sign up Admin modal when sign up button is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
var parentModalSignup = document.querySelector('.modal-parent-signup');
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
var parentModalContact = document.querySelector('.modal-parent-contact');

function openSignUpAdminModal() {
    parentModalSignupAdmin.style.display = 'block';
    parentModalSignup.style.display = 'none';
    parentModalSignin.style.display = 'none';
//closing sidenav when signup Admin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalContact.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}

//close sign up Admin modal when close or cancel button is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
//var parentModalSignup = document.querySelector('.modal-parent-signup');
function closeSignupAdminModal() {
    parentModalSignupAdmin.style.display = 'none';
}

//close sign up Admin modal when outside modal is clicked
var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
//var parentModalSignup = document.querySelector('.modal-parent-signup');
parentModalSignupAdmin.addEventListener('click', closeSignupAdminModalforWindow);
function closeSignupAdminModalforWindow(e) {
    if(e.target.className == 'modal-parent-signup-admin') {
        parentModalSignupAdmin.style.display = 'none';
    }
}
//sign up Admin modal javascript ends here


//Give Your Details modal javascript starts here
/*
 function openGiveYourDetailsModal() {
    var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');

    parentModalGiveYourDetails.style.display = 'block';

 }

 function closeGiveYourDetailsModal() {
    var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');

    parentModalGiveYourDetails.style.display = 'none';

 }
 */
//close give your details modal on window click .. this one is not working
/*
 var parentModalGiveYourDetails = document.querySelector('.modal-parent-giveyourdetails');
 parentModalGiveYourDetails.addEventListener('click', closeGiveYourDetailsModadforWindow);
function closeGiveYourDetailsModadforWindow(e) {
    if(e.target.className == '.modal-parent-giveyourdetails') {
        parentModalGiveYourDetails.style.display = 'none';
    }
}
*/
//Give Your Details modal javascript ends here
//Website Features List Modal javascript starts here
/*
function openWebsiteFeaturesListModal() {
    var parentModalWebsiteFeaturesList = document.querySelector('.modal-parent-websitefeatureslist');

    parentModalWebsiteFeaturesList.style.display = 'block';

 }

 function closeWebsiteFeaturesListModal() {
    var parentModalWebsiteFeaturesList = document.querySelector('.modal-parent-websitefeatureslist');

    parentModalWebsiteFeaturesList.style.display = 'none';

 }
 */
//View Website Features list starts here
/*
function openViewWebsiteFeaturesListModal() {
    var parentModalViewWebsiteFeaturesList = document.querySelector('.modal-parent-viewwebsitefeatureslist');

    parentModalViewWebsiteFeaturesList.style.display = 'block';

 }

 function closeViewWebsiteFeaturesListModal() {
    var parentModalViewWebsiteFeaturesList = document.querySelector('.modal-parent-viewwebsitefeatureslist');

    parentModalViewWebsiteFeaturesList.style.display = 'none';

 }
 */
//View Website Features list ends here
//Website Content Modal javascript starts here
/*
function openWebsiteContentModal() {
    var parentModalWebsiteContent = document.querySelector('.modal-parent-website-content');

    parentModalWebsiteContent.style.display = 'block';

 }

 function closeWebsiteContentModal() {
    var parentModalWebsiteContent = document.querySelector('.modal-parent-website-content');

    parentModalWebsiteContent.style.display = 'none';

 }
*/
//Website Content modal javascript ends here
//View Website Content list starts here
/*
function openViewWebsiteContentModal() {
    var parentModalViewWebsiteContent = document.querySelector('.modal-parent-viewwebsitecontent');

    parentModalViewWebsiteContent.style.display = 'block';

 }

 function closeViewWebsiteContentModal() {
    var parentModalViewWebsiteContent = document.querySelector('.modal-parent-viewwebsitecontent');

    parentModalViewWebsiteContent.style.display = 'none';

 }
 */
//View Website Content list ends here

//Agreement Modal javascript starts here
function openAgreementModal() {
    var parentModalAgreement = document.querySelector('.modal-parent-agreement');

    parentModalAgreement.style.display = 'block';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


 }

 function closeAgreementModal() {
    var parentModalAgreement = document.querySelector('.modal-parent-agreement');

    parentModalAgreement.style.display = 'none';

 }

//Agreement modal javascript ends here

// contact modal javascript starts here
//open contact modal when Contact button is clicked
function openContactModal() {
    var parentModalContact = document.querySelector('.modal-parent-contact');
    var parentModalSignup = document.querySelector('.modal-parent-signup');
    var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
    
    parentModalContact.style.display = 'block';

    //closing sidenav when contact is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalSignup.style.display = 'none';
    parentModalSignin.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    
}

//close contat modal when Cross or Cancel button is clicked
function closeContactModal() {
    var parentModalContact = document.querySelector('.modal-parent-contact');
    parentModalContact.style.display = 'none';
}
//close contat modal when outside window is clicked
var parentModalContact = document.querySelector('.modal-parent-contact');
parentModalContact.addEventListener('click', closeContactModalforWindow);

function closeContactModalforWindow(e) {
    if(e.target.className == 'modal-parent-contact') {
        parentModalContact.style.display = 'none';  
    }
}
// contact modal javascript ends here

//footer javascript 
//tap here to go to top javascript
var tapToTopButton = document.getElementById('taptotopButton');
tapToTopButton.addEventListener('click', goToTop);

function goToTop() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Open Send Message modal 

function openSendMessageModal() {
    var sendMessageParentModal = document.querySelector('.modal-parent-send-message');
    sendMessageParentModal.style.display = 'block';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//Close Send Message modal on close button or cancel button click
function closeSendMessageModal() {
    var sendMessageParentModal = document.querySelector('.modal-parent-send-message');
    sendMessageParentModal.style.display = 'none';
}
//Open Reply modal 

function openReplyModal() {
    var modalParentReply = document.querySelector('.modal-parent-reply');
    modalParentReply.style.display = 'block';
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//Close Reply modal on close button or cancel button click
function closeReplyModal() {
    var modalParentReply = document.querySelector('.modal-parent-reply');
    modalParentReply.style.display = 'none';
}
//Close Send Message modal on outside window click
/*
var sendMessageParentModal = document.querySelector('.modal-parent-send-message')[0];
sendMessageParentModal.addEventListener('click', closeSendMessageModalForWindow);
function closeSendMessageModalForWindow(e) {
    if(e.target.className == 'modal-parent-send-message') {
        sendMessageParentModal.style.display = 'none';
    }
}
*/
//Open Forward Msg modal 

function openForwardMsgModal() {
    var modalParentForwardMsg = document.getElementsByClassName('modal-parent-forward-msg')[0];
    
    modalParentForwardMsg.style.display = 'block';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Close Forward Msg modal on close button or cancel button click
function closeForwardMsgModal() {
    var modalParentForwardMsg = document.getElementsByClassName('modal-parent-forward-msg')[0];
    modalParentForwardMsg.style.display = 'none';
    
}

// View Profile Modal starts here 
function openViewProfileModal() {
    var modalParentViewProfile = document.getElementsByClassName('modal-parent-view-customer-profile')[0];
    modalParentViewProfile.style.display = 'block';
    
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

function closeViewProfileModal() {
    var modalParentViewProfile = document.getElementsByClassName('modal-parent-view-customer-profile')[0];
    
    modalParentViewProfile.style.display = 'none';
    
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//view profile moal ends here
// View Profile Modal starts here 
function openViewAdminProfileModal() {
    var modalParentViewAdminProfile = document.getElementsByClassName('modal-parent-view-admin-profile')[0];
    modalParentViewAdminProfile.style.display = 'block';
    
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

function closeViewAdminProfileModal() {
    var modalParentViewAdminProfile = document.getElementsByClassName('modal-parent-view-admin-profile')[0];
    
    modalParentViewAdminProfile.style.display = 'none';
    
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//view Admin profile moal ends here


// Open openModalStaffEditForm() 
/*
 function openModalStaffEditForm(){
    var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
    parentModalStaffEditForm.style.display = 'block';
 }


 // close Admin staff edit form when cancel or cross btn is clicked
 function closeModalStaffEditForm() {
    var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
    parentModalStaffEditForm.style.display = 'none';
 }

 // close Admin staff edit form when outsidewindow is clicked
 var parentModalStaffEditForm = document.querySelector('.modal-parent-staff-edit-form');
 parentModalStaffEditForm.addEventListener('click', closeStaffEditFormModalForWindow);
  function closeStaffEditFormModalForWindow(e) {
    if (e.target.className == 'modal-parent-staff-edit-form') {
        parentModalStaffEditForm.style.display = "none";
        
    }
 }

*/
/*
 function showThisIdDetail() {
     document.getElementById('vip').innerHTML = 'Vipin Kamboj Kumar'
 }

 */
 //Open  openParticularDashboard()
/* work on this when logged in as .... is clicked, then dashboard belonged to that particular id should open for eg. if admin is logged in then dashboardadmin should open, if admin staff is logged in, then dashboardadminstaff should open, in case
of employee logged in, dashboardemployee should open. when client is logged in then dashboardclient should open.
 function openParticularDashboard() { vhyj
     var admin = document.
 }

 */


 //Write a note
 /*
 var noteTitle = document.getElementById('note-title');
 var writeNoteTextArea = document.getElementById('write-note-text-area');
 var saveNoteBtn = document.getElementById('save-note-btn');
 var isOutput = document.getElementById('IsOutput');

 saveNoteBtn.onclick = function() {
     var noteKey = noteTitle.value;
     var noteValue =  writeNoteTextArea.value;

     if(noteKey && noteValue) {
        localStorage.setItem(noteKey, noteValue);
        location.reload();
     }
 }
 for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    isOutput.innerHTML += `${key}: ${value} <br/>`;
 }
*/

//viewmodal.ejs javascript strt here
/*
var itemPriceElements = document.getElementsByClassName('this-item-price-element');
var itemPrice;
for(i = 0; i < itemPriceElements.length; i++) {
    var itemPriceElement = itemPriceElements[i]
    var itemPrice = parseFloat(itemPriceElement.nodeValue) ;
    var totalPrice = itemPrice + itemPrice;

    
}
*/



//viewmodal.ejs javascript ends heref

//Wedding Invitation template demo javascript starts here
// Open modal RSVP
/*
var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
function openModalRsvp() {
    
       modalParentRsvp.style.display = 'block';
    
    
}
// close modal RSVP

var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
modalParentRsvp.addEventListener('click', closeModal);

function closeModal(event) {
if(event.target.className = '.modal-parent-rsvp') {
    modalParentRsvp.style.display = 'none';
}
}

function closeModalRsvp() {
    var modalParentRsvp = document.querySelector('.modal-parent-rsvp');
    modalParentRsvp.style.display = 'none';
}
*/
//Wedding Invitation template demo javascript ends here

// Freelance Work Advertisement Modal javascript starts here
//open freelance Work Advertisement Modal
/*
function openFreelanceWorkAdvertisementModal() {
    var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
    modalParentFreelanceWork.style.display = 'block';
}
//close freelance Work Advertisement Modal
function closeFreelanceWorkAdvertisementModal() {
    var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
    modalParentFreelanceWork.style.display = 'none';
}

//close freelance Work Advertisement Modal when outside window is clicked
/* not working
var modalParentFreelanceWork = document.getElementsByClassName('modal-parent-freelancework-advertisement')[0];
modalParentFreelanceWork.addEventListener('click', closeFreelanceWorkAdvertisementModalForWindow);
 function closeFreelanceWorkAdvertisementModalForWindow(event) {
    if(event.target.className == 'modal-parent-freelancework-advertisement')
    modalParentFreelanceWork.style.display = 'none';
}
*/
// Freelance Work Advertisement Modal javascript ends here
// Chat box modal javascript starts here
/*
function openChatBoxModal() {
    var modalParentChatbox = document.getElementsByClassName('modal-parent-chatbox')[0]; 

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    modalParentChatbox.style.display = 'block';
}

function closeChatBoxModal() {
    var modalParentChatbox = document.getElementsByClassName('modal-parent-chatbox')[0]; 

    modalParentChatbox.style.display = 'none';
}

*/
// Chat box modal javascript ends here

//Customer sign up modal from Modal from DashboardAdmin javascript starts here
//open sign up modal when sign up button is clicked
var parentCustomerModalSignupFromModalAdmin = document.getElementsByClassName('modal-parent-signup-from-modaladmin');
var parentModalSignup = document.getElementByClassName('.modal-parent-signup');
var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
var parentModalContact = document.querySelector('.modal-parent-contact');

function openSignUpModalCustomerFromModalAdmin() {
    parentCustomerModalSignupFromModalAdmin.style.display = 'block';
    parentModalSignup.style.display = 'block';
    parentModalSignin.style.display = 'none';
//closing sidenav when signup is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalContact.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}

//close sign up modal when close or cancel button is clicked
var parentCustomerModalSignupFromModalAdmin = document.querySelector('.modal-parent-signup-from-modaladmin');
function closeSignUpModalCustomerFromModalAdmin() {
    parentCustomerModalSignupFromModalAdmin.style.display = 'none';
}

//close sign up modal when outside modal is clicked
var parentModalSignup = document.querySelector('.modal-parent-signup-from-modaladmin');
parentModalSignup.addEventListener('click', closeSignupModadforWindow);
function closeSignupModadforWindow(e) {
    if(e.target.className == 'modal-parent-signup') {
        parentModalSignup.style.display = 'none';
    }
}
//Customer sign up modal from Modal from dashboardAdmin javascript ends here

//confirm before deleting Account modal starts here

//open modal
function openConfirmBeforeDeleteModal() {
    var modalParentConfirmBeforeDelete = document.getElementsByClassName('modal-parent-confirmation-before-delete')[0];

    var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
    var parentModalSignup = document.querySelector('.modal-parent-signup');
    var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
    var parentModalContact = document.querySelector('.modal-parent-contact');

    var modalParentViewProfile = document.getElementsByClassName('modal-parent-view-customer-profile')[0];
    //var modalParentViewAdminProfile = document.getElementsByClassName('modal-parent-view-admin-profile')[0];
    //show only selected button
    
    //modalParentViewAdminProfile.style.display = 'none';


    modalParentConfirmBeforeDelete.style.display = 'block';

    modalParentViewProfile.style.display = 'none';
    parentModalSignupAdmin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    parentModalSignin.style.display = 'none';
//closing sidenav when signup Admin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalContact.style.display = 'none';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}

//close modal

function closeConfirmBeforeDeleteModal() {
    var modalParentConfirmBeforeDelete = document.getElementsByClassName('modal-parent-confirmation-before-delete')[0];

    modalParentConfirmBeforeDelete.style.display = 'none';
}

//close modal when outside modal is clicked
/* Not working
var modalParentConfirmBeforeDelete = document.getElementsByClassName('modal-parent-confirmation-before-delete')[0];

modalParentConfirmBeforeDelete.addEventListener('click', closeConfirmBeforeDeleteModalOnWindowClick);

function closeConfirmBeforeDeleteModalOnWindowClick(event) {
    if(event.target.className == 'modal-parent-confirmation-before-delete') {
        modalParentConfirmBeforeDelete.style.display = 'none'; 
    }
}
*/ 



//confirm before deleting msg modal starts here

//open modal
//var modalParentConfirmBeforeDeletingMsg = document.getElementsByClassName('modal-parent-confirmation-before-deleting-msg')[0];

function openConfirmBeforeDeletingMsgModal() {
    //var modalParentConfirmBeforeDeletingMsg = document.getElementsByClassName('modal-parent-confirmation-before-deleting-msg')[0];

    var modalParentConfirmBeforeDeletingMsg = document.getElementsByClassName('modal-parent-confirmation-before-deleting-msg');

for(var i = 0; i <= modalParentConfirmBeforeDeletingMsg.length; i++) {
    var currentModalParentConfirmBeforeDeletingMsg = modalParentConfirmBeforeDeletingMsg[i];
}
   // var modalParentConfirmBeforeDeletingMsg = document.getElementsByClassName('modal-parent-confirmation-before-deleting-msg')[0];
    
   currentModalParentConfirmBeforeDeletingMsg.style.display = 'block';
    var parentModalSignupAdmin = document.querySelector('.modal-parent-signup-admin');
    var parentModalSignup = document.querySelector('.modal-parent-signup');
    var parentModalSignin = document.getElementsByClassName('modal-parent-signin')[0];
    var parentModalContact = document.querySelector('.modal-parent-contact');
    var modalParentViewProfile = document.getElementsByClassName('modal-parent-view-customer-profile')[0];
    //var modalParentViewAdminProfile = document.getElementsByClassName('modal-parent-view-admin-profile')[0];

    
    //modalParentViewAdminProfile.style.display = 'none';


    //modalParentConfirmBeforeDeletingMsg.style.display = 'block';

    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
    modalParentViewProfile.style.display = 'none';
    parentModalSignupAdmin.style.display = 'none';
    parentModalSignup.style.display = 'none';
    parentModalSignin.style.display = 'none';
//closing sidenav when signup Admin is clicked
    sidenavParent.style.width = '0';
    sideNav.style.width = '0';
    iconBarButton.style.display = 'block';

    parentModalContact.style.display = 'none';    

}

//close modal

function closeConfirmBeforeDeletingMsgModal() {
    //var modalParentConfirmBeforeDelete = document.getElementsByClassName('modal-parent-confirmation-before-delete')[0];
    var modalParentConfirmBeforeDeletingMsg = document.getElementsByClassName('modal-parent-confirmation-before-deleting-msg')[0];

    modalParentConfirmBeforeDeletingMsg.style.display = 'none';
    //modalParentConfirmBeforeDelete.style.display = 'none';
}
//Confirm before deleting msg modal ends here