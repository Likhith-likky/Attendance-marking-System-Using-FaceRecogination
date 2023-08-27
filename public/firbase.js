
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // const firebaseConfig = {
        //     apiKey: "AIzaSyA0sUuDFx4RDPb1McVTVQ5nf0AjbuUrcMA",
        //     authDomain: "authentication-app-65764.firebaseapp.com",
        //     databaseURL: "https://authentication-app-65764-default-rtdb.firebaseio.com",
        //     projectId: "authentication-app-65764",
        //     storageBucket: "authentication-app-65764.appspot.com",
        //     messagingSenderId: "930784851235",
        //     appId: "1:930784851235:web:45056c1b0140664e174896"
        // };

        const firebaseConfig = {
          apiKey: "AIzaSyBPeMp7n8z2MuVoAMUZ0N6RyuY8uwZd3J8",
          authDomain: "faceattendacerealtime-ed9c2.firebaseapp.com",
          databaseURL:
            "https://faceattendacerealtime-ed9c2-default-rtdb.firebaseio.com",
          projectId: "faceattendacerealtime-ed9c2",
          storageBucket: "faceattendacerealtime-ed9c2.appspot.com",
          messagingSenderId: "966036857818",
          appId: "1:966036857818:web:6295dd0354b16c7087d6e3",
          measurementId: "G-8NKFKYYPVP",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const auth = getAuth();

        signUp.addEventListener('click', (e) => {

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var username = document.getElementById('username').value;
            // var regnoid = document.getElementById('id').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        email: email
                    })

                    alert('user created!');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    alert(errorMessage);
                    // ..
                });

        });

        login.addEventListener('click', (e) => {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    const dt = new Date();
                    update(ref(database, 'users/' + user.uid), {
                        last_login: dt,
                    })

                    alert('User loged in!');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    alert(errorMessage);
                });

        });

        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                //bla bla bla
                // ...
            } else {
                // User is signed out
                // ...
                //bla bla bla
            }
        });

        logout.addEventListener('click', (e) => {

            signOut(auth).then(() => {
                // Sign-out successful.
                alert('user loged out');
            }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });

        });

   