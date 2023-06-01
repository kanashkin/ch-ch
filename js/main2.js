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

                if (currentContent.classList.contains('finance')) {
                    document.querySelector('.down-block').classList.add('down-block_finance_active')
                } else if (
                        currentContent.classList.contains('loyalty')
                        || currentContent.classList.contains('shipment')
                        || currentContent.classList.contains('dealer')
                        ) {
                    document.querySelector('.down-block').classList.remove('down-block_finance_active')
                }
        
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

const textBlockSize = () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.finance .info-description').style.width = window.innerWidth - 70 + 'px'
    }
}

tabs('.up-button-tab', '.tab-diagram', 'up-button-tab_active', 'tab-diagram_active')
tabs('.down-button-tab', '.info-block', 'down-button-tab_active', 'info-block_active')
activeNumber('.table-item', 'table-item_active')
textBlockSize()