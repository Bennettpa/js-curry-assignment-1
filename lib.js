'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const total =
  (listings, items) => {
    let result = 0
    for (let item in items) {
      for (let listing in listings) {
        result += listedPrice(listing, item.name)
      }
    }
    return result
  }

/**
* transform carts into an array of { customer, total }
*/
const calculateTotals =
  listings =>
    carts => {
      let result = []
      for (let cart in carts) {
        console.log(cart.customer)
        result.push((cart.customer, total(listings, cart.items)))
      }
      return result
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
