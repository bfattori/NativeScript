﻿import types = require("utils/types");
import timer = require("timer");
import consoleModule = require("console");
import http = require("http");
import dialogs = require("ui/dialogs");

global.setTimeout = timer.setTimeout;
global.clearTimeout = timer.clearTimeout;
global.setInterval = timer.setInterval;
global.clearInterval = timer.clearInterval;

// Temporary workaround for console in iOS. We will use runtime console instead our implementation.
if (types.isUndefined(global.NSObject)) {
    global.console = new consoleModule.Console();
}

global.XMLHttpRequest = (<any>http).XMLHttpRequest;
global.alert = dialogs.alert;

export function Deprecated(target: Object, key?: string | symbol, descriptor?: any) {
    if (descriptor) {
        var originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`${key} is deprecated`);

            return originalMethod.apply(this, args);
        }

        return descriptor;
    } else {

        console.log(`${(target && (<any>target).name || target)} is deprecated`);
        return target;
    }
}

global.Deprecated = Deprecated;