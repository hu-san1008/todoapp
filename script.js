// ToDoアイテムを削除する関数
function deleteTodoItem() {
    var deleteButtons = document.getElementsByClassName('delete-button');
  
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    }
  }
  
  // タスク追加関数
  function addTodoItem() {
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
  
    if (todoInput.value !== '') {
      var newTodo = document.createElement('li');
      var todoText = document.createElement('span');
      var timeStamp = document.createElement('span'); // 追加: 時刻を表示するための要素
      var deleteButton = document.createElement('button');
      var now = new Date(); // 追加: 現在の日時を取得
      var dateTimeString = now.toLocaleString(); // 追加: ローカルの日時表記を取得
  
      todoText.innerText = todoInput.value;
      timeStamp.innerText = dateTimeString; // 追加: 日時を表示する要素にテキストをセット
      deleteButton.innerText = '削除';
      deleteButton.classList.add('delete-button');
      newTodo.appendChild(todoText);
      newTodo.appendChild(deleteButton);
      newTodo.appendChild(timeStamp); // 追加: 日時を表示する要素をToDoアイテムに追加
      todoList.appendChild(newTodo);
      todoInput.value = '';
  
      newTodo.addEventListener('click', function() {
        this.classList.toggle('completed');
      });
    }
  
    deleteTodoItem();
  }
  
  // 追加ボタンのクリックイベントリスナー
  document.getElementById('add-button').addEventListener('click', addTodoItem);
  
  // 入力フィールドでEnterキーが押されたときにタスクを追加
  document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      addTodoItem();
    }
  });
  
  // ページ読み込み時に既存のToDoアイテムに削除機能を追加する
  window.addEventListener('load', function() {
    deleteTodoItem();
  });
  