import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SamuService }    from './services/samu.service';
import { UFService }    from './services/uf.service';
import { RouterModule }   from '@angular/router';
import { Dados_UFComponent } from './Dados_uf/Dados.component';
import { ResumoComponent } from './Resumo/Resumo.component';
import { todosComponent } from './Todososdados/Todos.component';
import { MetodoTodos } from './services/metodo-todos.service'

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    todosComponent,
    Dados_UFComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosUF',
    component: Dados_UFComponent
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
