#### https://msdn.microsoft.com/en-us/magazine/dd419663.aspx
#### Patterns - WPF Apps With The Model-View-ViewModel Design Pattern
###### By Josh Smith | February 2009

##### EXCERPT
###### In addition to the WPF (and Silverlight 2) features that make MVVM a natural way to structure an application, the pattern is also popular because ViewModel classes are easy to unit test. When an application's interaction logic lives in a set of ViewModel classes, you can easily write code that tests it. In a sense, Views and unit tests are just two different types of ViewModel consumers. Having a suite of tests for an application's ViewModels provides free and fast regression testing, which helps reduce the cost of maintaining an application over time.

###### In addition to promoting the creation of automated regression tests, the testability of ViewModel classes can assist in properly designing user interfaces that are easy to skin. When you are designing an application, you can often decide whether something should be in the view or the ViewModel by imagining that you want to write a unit test to consume the ViewModel. If you can write unit tests for the ViewModel without creating any UI objects, you can also completely skin the ViewModel because it has no dependencies on specific visual elements.
