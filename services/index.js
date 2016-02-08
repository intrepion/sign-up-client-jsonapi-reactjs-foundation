const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export const api = {
  signIn(username, password) {
    return new Promise( (resolve, reject) =>
        setTimeout(() => {
          if(cart.addedIds.length <= MAX_CHECKOUT)
            resolve(cart)
          else
            reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`)
        }, TIMEOUT)
    )
  }
}