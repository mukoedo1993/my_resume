//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSEb

import 'lazysizes'


import MobileMenu from './modules/MobileMenu'

import RevealOnScroll from './modules/RevealOnScroll'

import StickyHeader from './modules/StickyHeader'

import ClientArea from './modules/ClientArea'

// React Related Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'

//import React components that we created
import MyAmazingComponent from './modules/MyAmazingComponent'


ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example")) //first parentheses is the component (reusable feature) you want to render to the page. 
// it is the part you want to render to...



new ClientArea()

//new Modal() //course 56 //commented in course 57
//let stickyHeader = //commented in course 57
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75) //made it work on
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)



//let mobileMenu = //commented in course 57 // If your website is pretty complex, then you are recommended to download event-emitter...
new MobileMenu();
let modal // until here, the type for modal is undefined...


document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
    
        //the nested comment below will work.
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal.js').then( x => {
                modal = new x.default() //default: (alias) new Modal(): Modal

                setTimeout(() => modal.openTheModal(), 20) //let the browser wait for 20ms, wait for the browser to create a new object into the DOM.
            }
            ).catch(() => console.log("There was a problem...")) // Once we have imported the Modal, we want to create a new instance of the class.

        } else {
            modal.openTheModal()

        }

    })
})

if(module.hot) {
    module.hot.accept() // accept hot updates if it makes sense to accept that.
}