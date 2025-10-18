import { Component ,OnInit} from '@angular/core';
import { FinancialService } from './financial.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  Financial :any=[];
  constructor(public financial :FinancialService){}

ngOnInit(): void {
  this.Financial=this.financial.getFinancialServices()
}

}
