let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let contentDiv = document.createElement('div')
contentDiv.setAttribute('class', 'dog-content')
content.append(contentDiv)

let dogImg = document.createElement('img')
dogImg.setAttribute('class', 'dog-image')
dogImg.setAttribute('src', './assets/rizzo.jpg')
contentDiv.append(dogImg)

let detailDiv = document.createElement('div')
detailDiv.setAttribute('class', 'dog-details')
contentDiv.append(detailDiv)

let header2 = document.createElement('h3')
header2.append('Description:')
detailDiv.append(header2)

let para = document.createElement('p')
para.append('This gentle dog is aloof toward her owner and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
detailDiv.append(para)

let header3 = document.createElement('h3')
header3.append('Feeding Time')
detailDiv.append(header3)

let list = document.createElement('ul')
detailDiv.append(list)

let item = document.createElement('li')
item.append('9:00 am')
list.append(item)

let item1 = document.createElement('li')
item1.append('12:00 pm')
list.append(item1)

let item2 = document.createElement('li')
item2.append('5:00 pm')
list.append(item2)

