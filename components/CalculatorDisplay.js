app.component('calculator-display', {
  props: {
    loanAmount: Number,
    loanTerm: Array,
    creditRating: Array,
    discount: Boolean
  },
  data() {
    return {
      loanAmount: 20000,
      loanTerm: ['12 Months, 24 Months, 36 Months, 48 Months, 60 Months'],
      creditRating: ['Excellent, Good, Fair, Poor'],
      discount: false
    }
  },
  template:
  /*html*/
  `
  <ul>
    <li>Loan Amount: {{ loanAmount }}</li>
    <li>Loan Term: {{ loanTerm }}</li>
    <li>Credit: {{ creditRating }}</li>
    <li>Discount: {{ discount }}</li>
  </ul>
  `
})