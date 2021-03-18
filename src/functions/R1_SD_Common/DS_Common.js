export default class DS_Common {

  checkCustomerType(customer_type) {
    console.log(customer_type)
    if (customer_type === '422') {
      return 'Chemist'
    } else if (customer_type === '424') {
      return 'Institute'
    }
  }
}