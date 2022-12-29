/*
The front end is written in vanilla typescript but as the project get larger, 
to manage html elements, object oriented framwork like pattern is practised with 
the purpose to ensure security and to create extensibility. The basic premise is 
as following :-
1. Any property of "document/(html element)" can/should not be manipulated directly
|  and with bare hands.
2. Every "html element" is encapsulated in a class called "Component" which exposes protected 
|  methods that will be used by the class that will extend it.
3. The class that extend it have opportunity to expose the fuctionality (i.e inner content and styles)
|  of that compoent (e.g div)
4. For those components which are static in nature have been abstracted as "Ele" and Ele is further 
|  abstrated for specific types of tags such as "Div", "Button" and they work like a function like that 
|  in react components but without any reactivity in it.  
5. Toggle Member which is denoted by "TM" throughout this project is base class for most of the feature 
|  (eg "Tabs", "Files") and this feature have job to create and store all components and use the exposed 
|  methods of components as there needs. The "TM" also exposes some methods that are usefull to control
|  a "TM" from other "TM". It have a icon and page property that represent its UI on the toggle. 
6. All "TM"s and other functionalies then initialised in "App" which is a component itself. 1. and 2. 
|  points are the most important points to remember.

Issues with the framework:-
1. Its obivious, it requires lot of boilerplate and that I'm not fan of.
2. Even though the framework tries to ensures that the framework is implemented properly but it is still 
|  not 100% possible to prevent you from doing things that are harder to understand later by others and will
|  create unusual effects that will live untrackable. 
3. So its your job to ensure it follows the point 1. and point 2. of the premise above and knowing unknowingly
|  they sometimes get break needing lot some work to fix.

The only thing I like to add in the end is this is not a convential web framwork that gets in mind, but it is 
just a try manage its codebase.     
*/

import { App } from "./app";
import { activateKeyBindings } from "./keybindings";
import "./base.css";

App.render(document.body);
activateKeyBindings();
