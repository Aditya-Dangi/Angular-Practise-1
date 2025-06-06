import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class handleAlert{
  handleClick(title: string){
    alert("You are opening " + title + ".");
  }
}
