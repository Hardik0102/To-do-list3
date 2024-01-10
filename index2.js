let cardCounter = 0;

function addCard() {
    var newCard = document.createElement('div');
    newCard.classList.add('List-Con');

    var cardId = 'card' + cardCounter;
    newCard.setAttribute('id', cardId);
    cardCounter++;

    newCard.innerHTML = `
        <div class="card" contenteditable="true" onblur="updateTitle('${cardId}', this.innerText)">${cardId}</div>
        <div class="input-box">
            <input type="text" id="listName_${cardId}" placeholder="Enter list Title"><br>
            <button onclick="addTask('${cardId}')"><i class="fa fa-plus"></i></button>
        </div>
        <div class="taskList"></div>
        <div class="listButton">
            <button class="cardDel" onclick="deleteList('${cardId}')"><i class="fa fa-trash"></i></button>
        </div>
    `;

    document.getElementById('cardContainer').appendChild(newCard);
}

function addTask(cardId) {
    var inputElement = document.getElementById(`listName_${cardId}`);
    var listTitle = inputElement.value;

    if (listTitle.trim() !== "") {
        var taskList = document.createElement('ul');
        var taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="listContent"> 
                <span id="leftlistCon">${listTitle}</span>
                <span id="RightlistCon">
                    <button class="editButton" onclick="editTask(this)"><i class="fas fa-edit"></i></button>
                    <button class="editButton1" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
                </span>
            </span>
        `;
    
        taskList.appendChild(taskItem);

        var card = document.getElementById(cardId);
        var taskListContainer = card.querySelector('.taskList');
        taskListContainer.appendChild(taskList);

       
        inputElement.value = "";
        
        taskItem.querySelector('.editButton1').onclick = function() {
            deleteTask(this);
        };
    }
}

function updateTitle(cardId, newTitle) {
    console.log(`Updating title for ${cardId} to: ${newTitle}`);
}

function deleteList(cardId) {
    var listContainer = document.getElementById(cardId);
    listContainer.remove();
}

function deleteTask(buttonElement) {
    var taskItem = buttonElement.closest('li');
    taskItem.remove();
}
// js comment