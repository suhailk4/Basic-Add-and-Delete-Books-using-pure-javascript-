function Book(title,author,isbn){

 this.title=title;
 this.author=author;
 this.isbn=isbn;

}


function UI(){}

UI.prototype.addBookToList=function (book){


  const list=document.getElementById('book-list');
  const row=document.createElement('tr');
  row.innerHTML=`
              <td> ${book.title} </td>
              <td> ${book.author}</td>
              <td> ${book.isbn}</td>
              <td> <a href="#" class="delete">X<a</td>
               `;

   list.append(row);            


}



UI.prototype.deleteBook=(target)=>{

     if(target.className==='delete'){
         target.parentElement.parentElement.remove();
     }


}








UI.prototype.showAlert=function showAlert(message,className){

     
             const container= document.querySelector('.container');
     
             const div=document.createElement('div');
             div.className=`alert ${className}`;
             div.appendChild(document.createTextNode(message));
             const form=document.querySelector('#book-form');

             container.insertBefore(div,form);

             setTimeout(()=>{

                document.querySelector('.alert').remove();
             },3000)
}



UI.prototype.clearFields= function (){

    document.querySelector('#title').value="";

     document.querySelector('#author').value="";
    
    document.querySelector('#isbn').value="";
    document.querySelector('#title').focus();

}


document.getElementById('book-form').addEventListener('submit',function(e){


const title=document.querySelector('#title').value;

const author=document.querySelector('#author').value;

const isbn=document.querySelector('#isbn').value;
const ui=new UI();

if(title ==="" || author==="" || isbn===""){

    ui.showAlert('Please fill all the Fields','error');

    
}
  else{
const book=new Book(title,author,isbn);

console.log(book);


 ui.showAlert('Book added succesfully','success')

 ui.addBookToList(book);

 ui.clearFields();

  }
  e.preventDefault();



})




//delete 

document.getElementById('book-list').addEventListener('click',(e)=>{


      console.log(e.target);
      const ui=new UI();

      ui.deleteBook(e.target);
      ui.showAlert('Book removed ','success');
      e.preventDefault();









});












