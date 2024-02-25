import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
  barraTamanho: any = 10;
  text: string = "PTx1f5DaFX";
  count: any = 0;
  textCpy: string = "";
  charset: string = "abcdefghijklmnopqrstuvwxyz0123456789+.-!?/";

  repeated(inside: string, example: string) { 
    this.count = 0

    for (var i=0; i<inside.length; i++) {
        if( inside[i] == example ) {
            this.count = this.count +1;
            }
        //return should not come here
    };
    return this.count;
  }

  includeUppercase(event: Event) {
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

  includeLowercase(event: Event) {
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

  includeNumbers(event: Event) {
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
  
  includeSymbols(event: Event) {
    if ( (event.target as HTMLInputElement).checked != true ) {

      this.charset = this.charset.replace("+.-!?/", "")
      console.log(this.charset)

    } else {
  
      if ( this.repeated(this.charset, "!") === 0 ) {
        this.charset = this.charset.concat("+.-!?/")
        console.log(this.charset)
      } else {
        console.log("Já existe")
      }

    }
  }

  stringGen(tamanho: number) {
    this.textCpy = "";


    for (var i = 0; i < tamanho; i++)
      this.textCpy += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
    
    return this.textCpy;
  }
  
  
  valueChanged(event: Event) {
    this.barraTamanho = (event.target as HTMLInputElement).value;
    return this.barraTamanho;
  }

  generate_password(password: string){
    if( this.text === this.textCpy ) {
      this.stringGen(this.barraTamanho)
    }

    this.text = "";

    return this.text = password;
  }
}
