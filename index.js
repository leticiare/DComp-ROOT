const optionMenu = document.querySelector(".select-menu"),
      selectBtn = document.querySelector(".select-btn"),
      options = document.querySelectorAll(".option"),
      sBtn_text = document.querySelector(".sBtn-text");

       selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
      options.forEach(option =>{
        option.addEventListener("click", () =>{
          let selectedOption = option.querySelector(".option-text".innerText);
        })
        console.log(option)

      });