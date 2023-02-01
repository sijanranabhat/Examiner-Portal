import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: User | null;
    candidates: Array<any>= [];
    cubicals: Array<any>= [];
    cubicalText:string ='';
    defaultText = "select"
    showCandidate:boolean =false;    
    isDisplayQuestion:boolean=false;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.candidates = this.getCandidates(); 
        this.cubicals = [{
            id: '1', 
            value: "One"
        }, 
        {
            id: '2', 
            value: "Two"
        },
        {
            id: '3', 
            value: "Three"
        }]

    }

    onCubicalSelect(event:any){   
        this.candidates = this.getCandidates();
        if(this.cubicalText){    
            this.isDisplayQuestion  = false;              
        this.showCandidate = true;        
        this.candidates = this.candidates.filter(x=>x.cubicalNumber == this.cubicalText);        
    }
    }

    getCandidates(): any{

        return [{
            name: 'John Doe', 
            cubicalNumber: 1, 
            candidateId:1
        }, 
        {
            name: 'Matt Damon', 
            cubicalNumber: 2, 
            candidateId:2
        },
        {
            name: 'Tom Cruise', 
            cubicalNumber: 3, 
            candidateId:3
        }]

    }

    onCheckInClick(){
        this.isDisplayQuestion = true;
    }

    }

    
