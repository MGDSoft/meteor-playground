import { Meteor } from 'meteor/meteor';
import {loadTaks} from "./load-tasks";

Meteor.startup(loadTaks);
