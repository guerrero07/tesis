import { RouterModule } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { CircularComponent } from './vistas/Padres/circular/circular.component';
import { CitacionComponent } from './vistas/Padres/citacion/citacion.component';
import { EntrevistaComponent } from './vistas/Padres/entrevista/entrevista.component';
import { NuevoComponent } from './vistas/Comunicado/nuevo/nuevo.component';
import { DetalleComponent } from './vistas/Comunicado/detalle/detalle.component';
import { ListaComponent } from './vistas/Comunicado/lista/lista.component';
import { PendienteComponent } from './vistas/Comunicado/pendiente/pendiente.component';
import { MisionVisionComponent } from './vistas/Nosotros/mision-vision/mision-vision.component';
import { NovedadesComponent } from './vistas/novedades/novedades.component';
import { DocenteComponent } from './vistas/Nosotros/docente/docente.component';
import { HistoryComponent } from './vistas/Nosotros/history/history.component';
import { NuevoUsuarioComponent } from './vistas/Usuario/nuevo-usuario/nuevo-usuario.component';
import { AdministrarUsuarioComponent } from './vistas/Usuario/administrar-usuario/administrar-usuario.component';
import { LoginComponent } from './vistas/login/login.component';
import { DetallePendienteComponent } from './vistas/Comunicado/detalle-pendiente/detalle-pendiente.component';

import { AuthGuard } from './Guard/auth.guard'
import { RoleGuard } from './Guard/RoleGuard/role.guard'
import { GUARDS } from './Model/guard'
import { PersonaComponent } from './vistas/Registro/persona/persona.component';
import { AdministrarPersonaComponent } from './vistas/Registro/administrar-persona/administrar-persona.component';
import { ReportesComponent } from './vistas/Comunicado/reportes/reportes.component';
import { CitasComponent } from './vistas/Perfil/citas/citas.component';
import { MiPerfilComponent } from './vistas/Perfil/mi-perfil/mi-perfil.component';
import { AlunmoManagerComponent } from './vistas/Registro/alunmo-manager/alunmo-manager.component';
import { DocenteManagerComponent } from './vistas/Registro/docente-manager/docente-manager.component';
import { AdministrativoMamagerComponent } from './vistas/Registro/administrativo-mamager/administrativo-mamager.component';

const appRoutes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },

  {
    path: 'novedades', component: NovedadesComponent,
    data: {
      guards: [
        GUARDS.TUTOR
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },

  { path: 'mision', component: MisionVisionComponent, canActivate: [AuthGuard] },
  { path: 'maestros', component: DocenteComponent, canActivate: [AuthGuard] },
  { path: 'historia', component: HistoryComponent, canActivate: [AuthGuard] },

  {
    path: 'circulares', component: CircularComponent,
    data: {
      guards: [
        GUARDS.TUTOR
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'citaciones', component: CitacionComponent,
    data: {
      guards: [
        GUARDS.TUTOR
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  }
  ,
  {
    path: 'entrevista', component: EntrevistaComponent,
    data: {
      guards: [
        GUARDS.TUTOR
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },

  {
    path: 'comunicado', component: NuevoComponent,
    data: {
      guards: [
        GUARDS.ADMIN,
        GUARDS.SECRETARIA
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'lista', component: ListaComponent,
    data: {
      guards: [
        GUARDS.ADMIN,
        GUARDS.SECRETARIA
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'detalles', component: DetalleComponent,
    data: {
      guards: [
        GUARDS.ADMIN,
        GUARDS.SECRETARIA
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'reportes', component: ReportesComponent,
    data: {
      guards: [
        GUARDS.ADMIN,
        GUARDS.SECRETARIA
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'detallePendiente', component: DetallePendienteComponent,
    data: {
      guards: [
        GUARDS.ADMIN
      ]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'pendientes', component: PendienteComponent,
    data: {
      guards: [
        GUARDS.ADMIN,
        GUARDS.SECRETARIA]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'NuevoUsuario', component: NuevoUsuarioComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'adminUsuario', component: AdministrarUsuarioComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'NuevoRegistro', component: PersonaComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'alumnos', component: AlunmoManagerComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'docentes', component: DocenteManagerComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },{
    path: 'administrativos', component: AdministrativoMamagerComponent,
    data: {
      guards: [
        GUARDS.ADMIN]
    },
    canActivate: [AuthGuard, RoleGuard]
  },
  { path: 'perfil', component: MiPerfilComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });