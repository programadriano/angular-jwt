import { LoginService } from './../services/login-service';
import { AlertService } from './../services/alert.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public usuario: string;
  public senha: string;
  public msgErro: string;

  // Elementos da tela
  @ViewChild('btnLogin') btnLogin: ElementRef;


  constructor(private router: Router, private loginService: LoginService, private _alert: AlertService) { }

  ngOnInit() { }

  logar() {
    this._bloqueiaBotao(true);
    this.loginService.logar(this.usuario, this.senha)
      .subscribe(
      login => this.processarLogin(login),
      error => this._processaError(error));
  }

  processarLogin(login: any) {
    this._bloqueiaBotao(false);
    localStorage['user'] = login.usuario.nome;
    localStorage['role'] = login.usuario.role;
    localStorage['token'] = login.token;
    this.router.navigate(['/']);
  }

  /**
   * Processa os erros no momento de login
   * @param error Mensagem de erro do servidor
   */
  _processaError(error: any) {
    this._alert.error('Whoops!', 'Usuário ou Senha Inválidos', 'Ok!');
    this._bloqueiaBotao(false);
    console.log(error);
  }

  /**
   * Define o estado do botão se ele vai ficar ativo ou inativo, e o texto do mesmo
   * @param {String} text Texto a ser exibido no botão
   * @param {Boolean} status Status dele Ativo / Inativo
   */
  _bloqueiaBotao(status) {

    // pega o botão da tela
    const btn = this.btnLogin.nativeElement;

    // coloca o texto final do botão
    const textFinal = (status) ? 'Autenticando' : 'Entrar';

    // altera o texto do botão
    btn.textContent = textFinal;
    // altera o status do botão
    (status) ? btn.setAttribute('disabled', 'disabled') : btn.removeAttribute('disabled');

  }

}
