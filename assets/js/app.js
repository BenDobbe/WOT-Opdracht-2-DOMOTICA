// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyC89ZdMI4ElD8jLrtfiw8jz7ACBfQjG3ro',
    authDomain: 'pidomotica.firebaseapp.com',
    projectId: 'pidomotica'
});
  
// Variables
let db = firebase.firestore();
let light1status = document.getElementById('light1status')
let light2status = document.getElementById('light2status')
let light3status = document.getElementById('light3status')
let light4status = document.getElementById('light4status')
let socket1status = document.getElementById('socket1status')
let socket2status = document.getElementById('socket2status')
let socket3status = document.getElementById('socket3status')
let frontdoorstatus = document.getElementById('frontdoorstatus')
let backdoorstatus = document.getElementById('backdoorstatus')
let temperature = document.getElementById('temperature')
let humidity = document.getElementById('humidity')


// Set values from database on page load
function setValues(){
    db.collection('lights').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id === 'light1' && doc.data().Status === false) {
                light1status.innerHTML = 'Light is off'
            } else if (doc.id === 'light1' && doc.data().Status === true) {
                light1status.innerHTML = 'Light is on'
            }
            if (doc.id === 'light2' && doc.data().Status === false) {
                light2status.innerHTML = 'Light is off'
            } else if (doc.id === 'light2' && doc.data().Status === true) {
                light2status.innerHTML = 'Light is on'
            }
            if (doc.id === 'light3' && doc.data().Status === false) {
                light3status.innerHTML = 'Light is off'
            } else if (doc.id === 'light3' && doc.data().Status === true) {
                light3status.innerHTML = 'Light is on'
            }
            if (doc.id === 'light4' && doc.data().Status === false) {
                light4status.innerHTML = 'Light is off'
            } else if (doc.id === 'light4' && doc.data().Status === true) {
                light4status.innerHTML = 'Light is on'
            }
        })
    })

    db.collection('Sockets').get().then((querySnapshot) => {
        querySnapshot.forEach((socket) => {
            if (socket.id === 'socket1' && socket.data().Status === false) {
                socket1status.innerHTML = 'Socket is off'
            } else if (socket.id === 'socket1' && socket.data().Status === true) {
                socket1status.innerHTML = 'Socket is on'
            }
            if (socket.id === 'socket2' && socket.data().Status === false) {
                socket2status.innerHTML = 'Socket is off'
            } else if (socket.id === 'socket2' && socket.data().Status === true) {
                socket2status.innerHTML = 'Socket is on'
            }
            if (socket.id === 'socket3' && socket.data().Status === false) {
                socket3status.innerHTML = 'Socket is off'
            } else if (socket.id === 'socket3' && socket.data().Status === true) {
                socket3status.innerHTML = 'Socket is on'
            }
        })
    })
    db.collection('doors').get().then((querySnapshot) => {
        querySnapshot.forEach((door) => {
            if (door.id === 'frontdoor' && door.data().Status === false) {
                frontdoorstatus.innerHTML = 'Frontdoor is closed'
            } else if (door.id === 'frontdoor' && door.data().Status === true) {
                frontdoorstatus.innerHTML = 'Frontdoor is open'
            }
            if (door.id === 'backdoor' && door.data().Status === false) {
                backdoorstatus.innerHTML = 'Backdoor is closed'
            } else if (door.id === 'backdoor' && door.data().Status === true) {
                backdoorstatus.innerHTML = 'Backdoor is open'
            }
        })
    })
    db.collection('dht').get().then((querySnapshot) => {
        querySnapshot.forEach((sensor) => {
            temperature.innerHTML = sensor.data().Temperature
            humidity.innerHTML = sensor.data().Humidity
        })
    })
}

// Get light elements
document.getElementById('light1').onclick = function() {lightswitch1()}
document.getElementById('light2').onclick = function() {lightswitch2()}
document.getElementById('light3').onclick = function() {lightswitch3()}
document.getElementById('light4').onclick = function() {lightswitch4()}

// Light switch 1 function
function lightswitch1(){
    db.collection("lights").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'light1' && doc.data().Status === false) {
                db.collection("lights").doc("light1").update({
                    Status: true
                })
                light1status.innerHTML = 'Status: Light is on'
                console.log('light turned on!')
            } else if (doc.id === 'light1' && doc.data().Status === true) {
                db.collection("lights").doc("light1").update({
                    Status: false
                })
                light1status.innerHTML = 'Status: Light is off'
                console.log('light turned off!')
            }
        });
    });
}

// Light switch 2 function
function lightswitch2(){
    db.collection("lights").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'light2' && doc.data().Status === false) {
                db.collection("lights").doc("light2").update({
                    Status: true
                })
                light2status.innerHTML = 'Status: Light is on'
                console.log('light turned on!')
            } else if (doc.id === 'light2' && doc.data().Status === true) {
                db.collection("lights").doc("light2").update({
                    Status: false
                })
                light2status.innerHTML = 'Status: Light is off'
                console.log('light turned off!')
            }
        });
    });
}

// Light switch 3 function
function lightswitch3(){
    db.collection("lights").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'light3' && doc.data().Status === false) {
                db.collection("lights").doc("light3").update({
                    Status: true
                })
                light3status.innerHTML = 'Status: Light is on'
                console.log('light turned on!')
            } else if (doc.id === 'light3' && doc.data().Status === true) {
                db.collection("lights").doc("light3").update({
                    Status: false
                })
                light3status.innerHTML = 'Status: Light is off'
                console.log('light turned off!')
            }
        });
    });
}

