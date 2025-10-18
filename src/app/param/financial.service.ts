import { Injectable } from "@angular/core";

@Injectable({'providedIn':'root'})
export class FinancialService{
    getFinancialServices(){
        return[{
            serviceType:1,
            serviceName :"BankService",
            Branch     :"hyderbad"
            
        },
    {
            serviceType:2,
            serviceName :"InsuranceService",
            Branch     : "hyderabad"
    },
{
            serviceType:3,
            serviceName :"TaxService",
            Branch     : "bangolore"
}]
    }
    getServiceInfo(){
       return[{
        serviceType :1,
        Services1 :["deposit","loans","credit"]
     },
     {
        serviceType :2,
        Services2 : ["contract","premium","coverage","claim"]
     },
     {
        serviceType :3,
        Services3 :["GST","TDS","TCS"]
     } ];

        

    }
}