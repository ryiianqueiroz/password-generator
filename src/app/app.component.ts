import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'password-generator';
  barraTamanho: any = 10;
  text: string = "PTx1f5DaFX";
  btn_check: any;
  count: any = 0;
  textCpy: string = "";
  charset: string = "abcdefghijklmnopqrstuvwxyz0123456789+.-!?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  checkChange1: any;
  checkChange2: any;
  checkChange3: any;
  checkChange4: any;

  checkOnChange1(event: Event): void {
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

  repeated(inside: string, example: string) { 
    this.count = 0

    for (var i=0; i<inside.length; i++) {
        if( inside[i] == example ) {
            this.count = this.count +1;
            }

    };
    return this.count;
  }

  includeUppercase(event: Event) {
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

  includeLowercase(event: Event) {
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

  includeNumbers(event: Event) {
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
  
  includeSymbols(event: Event) {
    if ( this.checkChange1 === false && this.checkChange2 === false && this.checkChange3 === false ) {  
      this.checkChange4.checked = true
    } else {
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

    this.text = password;
  }
}
