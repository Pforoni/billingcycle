const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
//Valida schema no verbo put tbm e retorna o objeto novo após atualizar
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle