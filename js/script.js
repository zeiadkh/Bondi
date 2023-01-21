
let loginBtn= document.querySelector("nav a.btn")
let exit= document.querySelector(".form-login .exit")
let login= document.querySelector(".form-login")
let overlay= document.querySelector(".form-login .overlay")
let email= document.querySelector(".login input[type=email]")
let form= document.querySelector(".login")
let pass= document.querySelector(".login input[type=password]")
let valreg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


loginBtn.onclick= (e)=> {
    e.preventDefault()
    login.classList.add("active")
}
exit.onclick= (e)=>{
   login.classList.remove("active")
   location.reload()
   
}
overlay.onclick= (e)=>{
   login.classList.remove("active")

}

// form validation 
email.addEventListener("focusout",()=>{
    if(!email.value.match(valreg)){
        document.querySelector(".login .error").classList.add("active")
        email.classList.remove("valid")
        email.classList.toggle("notvalid")
    }
    else{
        document.querySelector(".login .error").classList.remove("active")
        email.classList.remove("notvalid")
        email.classList.add("valid")
    }
    
    
})
pass.addEventListener("focusout",()=>{
    if(pass.value.length>9){
        document.querySelector(".login .pass-error").classList.remove("active")
        pass.classList.remove("notvalid")
        pass.classList.add("valid")
    }
    else{
        document.querySelector(".login .pass-error").classList.add("active")
        pass.classList.remove("valid")
        pass.classList.add("notvalid")

    }
})
document.querySelector(".login button").onclick= ()=>location.reload()
document.querySelectorAll("button").forEach((btn=> btn.addEventListener("click",(e)=>{e.preventDefault();})))
document.querySelectorAll("a").forEach((btn=> btn.addEventListener("click",(e)=>{e.preventDefault();})))
document.querySelectorAll("li").forEach((btn=> btn.addEventListener("click",(e)=>{e.preventDefault();})))


// gallery filter
let tabs=document.querySelectorAll(".gallery .nav li a");
let imgs= document.querySelectorAll(".gallery .photos img");
let gallery= document.querySelector(".gallery") 

tabs.forEach((tab)=>{
    tab.onclick= (e)=>{
        imgs.forEach((img)=> img.parentElement.style.display="none")
        tabs.forEach((a)=>a.classList.remove("active"))
        e.currentTarget.classList.add("active")
        tabs.forEach(tab=> tab.classList.contains("active")?tab.classList.add("main-btn","rounded-pill"):tab.classList.remove("main-btn","rounded-pill"))
        let imgType= e.currentTarget.dataset.cat
        document.querySelectorAll(`.photos [data-cat=${imgType}]`).forEach((img)=> img.style.display="block")
        imgType ==null?document.querySelectorAll(`.photos div`).forEach((img)=> img.style.display="block"):''
    }
})


  
// scroll top button
let scrollBtn= document.getElementById("scrollup")

scrollBtn.onclick = ()=>{ console.log('clicked');window.scrollTo({
    top:0,
    behaviour: "smooth"
})
}

// scrolling progress bar

let progBar= document.querySelector(".progress")
progBar.style.cssText ="width :0%;height: 5px; background: #2196F3; position: fixed;top: 0px; left: 0;z-index: 10002;)";

window.onscroll = ()=> {
    window.scrollY > 1700? scrollBtn.classList.add("show"):scrollBtn.classList.remove("show")
    let height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progBar.style.width =`${(document.documentElement.scrollTop /height) *100 }%`};
