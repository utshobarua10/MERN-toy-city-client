import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p> <b>Question 1:</b> What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>            
            <p> <b>Ans: (a)</b> Access token is basically a credential which authorize a user that is authenticated to a web or mobile application and it's let the user to use some specific resources. Access token is short lived.
                <br /> <b>(b)</b> Refresh token is a longlived credential which is used along with access token. When the access token session expires the user can request for a access token without reauthenticate. Refresh tokens are stored in securely and communicate with the server with new access token 
                <br /> <b>(c)</b> Both the tokens are securely stored in the client side to stop any unautroize access to the client side
             </p>
        <br />
            <p> <b>Question 2:</b> Compare SQL and NoSQL databases?</p>            
            <p> <b>Ans: </b> SQL: Full formed of SQl structured query language and NoSQL is not sql only, 
            <br />SQL is basically a realtional database where a column could be connect with one or more table
            <br /> On the other side, NOSQl is not relational database here a single block of data represents alone and the database typically not connected with the other databases
             </p>
        <br />

             <p> <b>Question 3:</b> What is express js? What is Nest JS?</p>            
            <p> <b>Ans: </b> Express js is a web application framework for node js and this framework is widely used by the developer all over the world.And it is built it JS 
                <br /> And Nest js is a progressive framework and it is built with typescript, this framework is getting among the developers.
            </p>
            
            <br />
            <p> <b>Question 4:</b> What is MongoDB aggregate and how does it work</p>            
            <p> <b>Ans: </b> MongoDB aggregate is a powerful way to perform advanced analytical operation like - match, group, project, sort and many more.
            </p>
            

        </div>
    );
};

export default Blogs;