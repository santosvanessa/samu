import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SamuService }    from './services/samu.service';
import { UFService }    from './services/uf.service';
import { RouterModule }   from '@angular/router';
import { dados_UFComponent } from './Dados_uf/Dados.component';
import { ResumoComponent } from './Resumo/Resumo.component';
import { todosComponent } from './Todos_dados/Todos.component';
import { MetodoTodos } from './services/Metodotodos.service'
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    todosComponent,
    dados_UFComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosUF',
    component: dados_UFComponent
  },
{
  path: 'todos',
  component: todosComponent
}
    ])
],
  providers: [SamuService, UFService, MetodoTodos],
  bootstrap: [AppComponent]
})
export class AppModule { }
