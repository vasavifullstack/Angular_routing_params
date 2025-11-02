import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialService } from '../financial.service';

@Component({
  selector: 'app-param-details',
  templateUrl: './param-details.component.html',
  styleUrls: ['./param-details.component.css']
})
export class ParamDetailsComponent implements OnInit{
  constructor(public activateRoute:ActivatedRoute ,public financial :FinancialService){}
  selectedService :any;
  paramInfo :any
  ngOnInit(): void {
    this.activateRoute.params.subscribe((result:any)=>{
      console.log(result);
      this.paramInfo = result;
      let customerList=this.financial.getServiceInfo();
      this.selectedService=customerList.filter((sERvice:any)=>{
        return sERvice.serviceType == Number(result.serviceType);
      });

    })
// this.activateRoute.queryParams.subscribe((result:any)=>{
//       console.log("Query Param map",result);
//       let customerList=this.financial.getServiceInfo();
//       this.selectedService=customerList.filter((sERvice:any)=>{
//         return sERvice.serviceType == Number(result.ID);
//       });
//     })
// this.activateRoute.fragment.subscribe((result:any)=>{
//       console.log("fragment",result);
//  let customerList=this.financial.getServiceInfo();
//      this.selectedService=customerList.filter((sERvice:any)=>{
//         return sERvice.serviceType == result;
//   });
//  })
    
    
  }
}
