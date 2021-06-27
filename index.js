// Write Javascript code!
$(document).ready(function() {
       $.noConflict();
    // Use the given data to create
    // the table and display it
    $('table').DataTable({
        data: mydata
    });
});

function monitor() {
    alert("You clicked Console");
}

// Specify the JSON data to be displayed
var mydata = [{
    "vmName": "Digital Ocean Vm",
    "powerState": "Sleep state",
    "vmId": "24596331",
    "ipAddress": "188.369.346.112",
    "vmSize": "DSv2",
    "action": "<img onclick='monitor()' src='https://img.icons8.com/officexs/30/000000/console.png'/>"
}, {
    "vmName": "Azure VM",
    "powerState": "Hibernate state",
    "vmId": "8669325",
    "ipAddress": "122.369.346.152",
    "vmSize": "DSv3",
    "action": "<img onclick='monitor()' src='https://img.icons8.com/officexs/30/000000/console.png'/>"
}, {
    "vmName": "Google VM",
    "powerState": "Sleep state",
    "vmId": "7889623",
    "ipAddress": "133.586.346.896",
    "vmSize": "Dasv4",
    "action": "<img onclick='monitor()' src='https://img.icons8.com/officexs/30/000000/console.png'/>"
}, {
    "vmName": "Citrix Vm",
    "powerState": " Soft Off state",
    "vmId": "3659332",
    "ipAddress": "192.111.346.112",
    "vmSize": "DCv2",
    "action": "<img onclick='monitor()' src='https://img.icons8.com/officexs/30/000000/console.png'/>"
}, {
    "vmName": "Oracle Vm",
    "powerState": "Working state",
    "vmId": "25633693",
    "ipAddress": "122.363.346.256",
    "vmSize": "Dav4",
    "action": "<img onclick='monitor()' src='https://img.icons8.com/officexs/30/000000/console.png'/>"

}];

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile)
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    location.replace("./vmMonitoring.html")
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
        location.replace('./index.html')
    });
}
