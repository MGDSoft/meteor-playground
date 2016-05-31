import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import {Tasks} from "../collections/tasks";
import { Mongo }       from 'meteor/mongo';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            {{ tasks | json }}
            <!--<ul>-->
                <!--<li *ngFor="let task of tasks">-->
                    <!--{{ task.title }}-->
                <!--</li>-->
            <!--</ul>-->
        </div>
  `
})
class App {

    tasks: Mongo.Cursor<Task>;

    constructor(){
        this.tasks = Tasks.find({});
        // Sometimes get all data sometimes is empty :S
        // console.log(Tasks.find({title: 'Football'}).fetch());
        // console.log(Tasks.find({title: 'Football'}).fetch());
    }
}

bootstrap(App);