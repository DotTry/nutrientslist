import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {OnsenModule} from 'angular2-onsenui';

import {routing, appRoutingProviders}      from './app.routing';
import {listApp}                       from './app/listApp';
import {Tabbar}                            from './app/components/tabbar/tabbar';
import {Home}                              from './app/components/home/home';

import {LazyRepeat}                        from './app/components/home/demos/lazy-repeat';

import {itemPage}                          from './app/components/home/demos/item.page';
import {Animations, TempPage}              from './app/components/animations/animations';

// enableProdMode()

@NgModule({
    imports: [
        BrowserModule,
        OnsenModule,
        HttpModule,
        RouterModule,
        routing,
    ],
    declarations: [
        listApp,
        Tabbar,
        Home,
        LazyRepeat,
        itemPage,
        Animations,
        TempPage,
    ],
    entryComponents: [
        LazyRepeat,
        itemPage,
        TempPage,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        appRoutingProviders,
    ],
    bootstrap: [
        listApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
