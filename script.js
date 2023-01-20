const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.addDay(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/* const data = {
  run: ["01-01", "01-02", "01-06", "01-10", "01-16"],
  takePills: ["01-01", "01-03"],
  journal: ["01-01", "01-04"],
}*/

nlwSetup.setData(data)
nlwSetup.load()
