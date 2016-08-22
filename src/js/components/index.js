import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Error component
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

// ShowAuth Directive:
import ShowAuthed from './show-authed.directive.js';
componentsModule.directive('showAuthed', ShowAuthed);

// Follow Btn
import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

export default componentsModule;
