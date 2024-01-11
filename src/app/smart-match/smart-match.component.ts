import { Component, OnInit } from '@angular/core';

export type TextRange = { from: number; to: number };
@Component({
  selector: 'app-smart-match',
  standalone: true,
  imports: [],
  templateUrl: './smart-match.component.html',
  styleUrl: './smart-match.component.css'
})
export class SmartMatchComponent implements OnInit {
ngOnInit(): void {
    this.smartMatch("Paco de lucia", "lucia")
}


smartMatch = (
  input: string,
  searchText: string
): Array<TextRange> | null => {
  // TODO: implement
  let matchingArray : TextRange[] = [];

  let index = input.indexOf(searchText);
  for(let i = 0; i < input.length; i++){
    //   if(input[i] === searchText[i]){
    //     matchingArray.push({from: input[i], to: searchText[i]})
    //   }
    matchingArray.push({from: index, to: index + searchText.length -1})
  }
  console.log(matchingArray)
    return matchingArray.length > 0 ? matchingArray : null;
};

}
