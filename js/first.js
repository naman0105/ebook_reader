	var bookname = "";

	function selectBook(){
		// var Book = ePub("epub.js-master/books/a.epub");
		var Book = ePub("epub.js-master/books/"+ bookname);
		Book.renderTo("area");
	}


	function setBookName(var book){
		bookname = book;
	}