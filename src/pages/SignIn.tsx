import React, { useState } from "react";
import "./SignIn.css";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router-dom";

interface SignProps {
  setIsSignedIn: (status: boolean) => void; // Prop to set login status
}

const SignIn: React.FC<SignProps> = ({ setIsSignedIn }) => {
  const [emailOrPhone, setEmailOrPhone] = useState<string>(""); // For username or email
  const [password, setPassword] = useState<string>(""); // For password
  const history = useHistory();

  const handleSignIn = () => {
    // Example login validation (add real authentication logic here)
    if (emailOrPhone && password) {
      setIsSignedIn(true); // Update the global login state
      history.push("/tab1"); // Redirect to Tab1
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div id="sign-container">
          <div id="main-logo">
            {/* Reference the image correctly from the assets folder */}
            <img src='/assets/download.png' alt="App Logo" />
          </div>

          <div id="sign-form">
            <div id="inputs">
              {/* Controlled inputs for username and password */}
              <input
                type="text"
                placeholder="Username"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)} // Correct onChange handler for HTML input
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Correct onChange handler for password input
              />
            </div>
            <div id="remaining-form">
              <p>Forgot Password ?</p>
              {/* Call handleSignIn on login button click */}
              <button onClick={handleSignIn}>Login</button>
              <p>
                Don't have an account ? <span id="hyplink">Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
