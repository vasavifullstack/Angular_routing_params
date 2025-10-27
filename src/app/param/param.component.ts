import { Component ,OnInit} from '@angular/core';
import { FinancialService } from './financial.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  Financial :any=[];
  constructor(public financial :FinancialService ,public router:Router){}
 
ngOnInit(): void {
  this.Financial=this.financial.getFinancialServices()
}
evtNavigation(serviceType:any){
  //pass based on the params
  // this.router.navigate(['/param_details',serviceType]);
  // this.router.navigate(['params_details'],{queryParams:{ID:serviceType}});
  this.router.navigate(['/param_details'],{fragment:serviceType})

}
}
