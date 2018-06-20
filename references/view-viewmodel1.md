#### https://stackoverflow.com/questions/4061440/asp-net-mvc-model-vs-viewmodel
#### ASP.NET MVC Model vs ViewModel

##### EXCERPT

###### In the simplest of terms, I like to think of the following:

###### Model: Strictly looks and feels like your data model. For all intents and purposes it is only a class representation of your data model. It has no knowledge of your View or any elements within your View. That said, it should not contain any attribute decorators (ie; Required, Length, etc.) that you would use for your View.

###### View Model: Serves as a data-binder between your View and your Model and in many cases, is also a wrapper for your Model. It would be rendered useless without the View, so it typically isn't reusable across multiple Views and Controllers like a standard Model is.

###### As an example, your Model may have the following properties, which are direct representations of your data source:
            public string FirstName { get; set; }
            public string LastName { get; set; }
######    Now, since your View Model is tied to your View, it may have the following property - which concatenates the Model's FirstName field and LastName field together as one string:

         [Display(Name = "Customer Name")]                
            public string CustomerFullName { get { return String.Format("{0} {1}", myModel.FirstName, myModel.LastName) }}
            
##### EXCERPT 2

###### WikiPedia has a more complete description of Model vs. ModelView than you'll get in an SO answer: http://en.wikipedia.org/wiki/Model_View_ViewModel

###### I quote:

###### Model: as in the classic MVC pattern, the model refers to either (a) an object model that represents the real state content (an object-oriented approach), or (b) the data access layer that represents that content (a data-centric approach).

###### View: as in the classic MVC pattern, the view refers to all elements displayed by the GUI such as buttons, windows, graphics, and other controls.

###### ViewModel: the ViewModel is a “Model of the View” meaning it is an abstraction of the View that also serves in data binding between the View and the Model. It could be seen as a specialized aspect of what would be a Controller (in the MVC pattern) that acts as a data binder/converter that changes Model information into View information and passes commands from the View into the Model. The ViewModel exposes public properties, commands, and abstractions. The ViewModel has been likened to a conceptual state of the data as opposed to the real state of the data in the Model.


