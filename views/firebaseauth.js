// Firebase authentication and Firestore setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVzKFqX5Q9pZaQ6jBzED9mx4AJKIVOH1U",
  authDomain: "admin-dashboard-6184e.firebaseapp.com",
  projectId: "admin-dashboard-6184e",
  storageBucket: "admin-dashboard-6184e.firebasestorage.app",
  messagingSenderId: "267900846072",
  appId: "1:267900846072:web:9d204467b92bca66e1a00d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Show message function
function showMessage(message, divId, isSuccess = true) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  messageDiv.style.backgroundColor = isSuccess ? "green" : "red";
  messageDiv.style.color = "white";
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 8000);
}

// Reset input fields
function clearInputFields() {
  document.getElementById("Fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

// Register button
const signUp = document.getElementById("registerBtn");

signUp.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  const FullName = document.getElementById("Fname").value;
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;

  // Input validation
  if (!FullName || !Email || !Password) {
    showMessage("All fields are required.", "signUpMessage", false);
    return;
  }

  if (!/\S+@\S+\.\S+/.test(Email)) {
    showMessage("Please enter a valid email address.", "signUpMessage", false);
    return;
  }

  if (Password.length < 6) {
    showMessage(
      "Password must be at least 6 characters long.",
      "signUpMessage",
      false
    );
    return;
  }

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      console.log("User created:", userCredential.user); // Debug log
      const user = userCredential.user;
      const userData = { FullName, Email };

      showMessage("Account Created Successfully", "signUpMessage");

      // Save user data to Firestore
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          clearInputFields();
          window.location.href = "Login.html";
        })
        .catch((error) => {
          console.log("Error saving data:", error); // Debug log
          showMessage("Failed to save user data.", "signUpMessage", false);
        });
    })
    .catch((error) => {
      console.log("Error creating user:", error); // Debug log
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Email Address Already Exists !!!", "signUpMessage", false);
      } else if (errorCode === "auth/invalid-email") {
        showMessage("Invalid email address format.", "signUpMessage", false);
      } else if (errorCode === "auth/weak-password") {
        showMessage(
          "Password is too weak. Try a stronger one.",
          "signUpMessage",
          false
        );
      } else {
        showMessage("Unable to create User", "signUpMessage", false);
      }
    });

  // Login button
  const signIn = document.getElementById("LoginBtn");

  signIn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    const auth = getAuth();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user); // Debug log
        showMessage("Login successful", "signInMessage");
        localStorage.setItem("LoggedInUserId", userCredential.user.uid);
        window.location.href = "Overview.html";
      })
      .catch((error) => {
        console.log("Login error:", error); // Debug log
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          showMessage(
            "No account found with this email address.",
            "signInMessage",
            false
          );
        } else if (errorCode === "auth/wrong-password") {
          showMessage(
            "Incorrect password. Please try again.",
            "signInMessage",
            false
          );
        } else {
          showMessage(
            "Error logging in. Please try again later.",
            "signInMessage",
            false
          );
        }
      });
  });
});
