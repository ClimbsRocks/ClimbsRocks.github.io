there's no obvious way to escape user input when loading data into a file. find a way to do this and share!

one obvious solution is in node, to read each line from the file, run mysql.escape() on the user input from that line, and then insert that row into the db. 