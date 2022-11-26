new class TipCalculator {
  constructor() {
    this.tip = 0
    this.bill = 0
    this.people = 0

    this.initialize()
  }

  initialize() {
    this.tipSelector()
    this.billSelector()
    this.peopleSelector()
    this.resetCalc()
  }

  billSelector() {
    document.querySelector('.btn-bill').addEventListener('input', (e) => {
      this.bill = Number(e.target.value)
      this.calcTip()
    })
  }

  tipSelector() {
    document.querySelectorAll('.btn-percentage').forEach(inputTip => {
      inputTip.addEventListener('click', event => {
        document.querySelectorAll('.btn-percentage').forEach(elem => {
          elem.classList.remove('btn-percentage-selected')
        })
        this.tip = Number(event.target.innerHTML.replace(/%/g, '')) / 100
        document.querySelector('.btn-percentage-custom').value = ''
        inputTip.classList.add('btn-percentage-selected')

        this.calcTip()
      })
    })

    document.querySelector('.btn-percentage-custom').addEventListener('input', (e) => {
      this.tip = Number(e.target.value / 100)
      this.calcTip()
    })
    document.querySelector('.btn-percentage-custom').addEventListener('click', (e) => {
      document.querySelectorAll('.btn-percentage').forEach(elem => {
        elem.classList.remove('btn-percentage-selected')
      })
    })
  }

  peopleSelector() {
    document.querySelector('.btn-people-qtd').addEventListener('input', (e) => {
      this.people = Number(e.target.value)
      this.calcTip()
    })
  }

  calcTip() {
    const tipPerPersonResult = document.querySelector('.tip-value-result')
    const totalPerPersonResult = document.querySelector('.total-value-result')
    const tipPerPerson = (this.bill * this.tip) / this.people || 0
    const totalPerPerson = (this.bill / this.people) + tipPerPerson || 0

    if (this.people === 0) {
      document.querySelector('.btn-people-qtd').classList.add('btn-people-qtd-error')
      document.querySelector('#error-alert').classList.add('error-people-to-zero')
    } else {
      document.querySelector('.btn-people-qtd').classList.remove('btn-people-qtd-error')
      document.querySelector('#error-alert').classList.remove('error-people-to-zero')

      tipPerPersonResult.innerHTML = `$${tipPerPerson.toFixed(2)}`
      totalPerPersonResult.innerHTML = `$${totalPerPerson.toFixed(2)}`
    }
  }

  resetCalc() {
    document.querySelector('.btn-reset').addEventListener('click', () => {
      document.querySelector('.btn-bill').value = ''
      this.bill = 0

      document.querySelectorAll('.btn-percentage').forEach(inputTip => {
        inputTip.classList.remove('btn-percentage-selected')
      })
      this.tip = 0

      document.querySelector('.btn-people-qtd').value = ''
      this.people = 0

      document.querySelector('.tip-value-result').innerHTML = '$0.00'
      document.querySelector('.total-value-result').innerHTML = '$0.00'
    })
  }
}