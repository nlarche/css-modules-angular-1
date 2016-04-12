import angular from 'angular'
import styles from './index.css'

var template = `
        <div class={{::$ctrl.styles.content}}>                   
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



