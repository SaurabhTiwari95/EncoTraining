# EncoTraining

```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


```
## TypeScript
    
    -   it is a superset of javaScript
    -   Strong typing
    -   gives classes,types,Interfaces
    -   it allows to write much more robust code which
        gets tested at not just the time we run it but while we write it
    -   it doesn't run in the browser
    -   it doesn't compiles in the browser in the end JS runs in     the browser.
## Section 1
#### Lecture 13
    Module Introduction
#### Lecture 14
    **How an Angular App gets Loaded and Started**

#### Lecture 15
    **Components**
    
    -   The AppComponent is the root component.
    -   It allows us to split up the complex app into reusable parts.

#### Lecture 16
    **Creating A Component**
    
        -   All other components we create, their selector will not be added to **index.html** file.
        -   Their selectors are added to the **app.component.html** file because this is the root components of our app where we add the other parts.
        -   The componentsimply just a typeScript class so that angular is able to instantiate, to create objects based on the blueprints we set up here.
        -   decorators are typeScript features which allows you to enhance class and enchance the elements.
        -   The selector should be a string.
#### Lecture 17
    
        -   It is a bundle of functionality of our app
        -   It basically gives the angular information about which features my app has.
        -   **imports** simply allows us to add some modules.

#### Lecture 18
#### Lecture 19
#### Lecture 20
    **Working with Component Templates**
#### Lecture 21
    **Working with Component Styles**
#### Lecture 22
    **Component Selector**
#### Lecture 23
    **Databinding**
    
            Databinding = Communication
        **Output Data**
            String Interpolation {{ data }}
            Property binding [property]="data"
        **React to (User) Events**
            Event Binding {event}="expression"
        **Combination of both**
            Two Way binding [(ngmodel)]="data"
#### Lecture 25
    **String interpolation**
        
        It is used for the output of the data in a template
#### Lecture 26
    **Property Binding**     
        
        -   It is used to change the property dynamically at run time in the DOM,
        -   Property Binding makes very easy to interact with the DOM 
#### Lecture 27
    **String Interpolation Vs Property Binding**
        
        -    If we want to output something in our template and print some text to it, we use String Interpolation.
        -    If we want to change some property be that of HTML
             element or of a directive or a component use Property Binding.
        -    String Interpolation only works with the normal template not with any other expression of that template.
#### Lecture 28
    **Event Binding**
        
        - Listening to events
        - Create a method
        - to call this method *event binding* comes into play
            where we use some attribute to call this method with event binding.
        -  SYNTAX :  
                    (eventName) = "methodName()"
            EXAMPLE :
                    (Click) = "onCreateTest()"
        -   We can also put the code between the parenthesis but generally we shouldn't put too much code in our HTML templates. 
#### Lecture 29
    **Bindable Properties and Events**
        
        ```
            How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

            Important: For events, you don't bind to onclick but only to click (=> (click)).
        ```

#### Lecture 30
    **Passing and Using Data with Event binding**
    
    -   $event is a reserve variable name when we are using Event Binding, it is simply a data emitted with the event.
    -   We can capture the data by passing $event as an argument to the method we are calling.
    -   $event object is used to fetch the event data .

#### Lecture 31
    **Two way Databinding**

#### Lecture32
    **Combinig all forms of data binding**
        
        -   Event Binding to listen to the click.
        -   String Interpolation to OUTPUT the data
        -   Property Binding to call a method.
        -   Two way Bining to fetch our INPUT data.

#### Lecture 35
    **Directives**
        
            - Directives are instructions in the DOM
            - Components are type of directives with a template
            - there are directives without template.
                ```
                    <p appTurnGreen> Receives a green Background!! </p>
                ```
            -  We add directies with a attribute selector
                ```
                    @Directive({
                        selector : '[appTurnGreen]'
                    })
                        export class TurnGreenDirective{
                        /*Here we put the logic of directive to turn the background Green*/
                    }
                ```
#### Lecture 36 
    **Using ngIf to OUTPUT data Conditionally**
        
        -   It is a structural directive
#### Lecture 37 
    **Using ngIf with an else condition**
        
        -   We can achieve it by placing a local reference
#### Lecture 38 
    **Styling Elements dynamically with ngStyle*
        
        -   Unlike structural directive,attribute directives don't add or remove elements.They only change the element they were placed on.

#### Lecture 39
    **Applying classes dynamically with ngClass**
#### Lecture 40
    **Outputing Lists with ngFor**
        
        -   *ngFor = "let test of property"
                -   /*Here **test** is any name we would like for the element*/
#### Lecture 42
    **Getting Index using ngFor**

#### Lecture 61
    **Debugging our code in the browser using Sourcemaps**
        
        -   JavaScript supports soourcemaps.
        -   It is a little addition to our bundle by the CLI, which allow the browser to translate our JS-code to TypeScript code.
                        OR
        -   Simply map our JS-code into TypeScript code(files), in development these source maps will only be stripped for production.
