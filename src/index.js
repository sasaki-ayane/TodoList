import "./styles.css";

//1
// const addButton = document.getElementById("addButton"); //追加ボタン
// const todoList = document.getElementById("todoList"); //todoリスト
// const addtext = document.getElementById("addtext"); //入力欄

// //追加ボタンが押された時
// addButton.onclick = () => {
//   //入力欄が空の場合アラートを出す
//   if (addtext.value === "") {
//     alert("入力してください");
//   }
//   //入力欄の値を取得
//   const add = document.getElementById("addtext").value;
//   //入力欄初期化
//   document.getElementById("addtext").value = "";
//   const li = document.createElement("li");
//   li.innerText = add;
//   const ul = document.querySelector('ul');
//   ul.appendChild(li);
// };

const addtext = document.getElementById("addtext");

const onClickAdd = () => {
  //入力欄が空の場合アラートを出す
  if (addtext.value === "") {
    alert("入力してください");
  }
  //入力欄の値を取得
  const add = document.getElementById("addtext").value;
  //入力欄初期化
  document.getElementById("addtext").value = "";
  //li要素作成
  const li = document.createElement("li");
  //ul要素取得
  const ul = document.getElementById("todoList");
  //ul要素に作成したli要素追加
  ul.appendChild(li);
  //li要素のinnerTextに入力内容(add)を代入
  li.innerText = add;
  //コンソール確認
  console.log(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
