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
