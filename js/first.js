	var bookname = "";

	function selectBook(){
		// var Book = ePub("epub.js-master/books/a.epub");
		var Book = ePub("epub.js-master/books/"+ bookname);
		Book.renderTo("area");
	}


	function setBookName(book){
		bookname = book;
		window.location.href = "https://naman0105.github.io/ebook_reader/readbook.html";
	}