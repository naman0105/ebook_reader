	var bookname = "";

	function selectBook(){
		// var Book = ePub("epub.js-master/books/a.epub");
		bookname = localStorage.getItem("book");
		var Book = ePub("epub.js-master/books/"+ bookname);
		Book.renderTo("area");
	}


	function setBookName(book){
		localStorage.setItem("book",book);
		window.location.href = "https://naman0105.github.io/ebook_reader/readbook.html";
	}