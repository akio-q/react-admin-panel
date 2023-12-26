import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './components/editor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Editor />
);

// function getPageList() {
//   $("h1").remove();
//   $.get("./api", data => { 
//     data.forEach(file => {
//       $("body").append(`<h1>${file}</h1>`)
//     })
//   }, "JSON");
// }

// getPageList();

// $("h1").fadeOut();
// $("button").click(() => {
//   $.post("./api/createNewPage.php", { 
//     "name": $("input").val()
//   }, () => {
//     getPageList();
//   }) 
//   .fail(() => {
//     alert("Page already exist!");
//   })
// })