* Objectives
    - Build a Rails RESTful app with full CRUD capabilities
    - Distinguish between `form_for` and `form_tag`, and use both helpers
    - Use Rails link helpers to build links
    - Use `rails routes` to abstract URLs
    - Use "before" actions to minimize repeated code

* For the week
    <!-- - Understand the file structure better -->
    <!-- - See an example of an app built in Rails -->
    - Best practices for optimizing
    - How to use a join table
    <!-- - Rails migrations -->
    <!-- - Rails generators -->
    <!-- - Routes and the mysteries therein -->
    - Rails cheatsheet about how the pieces fit together (Spark Notes)


Collection-select:

<%= f.collection_select(:retailer_id, Retailer.all, :id, :name, {:prompt => 'Choose a retailer'}) %>

:retailer_id - (field we are filling in on a Snack)
Retailer.all - (collection to iterate over and populate the dropdown)
:id - Field(method) from a retailer that will fill in the value parameter of the option tag (i.e., what gets put into the params hash)
:name - Field(method) from a retailer that will fill in the display text of the option tag

hostess.id (2)
hostess.name ("Hostess")

<option value=2>Hostess</option>