import { Injectable } from '@angular/core';
import { Employee } from './etage-info/employee-info/employee-info.model';
import { Etage } from './etage.model';
@Injectable({
  providedIn: 'root'
})
export class EtagesService {
  private etage: Etage[]=[
     {
       id: '1',
       image: 'https://dictionary.cambridge.org/fr/images/thumb/blue_noun_001_01604.jpg?version=5.0.213',
       color: 'primary',
       employee: 1,
       chambre: 4
     },
     {
       id: '2',
       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Solid_green.svg/1200px-Solid_green.svg.png',
       color: 'success',
       employee: 1,
       chambre: 6
     },
     {
       id: '3',
       image: 'https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$',
       color: 'danger',
       employee: 1,
       chambre: 5
     },
     {
       id: '4',
       image: 'https://www.htmlcsscolor.com/preview/gallery/A7A69D.png',
       color: 'medium',
       employee: 1,
       chambre: 7
     },
     {
       id: '5',
       image: 'https://cdn.shopify.com/s/files/1/2678/3458/products/yellow_wallpaper_600x.jpeg?v=1548804958',
       color: 'warning',
       employee: 1,
       chambre: 3
   }
 ];
 constructor() { }
 getAllEtages(){
 return [...this.etage];
 }
 getEtage(etageId: string){
   return{
     ...this.etage.find(emp => (emp.id === etageId))
   };
 }
 delEtage(etageId: string){
     this.etage = this.etage.filter(emp => emp.id !== etageId);
 }
}

export class EmployeesService {
  private employee: Employee[]=[
    {
      id: '1',
      image: 'https://dictionary.cambridge.org/fr/images/thumb/blue_noun_001_01604.jpg?version=5.0.213',
      nom: 'Arafa',
      prenom: 'Mouad',
      salaire: 3000,
    },
    {
      id: '2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Solid_green.svg/1200px-Solid_green.svg.png',
      nom: 'Fahid',
      prenom: 'Yahya',
      salaire: 3000,
    },
    {
      id: '3',
      image: 'https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemptipn-2-red-section-background-desktop-01-en-28jul20?$native$',
      nom: 'Tiwi',
      prenom: 'Yassmine',
      salaire: 2500,
    },
    {
      id: '4',
      image: 'https://www.htmlcsscolor.com/preview/gallery/A7A69D.png',
      nom: 'Rali',
      prenom: 'Amin',
      salaire: 4000
    },
    {
      id: '5',
      image: 'https://cdn.shopify.com/s/files/1/2678/3458/products/yellow_wallpaper_600x.jpeg?v=1548804958',
      nom: 'Tami',
      prenom: 'Amina',
      salaire: 3000
    }
];
    constructor() { }
    getAllEmployees(){
    return [...this.employee];
    }
    getEmployee(employeeId: string){
      return{
        ...this.employee.find(emp => (emp.id === employeeId))
      };
    }
    delEmployee(employeeId: string){
        this.employee = this.employee.filter(emp => emp.id !== employeeId);
    }
}


