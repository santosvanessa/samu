import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
<<<<<<< HEAD
import { dados_UFComponent } from './Dados_UF/dados.component';
import { ResumoComponent } from './Resumo/resumo.component';
import { todosComponent } from './Todos_dados/Todos.component';
import { MetodoTodos } from './services/Metodotodos.service'

=======
import { ResumoComponent } from "./resumo.component";
import { DadosDaUFComponent } from './uf.component';
import { TodosOsDadosComponent } from './todososdados.component';
>>>>>>> 5f782e7f30c183ecb3d4f4461c37c183d73ee172

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
<<<<<<< HEAD
    todosComponent,
    dados_UFComponent
=======
    DadosDaUFComponent,
    TodosOsDadosComponent
>>>>>>> 5f782e7f30c183ecb3d4f4461c37c183d73ee172
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
<<<<<<< HEAD
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
=======
      {
        path: 'resumo',
        component: ResumoComponent
      },
      {
        path: 'dados-da-uf',
        component: DadosDaUFComponent
      },
      {
        path: 'todos-os-dados',
        component: TodosOsDadosComponent
      }
    ])

  ],
  providers: [UFService, SamuService],
>>>>>>> 5f782e7f30c183ecb3d4f4461c37c183d73ee172
  bootstrap: [AppComponent]
})
export class AppModule { }
