const tabs = (btnSelector, contentSelector, btnActiveSelector, contentActiveSelector) => {
    const tabsBtn = document.querySelectorAll(btnSelector)
    const tabsContent = document.querySelectorAll(contentSelector)

    tabsBtn.forEach(function (item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentContent = document.querySelector(tabId);
    
            if ( ! currentBtn.classList.contains(btnActiveSelector) ) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove(btnActiveSelector);
                });
        
                tabsContent.forEach(function(item) {
                    item.classList.remove(contentActiveSelector);
                });
        
                currentBtn.classList.add(btnActiveSelector);
                currentContent.classList.add(contentActiveSelector)
            }
        });
    });
}

const activeNumber = (itemsSelector, itemActiveSelector) => {
    const items = document.querySelectorAll(itemsSelector)

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            items.forEach(item => {
                item.classList.remove(itemActiveSelector)
            })
            e.target.classList.add(itemActiveSelector)
        })
    })
}

tabs('.up-button-tab', '.tab-diagram', 'up-button-tab_active', 'tab-diagram_active')
tabs('.down-button-tab', '.info-block', 'down-button-tab_active', 'info-block_active')
activeNumber('.table-item', 'table-item_active')