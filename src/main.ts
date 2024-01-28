import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { NgModule } from '@angular/core';


// const config: SocketIoConfig = { url: 'http://localhost:8080/ws', options: {} };

// @NgModule({
//   declarations: [
//     // ...
//   ],
//   imports: [
//     SocketIoModule.forRoot(config),
//     // ...
//   ]
// })
// export class AppModule { }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
