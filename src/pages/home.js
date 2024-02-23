import React from "react";

export function Home(){
    const backgroundStyle = {
        backgroundImage: 'url("https://png.pngtree.com/background/20211217/original/pngtree-background-simple-blue-with-dark-side-picture-image_1576339.jpg")',
        backgroundSize: 'cover',
       // backgroundPosition: 'center',s
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div style={backgroundStyle}>
        <div className="container my-5">
            <h2 className="text-center mb-3">Welcome to my Website!</h2>
            <h2 className="text-center mb-3">Create your customized online wish list with only one click for you or family and friends.</h2>
    
        </div>
        </div>
    );
   
}

