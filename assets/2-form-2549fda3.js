const t=document.querySelector(".feedback-form");let a={email:"",message:""};m();t.addEventListener("input",function(e){(e.target.name==="email"||e.target.name==="message")&&(a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a).trim()))});function m(){let e=localStorage.getItem("feedback-form-state");e&&(a=JSON.parse(e),document.querySelector('[name="email"]').value=a.email,document.querySelector('[name="message"]').value=a.message)}t.addEventListener("submit",function(e){e.preventDefault(),a.email===""||a.message===""?console.log("Fill please all fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),a={email:"",message:""},document.querySelector('[name="email"]').value="",document.querySelector('[name="message"]').value=""),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()});
//# sourceMappingURL=2-form-2549fda3.js.map
