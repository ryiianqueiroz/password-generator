import { FormsModule, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ClipboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
  barraTamanho: any = 10;
  text: string = "PTx1f5DaFX";
  btn_check: any;
  count: any = 0;
  textCpy: string = "PTx1f5DaFX";
  charset: string = "abcdefghijklmnopqrstuvwxyz0123456789!?&#$ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  checkChange1: any;
  checkChange2: any;
  checkChange3: any;
  checkChange4: any;
  dificuldade: any;
  div1: any;
  div2: any;
  div3: any;
  div4: any;
  dificuldadeText = new FormControl("HARD");

  extraClass(num: number) : any { // CSS PARA MOSTRAR A DIFICULDADE EM COR
    if ( this.dificuldadeText.value === "EASY" && num === 1 ) {
      return {
        'bg-yellow-600': true
      }
    } else if ( this.dificuldadeText.value === "MEDIUM" ) {
      if ( num === 1 || num === 2 ) {
        return {
          'bg-yellow-600': true
        }
      } 
    } else if ( this.dificuldadeText.value === "HARD" ) {
      if ( num === 1 || num === 2 || num === 3 ) {
        return {
          'bg-yellow-600': true
        }
      } 
    } else if ( this.dificuldadeText.value === "INSANE" ) {
      return {
        'bg-yellow-600': true
      }
    } 
  }

  alertCopy(){ // ALERTA AO COPIAR
    alert('A Senha foi copiada com sucesso!')
  }

  checkOnChange1(event: Event): void { // COLOCAR NA VARIÁVEL SE O CHECKBOX ESTÁ CHECKED OU NÃO
    this.checkChange1 = (event.target as HTMLInputElement).checked
  }

  checkOnChange2(event: Event): void {
    this.checkChange2 = (event.target as HTMLInputElement).checked
  }
  
  checkOnChange3(event: Event): void {
    this.checkChange3 = (event.target as HTMLInputElement).checked
  }

  checkOnChange4(event: Event): void {
    this.checkChange4 = (event.target as HTMLInputElement).checked
  }

  dificuldadeMode() { // DEMONSTRAR NA TELA QUAL DIFICULDADE ESTÁ A SENHA
    
    if ( this.barraTamanho <= 4 ) {
      
      if ( this.checkChange4 == true ) {
        this.dificuldadeText.setValue("MEDIUM")
      } else {
        this.dificuldadeText.setValue("EASY")
      }

    } else if ( this.barraTamanho > 4 && this.barraTamanho <= 10  ) {

      if ( this.checkChange3 == true && this.checkChange4 == true) {
        this.dificuldadeText.setValue("HARD")
      } else if ( this.barraTamanho > 8 ) {
        this.dificuldadeText.setValue("HARD")
      } else if ( this.checkChange4 == true ) {
        this.dificuldadeText.setValue("HARD")
      } else {
        this.dificuldadeText.setValue("MEDIUM")
      }

    } else if ( this.barraTamanho > 10 && this.barraTamanho <= 15 ) {
      
      if ( this.checkChange1 == true, this.checkChange2 == true, this.checkChange3 == true, this.checkChange4 == true) {
        this.dificuldadeText.setValue("INSANE")
      } else if ( this.checkChange4 == true ) {
        this.dificuldade.setValue("INSANE")
      } else {
        this.dificuldadeText.setValue("HARD")
      }
    
    } else {

      this.dificuldadeText.setValue("INSANE")

    }

  }

  repeated(inside: string, example: string) { // FUNÇÃO PARA MOSTRAR SE ESTÁ REPETIDO
    this.count = 0

    for (var i=0; i<inside.length; i++) {
        if( inside[i] == example ) {
            this.count = this.count +1;
            }

    };
    return this.count;
  }

  includeUppercase(event: Event) { // INCLUIR UPPERCASE
    if ( this.checkChange2 === false && this.checkChange3 === false && this.checkChange4 === false ) {
      this.checkChange1.checked = true
    } else {
      if ( (event.target as HTMLInputElement).checked != true ) {

        this.charset = this.charset.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "")
        console.log(this.charset)
  
      } else {
  
        if ( this.repeated(this.charset, "A") === 0 ) {
          this.charset = this.charset.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
          console.log(this.charset)
        } else {
          console.log("Já existe")
        }
  
      }
    }
  }

  includeLowercase(event: Event) { // INCLUIR LOWERCASE
    if ( this.checkChange1 === false && this.checkChange3 === false && this.checkChange4 === false ) {
      this.checkChange2.checked = true
    } else {
      if ( (event.target as HTMLInputElement).checked != true ) {

        this.charset = this.charset.replace("abcdefghijklmnopqrstuvwxyz", "")
        console.log(this.charset)

      } else {
    
        if ( this.repeated(this.charset, "a") === 0 ) {
          this.charset = this.charset.concat("abcdefghijklmnopqrstuvwxyz")
          console.log(this.charset)
        } else {
          console.log("Já existe")
        }

      }
    }
  }

  includeNumbers(event: Event) { // INCLUIR NUMBERS
    if ( this.checkChange2 === false && this.checkChange1 === false && this.checkChange4 === false ) {
      this.checkChange3.checked = true
    } else {
      if ( (event.target as HTMLInputElement).checked != true ) {

        this.charset = this.charset.replace("0123456789", "")
        console.log(this.charset)

      } else {
    
        if ( this.repeated(this.charset, "1") === 0 ) {
          this.charset = this.charset.concat("0123456789")
          console.log(this.charset)
        } else {
          console.log("Já existe")
        }

      }
    }
  }
  
  includeSymbols(event: Event) { // INCLUIR SIMBOLOS
    if ( this.checkChange1 === false && this.checkChange2 === false && this.checkChange3 === false ) {  
      this.checkChange4.checked = true
    } else {
      if ( (event.target as HTMLInputElement).checked != true ) {

        this.charset = this.charset.replace("!?&#$", "")
        console.log(this.charset)

      } else {
    
        if ( this.repeated(this.charset, "!") === 0 ) {
          this.charset = this.charset.concat("!?&#$")
          console.log(this.charset)
        } else {
          console.log("Já existe")
        }

      }
    }
  }

  stringGen(tamanho: number) { // COPIAR PARA UMA VARIÁVEL A SENHA 
    this.textCpy = "";


    for (var i = 0; i < tamanho; i++)
      this.textCpy += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
    
    return this.textCpy;
  }
  
  
  valueChanged(event: Event) { // QUANDO O USUÁRIO MEXER NO RANGE MUDAR O VALOR 
    this.barraTamanho = (event.target as HTMLInputElement).value;

    return this.barraTamanho;
  }

  generate_password(password: string){ // GERANDO SENHA
    if( this.text === this.textCpy ) {
      this.stringGen(this.barraTamanho)
    }

    this.text = "";

    this.text = password;
  }
}
