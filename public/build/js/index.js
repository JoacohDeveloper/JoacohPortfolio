const cv=document.querySelectorAll(".img")[3],popupdiv=document.querySelector(".outside-popup"),popupContainer=document.querySelector(".popup-util"),header=document.querySelector(".header-container"),tracker=document.querySelector(".tracker");cv.addEventListener("click",()=>{popupdiv.classList.toggle("disabled"),document.body.classList.toggle("truncated")}),popupContainer.addEventListener("click",e=>{e.target.classList.forEach(e=>{"popup-close-btn"==e&&(popupdiv.classList.toggle("disabled"),document.body.classList.toggle("truncated"))})}),document.addEventListener("scroll",e=>{scrollY>header.offsetHeight?tracker.classList.add("active-tracker"):tracker.classList.remove("active-tracker")}),tracker.addEventListener("click",()=>{document.documentElement.scrollTop=document.body.scrollTop=0});