// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBDCKCySJ-iHh-ucl9odOks7xS3wS797X4",
    authDomain: "roomcontrolweb.firebaseapp.com",
    databaseURL: "https://roomcontrolweb.firebaseio.com",
    projectId: "roomcontrolweb",
    storageBucket: "roomcontrolweb.appspot.com",
    messagingSenderId: "708574950306"
});

firebase.auth().onAuthStateChanged(function (user) {
    currentUser = user;
    if (!getQueryStringValue("token")) {
        if (currentUser) {
            currentUser.getIdToken().then(function (idToken) {
                window.location = window.location.pathname + "?token=" + idToken;
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
});

function signIn() {
    let email = $("#email").val();
    let password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        $("#error_message")
            .removeClass("error_message")
            .addClass("success_message")
            .html("Logado com sucesso");
        window.location.reload();
    }).catch(function (error) {
        $("#error_message")
            .removeClass("success_message")
            .addClass("error_message")
            .html(error.code + ": " + error.message);
    });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        window.location = "/";
    }).catch(function (error) {
        $("#error_message")
            .removeClass("success_message")
            .addClass("error_message")
            .html(error.code + ": " + error.message);
    });
}