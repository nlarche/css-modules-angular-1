# CSS Modules with Angular
Exemple of Angular 1.5 component and CSS modules

[Demo](http://nlarche.github.io/css-modules-angular-1/)

<img src="https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png" width="150" height="150" />

## Development

1. `npm install`
2. `npm start`
3. `go to http://localhost/3001`

---

```css
.content { /* ... */ }
.bacon { /* ... */ }
.pancakes { /* ... */ }
```

```js
import angular from 'angular'
import styles from './index.css'

var template = `
        <div class="{{::$ctrl.styles.content}}">                   
            <div class="{{$ctrl.styles.pancakes}}">pancakes</div>
            <div ng-class="$ctrl.styles.bacon">bacon</div>
        </div>`;

angular
    .module('app', [])
    .component('myComponent', {
        template: template,
        controller: Controller
    });


function Controller() {
    var vm = this;
    
    vm.$onInit = function() {
        vm.styles = styles;
    }
}
```

