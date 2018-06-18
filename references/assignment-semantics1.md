#### https://www.apress.com/gp/blog/all-blog-posts/assignment-semantics/15805464
##### 6/1/18
##### Assignment Semantics in Python, JavaScript, Java, C++, and Rust
##### By Carlo Milanesi

#### EXCERPT

### What does happen when a data collection is copied and then the new copy is changed? Does the original remains the same, or does it changes too?

#### If you think of copying as creating a completely new object, of course you expect that any change to the new copy does not affect the original object. But if you think of copying as creating a new name for the same, single object, then you expect that any change to the object through the new name appears also when you access the same object through the old name.

##### JavaScript, Python, and Java have an efficient but somewhat surprising and error-prone semantics for their assignment operator. It actually copies the whole value for primitive objects, but it copies only a reference for composite objects, actually creating aliases to the referred object.

##### Instead, C++ assignment operator has the safer and more consistent, but possibly inefficient, behavior of copying always the referred object. This is odd, as usually C++ is considered less safe but more efficient than the previously cited languages.

##### Rust language manages to combine the semantic safety of C++ (i.e. no surprises) with the efficiency of Python, JavaScript, and Java (i.e. copy just the minimum required).
