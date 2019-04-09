# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## What is SQL
- Structured Query Language
  - not a programming language
  - is a DSL (domain-specific language)

## What is SQL for
- contains a set of commands that help manipulate data more effectively
- "Structured repository" => relational database
- database is a collection of data
- Problem it fixes => Ruby alone: runs Ruby code on execution, but nothing gets persisted across different runs of our code

## What kinds of operations can we do in SQL
- commands for manipulating data in a table:
C reate => "insert"
R ead => "select"
U update => "update"
D elete => "delete"

- commands for structuring the database
C reate => "create"
R ead => ".schema"
U update => "alter"
D elete => "drop"

## what is SQLite3?
- it is a program
- a database manager
- there is a ruby gem to interact with this program
