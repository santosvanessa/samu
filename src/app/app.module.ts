import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SamuService }    from './services/samu.service';
import { UFService }    from './services/uf.service';
import { RouterModule }   from '@angular/router';
import { dados_UFComponent } from './Dados_UF/dados.component';
import { ResumoComponent } from './Resumo/resumo.component';
import { todosComponent } from './Todos_dados/Todos.component';
import { MetodoTodos } from './services/Metodotodos.service'


@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    todosComponent,
    dados_UFComponent
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
