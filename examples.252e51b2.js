!function(){localStorage.setItem("KEY",JSON.stringify([1,2,3])),console.log(JSON.parse(localStorage.getItem("KEY")));var e=document.querySelector(".js-local"),s=document.querySelector(".js-session");e.addEventListener("click",(function(){localStorage.setItem("local","test local")})),s.addEventListener("click",(function(){sessionStorage.setItem("session","test session")})),console.log(sessionStorage.getItem("session"))}();
//# sourceMappingURL=examples.252e51b2.js.map