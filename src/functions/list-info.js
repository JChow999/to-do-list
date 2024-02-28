/**
 * This function creates the to-do list, it allows an array to be inserted to
 * the function. It allows for an optional title as well.
 * @return {string} - Return
 */

function buildBulletList(listBullets) {
    const container = document.createElement('div');
    const listTitle = document.createElement('h3');
    const bulletList = document.createElement('ul');

    container.className = 'to-do-container'

    listTitle.innerText = 'First to-do list'

    for (let x = 0; x < listBullets.length; x++) {
        let bullet = document.createElement('li');
        bullet.innerText = listBullets[x];

        bulletList.append(bullet);
    }

    container.appendChild(listTitle);
    container.appendChild(bulletList);

    return container;
}

export { buildBulletList };