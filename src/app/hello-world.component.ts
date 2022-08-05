import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world', // this is a tag used in template file to render Component
    template: '<h1>{{title}}</h1>', // in most cases this template is seperate HTML file. to use external HTML file
                                    // use templateUrl property to the Component decorator.
                                    // Within the same file, use the template property 
    styles: [`
        h1{
            color: blue;
        }`]  // in most cases this styles property is seperate CSS file. to use external CSS file
                     //use stylesUrls property to the Component decorator.
                        // Within the same file, use the styles property 
})

export class HelloWorldComponent { // properties, functions, dependencies, lifecycles go here
    title = 'Hello World!';

}
