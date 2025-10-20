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
        Services :["deposit","loans","credit"],
        Branches : "hyderabad"
     },
     {
        serviceType :2,
        Services : ["contract","premium","coverage","claim"],
        Branches : "bangolore"
     },
     {
        serviceType :3,
        Services :["GST","TDS","TCS"],
        Branches : "chennai"
     } ];

        

    }
}