const div1_2 = document.getElementById("div1-2")
const div2_2 = document.getElementById("div2-2")

div1_2.addEventListener('mouseover', () => div2_2.classList.add("b-red"))
div1_2.addEventListener('mouseleave', () => div2_2.classList.remove("b-red"))

div2_2.addEventListener('mouseover', () => div1_2.classList.add("b-yellow"))
div2_2.addEventListener('mouseleave', () => div1_2.classList.remove("b-yellow"))