#### Lecture 64
    **Splitting Apps into components**
#### Lecture 65
    **Overview of Property & Event Binding**
#### Lecture 66
    **Binding to custom properties**
        -   By default all properties of component are
            accessible from inside these components.
        -   For parent component to bind the child component
            we need to us
            e a decorator.
        -   We have to be explicit about which properties we want to expose.
        -   @Input() is the decorator is needed to add in order to access the component.
        -   It needs to be imported from @angular-core.
#### Lecture 67
    **Assigning An Alias to the components**
        -   We can pass an argument to our @Input decorator 
            @Input('argument').
        -    now from the component where we implement our
             component,we have to target this argument if we want to bind to the property.
        -    But after assigning the alias we have to be sure to use the alias because then the previous property name will not work.
        -    @Input('alias_argument') element:{type:string,name:string,content:string};
#### Lecture 68 
    **Binding to Custom Events**
        -    **How a child component communicates with the parent component ??**
        -   @Output() is added to make a property listenable from the outside.
        -   Just like @Input() we can also add an alias to @Output.
        - And the other name will not be exposed to the outside.
#### Lecture 71
    **View Encapsulation**
        ```
            Whichever styles we define for a component is only applied to their specific element by Angular(this behavior is imposed by Angular),it is not a default CSS behavior.
        ```
            **How Angular does that**
        ```
                Angular enforces this style Encapsulation,It simply gives the same attribute to all elements in a component and does this for each component with different UNIQUE attribute name.
                        So the sytles can only be applied to the elements of it's components.
                It kind of emulates the shadow DOM,it is a technology which is not supported by all browsers,where each element has kind of shadow DOM behind it where it then could assign styles to each element.
                        But this(shadow DOM) technology is not supported  by all browsers so angular emulates this View Encapsulation behavior.
        ```
#### Lecture 72
    **More on View Encapsulation**
        -    We can override the view Encapsulation property by
             add a property to the typeScript file in the @Component decorator which is called {encapsulation}
        -    encapsulation : ViewEncapsulation.Emulated(default mode)
        -   (none mode) : this will override the ViewEncapsulation property but if we now define any style in the CSS file of this component it will actually  get applied globally.
        -   (Native) : It uses the shadow DOM technology this should give the same result as before EMULATED but only in the browser which support the shadow DOM technology.
#### Lecture 73
    **Using Local references**
        -    A local raference can be placed on any HTML element
        -      SYNTAX :
                        #nameLocalTest
                            {it is started by a hashtag(#)}
        -   We can use local references inside our template but only inside the HTML template and not inside the typeScript code.
#### Lecture 74
    **[@ViewChild()](https://angular.io/api/core/ViewChild)**
        ```
            In Angular 8, the @ViewChild() syntax needs to be changed slightly:

            Instead of :

                @ViewChild('serverContentInput') serverContentInput: ElementRef;
            
            use :

            @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
        ```
#### Lecture 75
    **Getting Access to the Template & DOM with @ViewChild()**
        -   First create a localreference
            #name_localreference in the HTML file 
        -   Then in the TypeScript File
                Add a property and then add @ViewChild in front of it.
        -   Now the @ViewChild will not work without an argument
                The local reference(it is passed as a selector as a string) we created will be passed as an argument in the @ViewChild .
                for Ex: 
                        @viewChild('name_localReference') propertyName: type_of_property;
        -   With this we get a hold of our DOM
#### Lecture 76
    **Projecting Content into Components with ng-Content**
        -    <ng-ontent></ng-content> It is a special directive looks like an element is placed at the place where we wnat to  render the content.
        -    This server as hook we can place in our component to mark the place for angular where it should add the contents it will find between opening and closing tag here.
#### Lecture 77
    **Understanding the Component LifeCycle**
        -   ngOnChanges:Called after a bound input property changes
        -   ngOnInit: Called once the component is initialized
        -   ngDoCheck: Called during the every change detection 
        -   ngAfterContentInit: Called after content(ng-content) has benn projected into View
        -   ngAfterContentChecked: Called every time the projected content has been checked
        -   ngAfterViewInit: Called after the component's view(and child views) has been initialized
        -   ngafterViewChecked: Called every time the view(and child views) has been checked
        -   ngOnDestroy: Called once the component is about to be destroyed
##### Lecture 78 
    **Seeing Lifecycle hooks in Action**

#### Lecture 79 
    **Lifecycle hooks and Template Access** 
             ngAfterViewInit: Gives you access to the template element we can access them and use their values and so on and before this lifecycle hook has been reached we can't do any of that(like access the value of the DOM)
#### Lecture 80 
    **@ContentChild in Angular 8**
        ```
            @ContentChild() in Angular 8
                In Angular 8, the @ContentChild() syntax which you'll see in the next lecture needs to be changed slightly:

            Instead of:

                @ContentChild('contentParagraph') paragraph: ElementRef;
            use

                @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
        ```
#### Lecture 81
    **Getting access to ng-Content with @ContentChild **
        -   