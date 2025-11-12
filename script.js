let todoinput = document.querySelector("#input-for-task");
let addtaskbtn = document.querySelector("#btn-toadd-task");
let tasklist = document.querySelector("#task-items");

addtaskbtn.addEventListener("click", () => {
  let task = todoinput.value.trim(); // get fresh value from input

  if (task === "") {
    todoinput.style.border = "2px solid red";
    setTimeout(() => (todoinput.style.border = ""), 2000);
    return;
  }

  // Now we are safe to proceed
  todoinput.value = "";

  let liitem = document.createElement("li");
  liitem.classList.add("task-items");

  liitem.innerText = task;

  let dltbtn = document.createElement("button");
  dltbtn.innerText = "Delete task";
  dltbtn.classList.add("btn-style");

  liitem.appendChild(dltbtn);
  tasklist.appendChild(liitem);

  dltbtn.addEventListener("click", () => {
    liitem.remove();
  });
});

todoinput.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter") addtaskbtn.click();
});
