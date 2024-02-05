const inputNumber = document.getElementById('number')
const result = document.getElementById('output')
const convertButton = document.getElementById('convert-btn')

const numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
const conversions = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

convertButton.addEventListener('click', () => {
    result.innerHTML = convert(parseInt(inputNumber.value))
  })

inputNumber.addEventListener('keydown', (e) => {
  if( e.key === 'Enter' ){
    result.innerHTML = convert(parseInt(inputNumber.value))
  }
})

const convert = (num) => {
  result.style.display = 'flex'
  
  if( num < 1 ){
    return `<p> Please enter a number greater than or equal to 1</p>`
  } else if( num >= 4000 ){
    return `<p> Please enter a number less than or equal to 3999</p>`
  } else if( !num ){
    return `<p>Please enter a valid number</p>`
  }

  let temp= ''
  while( num > 0 ){
    for( let i = 0; i < conversions.length; i++ ){
      while( conversions[i] <= num ){
        temp += numerals[i]
        num -= conversions[i]
        console.log(num)
      }
    }
  }
  return temp
}
