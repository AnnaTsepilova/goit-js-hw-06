
const categoriesItemRef = document.querySelectorAll('#categories li.item');
console.log('Number of categories: ', categoriesItemRef.length);

const itemTitleRef = document.querySelectorAll('#categories h2')
    .forEach(title => {
    console.log('Category: ', title.textContent);

    const categoriesElRef = title.parentNode.querySelectorAll('ul li');
    console.log('Elements: ', categoriesElRef.length);
});
