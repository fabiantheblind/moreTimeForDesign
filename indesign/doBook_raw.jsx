﻿main();function main(){    // check if there is a book    if ( app.books.length < 1 ){    errorExit( "you need at least one book with a document in it" );    };// now go thru the books content       for ( var b = 0; b < app.books.length; b++ ){            doBook( app.books[b]);             };}; // end main/** *  this does one book * */ function doBook( aBook ){    // loop the book again to work loop every doc    for(var i = 0; i < aBook.bookContents.length;i++ ){    // get the document    var content = aBook.bookContents[i];    // open the doc    var doc = app.open(content.fullName);    // make a new layer        doSoemthing(doc);       }; // books contents loop end}; // end doBookfunction doSoemthing(doc){        doc.documentPreferences.facingPages = false;// doc.layers.item(1).remove();        };