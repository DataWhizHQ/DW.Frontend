import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,         // Main app module
    ServerModule       // Server-specific rendering support
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
