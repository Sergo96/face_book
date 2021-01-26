import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import './App.css';
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";
import {useStateValue} from "./StateProvider/StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="App">
            {!user ? (
                <Login/>
            ) : (
                <>
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
            )
            }


        </div>
    );
}

export default App;


//npm install -g firebase-tools

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.0.2/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.0.2/firebase-analytics.js"></script>
//
// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>