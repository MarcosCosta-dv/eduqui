import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AjudaComponent} from './ajuda/ajuda.component';
import {InfoComponent} from './info/info.component';
import {MateriaPageComponent} from './materia-page/materia-page.component';
import {ExerciciosComponent} from './exercicios/exercicios.component';
import { AuthGuard } from './services/auth.guard';
// materias
import { MatematicaComponent } from './materias/matematica/matematica.component';
import { PortuguesComponent } from './materias/portugues/portugues.component';
import { ArtesComponent } from './materias/artes/artes.component';
import { InglesComponent } from './materias/ingles/ingles.component';
import { LiteraturaComponent } from './materias/literatura/literatura.component';
import { EspanholComponent } from './materias/espanhol/espanhol.component';
import { GeografiaComponent } from './materias/geografia/geografia.component';
import { HistoriaComponent } from './materias/historia/historia.component';
import { BiologiaComponent} from './materias/biologia/biologia.component'
import { QuimicaComponent } from './materias/quimica/quimica.component';
import { FisicaComponent } from './materias/fisica/fisica.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent},
  {path: 'nav', component: NavComponent},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'verificar-email', component: VerificarEmailComponent},
  {path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  {path: 'ajuda', component: AjudaComponent},
  {path: 'info', component: InfoComponent},
  {path: 'materia', component: MateriaPageComponent},
  {path: 'exercicios', component: ExerciciosComponent},
  {path: 'materia/matematica', component: MatematicaComponent},
  {path: 'materia/portugues', component: PortuguesComponent},
  {path: 'materia/artes', component: ArtesComponent},
  {path: 'materia/ingles', component: InglesComponent},
  {path: 'materia/literatura', component: LiteraturaComponent},
  {path: 'materia/espanhol', component: EspanholComponent},
  {path: 'materia/geografia', component: GeografiaComponent},
  {path: 'materia/historia', component: HistoriaComponent},
  {path: 'materia/biologia', component: BiologiaComponent},
  {path: 'materia/quimica', component: QuimicaComponent},
  {path: 'materia/fisica', component: FisicaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
