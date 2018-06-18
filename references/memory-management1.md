#### https://dev.to/ben/how-does-your-language-handle-memory--1c4
#### How does your language handle memory?
##### EXCERPT

###### I'll add to the .NET answer. I've coded in VB, C#, and F# on .NET but never used unmanaged code.

###### First, the managed side actually has two kinds of memory allocation for two kinds of objects (Reference and Value objects). Reference objects go on the Heap and are tracked by the garbage collector. They can be referenced from any other code. The GC keeps track of which code still has a reference to the objects it manages, so it knows when it can safely free the memory. The GC periodically pauses execution of code to run its mark and compact routine.

###### The garbage collector is also "generational". When objects are created, they are at Generation 0, which is the most-frequently checked for collection. Longer-lived objects will eventually move to higher generations which don't get checked as often. This avoids needlessly scanning thru objects which will not get collected anyway.

###### Value objects go on the stack (as in stack trace and stack overflow) and they are not garbage collected. They are local to the stack frame of the running code. When the stack frame exits, the Value object's memory is automatically freed.

###### Most devs use Reference objects (class in C#) to build their data structures rather than Value objects (e.g. struct in C#). Obviously the Value objects have an advantage because no cycles are wasted with garbage collection management. However, reference objects are often better when an object is "large" (more than 16 bytes, but that is debatable) or is passed around a lot. Since Value objects live and die on the local stack frame, they have to be copied in their entirety when they are passed up and down the stack. (down = calling another method with the object as argument, up = returning the object to the calling method, unless I have those backward). Whereas Reference objects only have their pointers copied between stack frames, not the entire structure. So Reference objects are better to use if they are passed around a lot or they are large in size due to the cost of copying a Value object.

###### As for using, I have never used it for memory management. I use it to avoid having to manually code a .Close() statement on things like database connections. using basically says "call .Dispose() (and therefore Close for connection objects) whenever this variable goes out of scope." using only works on objects that implement the interface IDisposable. There's no special memory magic to it. See this reference. (I've never used destructors either.)

##### EXCERPT
I know Python a little better than I know Ruby and I'm not a GC expert so I'm going to keep it as easy to understand (for me too :D) as I can:

###### Python

###### Python has garbage collection as many other high level languages. Its GC uses a reference counting algorithm AND a generational algorithm.

###### Let's say variables are "mere" labels to some value in memory. Each variable pointing to the same value is a reference. When there are no variables pointing to that memory space the GC is free to collect the memory occupied by that value.

        class Foo:
          pass

        a = Foo()
        b = a
        c = b
        
        
###### In this case, in memory, there are three pointers to the istance of Foo(), you can verify that by using the id() function:        

        >>> class Foo: pass
        ...
        >>> a = Foo()
        >>> b = a
        >>> c = b
        >>> id(a), id(b), id(c)
        (4468012592, 4468012592, 4468012592)
        
###### As you can see all three point to the same object, which means it has a reference count of 3.

###### If I were to delete all three references, for example by using del:

        >>> del a; del b; del c
        
        
###### at that point in memory the GC can (optionally) decide to collect the space occupied by the instance of Foo() because the reference count of that object is 0.

###### Primitives types like numbers have only one instance of the value in memory, so they are not tracked by the GC.        
