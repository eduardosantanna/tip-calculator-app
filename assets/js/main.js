new class TipCalculator {
  constructor() {
    this.tip = 0

    this.initialize()
  }

  initialize() {
    this.tipSelector()
  }

  tipSelector() {
    document.querySelectorAll('.btn-percentage').forEach(el => {
      el.addEventListener('click', event => {
        this.tip = Number(event.target.innerHTML.replace(/%/g, '')) / 100
      })
    })
  }
}