// code to run on server at startup
import {Tasks} from "../collections/tasks";

export function loadTaks() {
    if (Tasks.find().count() !== 0) {
        return;
    }

    Tasks.insert(<Task>{title: 'chores', description: 'typical chores'});
    Tasks.insert(<Task>{title: 'Run', description: 'Run'});
    Tasks.insert(<Task>{title: 'Football', description: 'Play/Train with my team'});
}