# Live User Filter

![screen recording](https://media.giphy.com/media/ZHnVD0BRQq0hmDsLT7/giphy.gif)

## project notes

1. HTML

- container  
  text container

  - h3: Live User Filter
  - p: Search by name and/or location
  - input: Search

  user container

  - img: photo
  - h5: name
  - small: location

2. CSS

- user container: scroll

3. JavaScript

- randomuser.me
- async await
- filter / search

---

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

---

## Takeaways from the instructor

1. HTML

- header tag
- ul tag for the user list
  - li > user data
  - li > h3: Loading...

2. CSS

- for the user image: object-fit: cover
- for the border: .user-list li:not(:list-of-type) {border-bottom: 1px solid #eee;}
- set hide class in CSS: user-list li.hide {display: none;}

3. JavaScript

- fetch data push to an empty array(var listItem) to use for filtering function
- event listener input

```
function filterData(searchTerm) {
  listItems.forEach(item => {
    if ( item.innerText.toLowerCase().includes(searchTerm.toLowerCase()) ) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
```
