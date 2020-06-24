// timestamp in shorthand syntax.
console.log(+new Date())

/**
 * adding + to boolean converts to number
 */
console.log(+true)
console.log(+false)

const random = {
  'valueOf' : ()=> Math.floor(Math.random()*100)
}

console.log(+random)

const bubblesort = arr =>{
  const length = arr.length
  for(let i =0; i < length; i++){
    for(let j = 0; j < length -i-1; j++){
      if(arr[j] > arr[j+1]){
        debugger;
        [arr[j] , arr[j+1]] = [arr[j + 1] , arr[j]]
      }
    }
  }
  return arr;
}

bubblesort([2,10,9,1,8,3])

let money = 10
let hasStudied = false;
const relax = () => console.log('relax')
const study = () => console.log('study')
hasStudied ? (money++, relax()) : (money/=2, study())
console.log(money)