// Light switch 4 function
function lightswitch4(){
    db.collection("lights").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'light4' && doc.data().Status === false) {
                db.collection("lights").doc("light4").update({
                    Status: true
                })
                light4status.innerHTML = 'Status: Light is on'
                console.log('light turned on!')
            } else if (doc.id === 'light4' && doc.data().Status === true) {
                db.collection("lights").doc("light4").update({
                    Status: false
                })
                light4status.innerHTML = 'Status: Light is off'
                console.log('light turned off!')
            }
        });
    });
}

// Get socket elements
document.getElementById('socket1').onclick = function() {socketswitch1()}
document.getElementById('socket2').onclick = function() {socketswitch2()}
document.getElementById('socket3').onclick = function() {socketswitch3()}

// Socket switch 1 function
function socketswitch1(){
    db.collection("Sockets").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'socket1' && doc.data().Status === false) {
                db.collection("Sockets").doc("socket1").update({
                    Status: true
                })
                socket1status.innerHTML = 'Status: Socket is on'
                console.log('socket turned on!')
            } else if (doc.id === 'socket1' && doc.data().Status === true) {
                db.collection("Sockets").doc("socket1").update({
                    Status: false
                })
                socket1status.innerHTML = 'Status: Socket is off'
                console.log('socket turned off!')
            }
        });
    });
}

// Socket switch 2 function
function socketswitch2(){
    db.collection("Sockets").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'socket2' && doc.data().Status === false) {
                db.collection("Sockets").doc("socket2").update({
                    Status: true
                })
                socket2status.innerHTML = 'Status: Socket is on'
                console.log('socket turned on!')
            } else if (doc.id === 'socket2' && doc.data().Status === true) {
                db.collection("Sockets").doc("socket2").update({
                    Status: false
                })
                socket2status.innerHTML = 'Status: Socket is off'
                console.log('socket turned off!')
            }
        });
    });
}

// Socket switch 3 function
function socketswitch3(){
    db.collection("Sockets").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'socket3' && doc.data().Status === false) {
                db.collection("Sockets").doc("socket3").update({
                    Status: true
                })
                socket3status.innerHTML = 'Status: Socket is on'
                console.log('socket turned on!')
            } else if (doc.id === 'socket3' && doc.data().Status === true) {
                db.collection("Sockets").doc("socket3").update({
                    Status: false
                })
                socket3status.innerHTML = 'Status: Socket is off'
                console.log('socket turned off!')
            }
        });
    });
}

// Get door elements
document.getElementById('frontdoor').onclick = function() {frontdoorswitch()}
document.getElementById('backdoor').onclick = function() {backdoorswitch()}

// Frontdoor switch function
function frontdoorswitch(){
    db.collection("doors").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${door.id} => ${door.data()}`);
            if (doc.id === 'frontdoor' && doc.data().Status === false) {
                db.collection("doors").doc("frontdoor").update({
                    Status: true
                })
                frontdoorstatus.innerHTML = 'Status: Frontdoor is open'
                console.log('Frontdoor is open')
            } else if (doc.id === 'frontdoor' && doc.data().Status === true) {
                db.collection("doors").doc("frontdoor").update({
                    Status: false
                })
                frontdoorstatus.innerHTML = 'Status: Frontdoor is closed'
                console.log('Frontdoor is closed')
            }
        });
    });
}

function backdoorswitch(){
    db.collection("doors").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'backdoor' && doc.data().Status === false) {
                db.collection("doors").doc("backdoor").update({
                    Status: true
                })
                backdoorstatus.innerHTML = 'Status: Backdoor is open'
                console.log('Backdoor is open')
            } else if (doc.id === 'backdoor' && doc.data().Status === true) {
                db.collection("doors").doc("backdoor").update({
                    Status: false
                })
                backdoorstatus.innerHTML = 'Status: Backdoor is closed'
                console.log('Backdoor is closed')
            }
        });
    });
}

// Get alert element
document.getElementById('alert').onclick = function() {alertswitch()}
let alertsound = document.getElementById('alertsound')
function alertswitch(){
    db.collection("alerts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.id === 'breakin' && doc.data().Status === false) {
                db.collection("alerts").doc("breakin").update({
                    Status: true
                })
                db.collection("doors").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        db.collection('doors').doc('backdoor').update({
                            Status: true
                        })
                        backdoorstatus.innerHTML = 'Status: Backdoor is open'
                        db.collection('doors').doc('frontdoor').update({
                            Status: true
                        })
                        frontdoorstatus.innerHTML = 'Status: Frontdoor is open'
                    })
                })
                db.collection("lights").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        db.collection("lights").doc("light1").update({
                            Status: true
                        })
                        light1status.innerHTML = 'Status: Light is on!'
                        db.collection("lights").doc("light2").update({
                            Status: true
                        })
                        light2status.innerHTML = 'Status: Light is on!'
                        db.collection("lights").doc("light3").update({
                            Status: true
                        })
                        light3status.innerHTML = 'Status: Light is on!'
                        db.collection("lights").doc("light4").update({
                            Status: true
                        })
                        light4status.innerHTML = 'Status: Light is on!'
                    })
                })
                alertsound.play()
                console.log('DANGER DANGER DANGER')
            } else if (doc.id === 'breakin' && doc.data().Status === true) {
                db.collection("alerts").doc("breakin").update({
                    Status: false
                })
                alertsound.pause()
                console.log('DANGER LIFTED')
            }
        });
    });
}