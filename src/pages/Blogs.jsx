import React from 'react';
import Header from './Home/Home/Shared/Header';
import Footer from './Footer';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (
        <>
            <Header></Header>
            <div ref={ref} className='container'>
                <div className='px-5'>
                    <div className='text-center mt-4'>
                        <h2>Blog Section</h2>
                    </div>
                    <h3 className='mt-4'>
                        1. Tell us the differences between uncontrolled and controlled components.
                    </h3>
                    <p className='mt-2 p-4'>
                        — The main difference between uncontrolled and controlled components is that in an uncontrolled component, the component manages its own state internally, while in a controlled component, the state is managed externally by the parent component.
                        <br />
                        Controlled components are often preferred in larger applications because they allow for more centralized state management and can be easier to debug and maintain. However, uncontrolled components can be useful in certain situations where the state is only needed within the component and does not need to be shared with other components.
                    </p>

                    <h3 className='mt-4'>
                        2. How to validate React props using PropTypes?
                    </h3>
                    <p className='mt-2 p-4'>
                        — PropTypes is a built-in library in React that allows developers to specify the type and shape of the props that a component should receive. PropTypes is a simple and effective way to validate props and helps to prevent errors caused by invalid data being passed to a component. Here are the steps to validate React props using PropTypes: <br />
                        1.	Import PropTypes at the top of the component file. <br />
                        2.	Declare the PropTypes for each prop in the component by adding a static propTypes object to the component class. <br />
                        3.	Use the isRequired property to indicate that a prop is required. If a required prop is not passed to the component, a warning message will be displayed in the console. <br />
                        4.	To validate the shape of an object prop, use the PropTypes.shape method. <br />
                        5.	To validate an array prop, use the PropTypes.arrayOf method. <br />
                        By following these steps, you can use PropTypes to validate props in your React components and help prevent errors caused by invalid data being passed to your components.
                    </p>

                    <h3 className='mt-4'>
                        3. Tell us the difference between nodejs and express js.
                    </h3>
                    <p className='mt-2 p-4'>
                        — Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server, while Express.js is a web framework built on top of Node.js that provides features and utilities to simplify the process of building web applications with Node.js. <br />
                        Node.js can be used without Express.js to build various types of applications, while Express.js is specifically designed for building web applications with Node.js.
                    </p>

                    <h3 className='mt-4'>
                        4. What is a custom hook, and why will you create a custom hook?
                    </h3>
                    <p className='mt-2 p-4'>
                        — A custom hook in React is a reusable function that contains some stateful logic and can be shared across multiple components. Custom hooks allow developers to extract common logic from components and reuse it in a more modular way. <br />
                        Custom hooks are created to solve problems that cannot be easily solved using React's built-in hooks. For example, if you have some stateful logic that is being used across multiple components, you can create a custom hook to encapsulate that logic and reuse it in multiple places. This can help to reduce code duplication and improve code organization.

                    </p>
                </div>
                <div className='text-center my-4'>
                    <Pdf targetRef={ref} filename="blogs.pdf">
                        {({ toPdf }) => 
                        <button variant="success" onClick={toPdf}>Generate Pdf</button>
                        }
                    </Pdf>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;