function solve() {
    return function (selector, isCaseSensitive) {

        var selectorSubstr = selector.substring(1, selector.length);

        var selectedElement = document.getElementById(selectorSubstr);

        var itemsControlTable = document.createElement('table');

        itemsControlTable.className = 'items-control';

        selectedElement.appendChild(itemsControlTable);

        var addTableRow = document.createElement('tr');

        addTableRow.className = 'add-controls';

        itemsControlTable.appendChild(addTableRow);

        var inputArea = document.createElement('input');

        var enterTextLabel = document.createElement('label');

        enterTextLabel.innerHTML = 'Enter text';

        addTableRow.appendChild(enterTextLabel);

        addTableRow.appendChild(inputArea);

        var addBtn = document.createElement('button');

        addBtn.innerHTML = 'Add';

        addBtn.type = 'button';

        addBtn.className = 'button';

        addTableRow.appendChild(addBtn);

        var searchTableRow = document.createElement('tr');

        searchTableRow.className = 'search-controls';

        itemsControlTable.appendChild(searchTableRow);

        var searchLabel = document.createElement('label');

        searchLabel.innerHTML = 'Search:';

        searchTableRow.appendChild(searchLabel);

        var searchInput = document.createElement('input');

        searchTableRow.appendChild(searchInput);

        var resultTableRow = document.createElement('tr');

        resultTableRow.className = 'result-controls';

        itemsControlTable.appendChild(resultTableRow);

        var resultUl = document.createElement('ul');

        resultUl.className = 'items-list';

        resultTableRow.appendChild(resultUl);

        var listItemLiTemplate = document.createElement('li');

        listItemLiTemplate.className = 'list-item';

        var xBtnTemplate = document.createElement('button');

        xBtnTemplate.className = 'button';

        xBtnTemplate.innerHTML = 'X';

        listItemLiTemplate.appendChild(xBtnTemplate);

        addBtn.addEventListener('click', function (event) {
            
            var listItemLiClone = listItemLiTemplate.cloneNode(true);

            listItemLiClone.innerHTML += event.target.parentNode.childNodes[1].value;

            listItemLiClone.childNodes[0].addEventListener('click', function (event) {
                listItemLiClone.remove();
            });

            resultUl.appendChild(listItemLiClone);
        });

        searchInput.addEventListener('keyup', function (event) {

            for (var i = 0; i < resultUl.childNodes.length; i++) {
                
                var inputAreaValue = event.target.value;

                if (isCaseSensitive === undefined) {
                    isCaseSensitive = false;
                }

                if (isCaseSensitive === false) {
                    
                    resultUl.childNodes[i].lastChild.data = resultUl.childNodes[i].lastChild.data.toLowerCase();
                    inputAreaValue = inputAreaValue.toLowerCase();
                }

                if (resultUl.childNodes[i].lastChild.data.indexOf(inputAreaValue) === -1) {
                    resultUl.childNodes[i].style.display = 'none';
                }
                else {
                    resultUl.childNodes[i].style.display = '';
                }
            }
        });
  };
}

module.exports = solve;