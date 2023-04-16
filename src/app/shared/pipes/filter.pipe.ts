import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPipe implements PipeTransform {

  transform(value: Iplayers[] , searchText : string ): Iplayers[] {
    // console.log(searchText)
    // return 
    if(!value){
      return[]
    }
    if(!searchText){
      return(value)
    
    }
    let filterArray = value.filter(playobj =>{
      return playobj.team.toLowerCase().startsWith(searchText)
    })
return filterArray
    
    


  }

}
