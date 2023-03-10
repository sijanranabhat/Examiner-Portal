import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';


@Component({ selector:'component-question',
    templateUrl: 'question-room.component.html', 
    styleUrls: ['question-room.component.css']})

export class RoomComponent implements  OnInit{


    

    constructor(private accountService: AccountService) {        
    }

    ngOnInit() {
       
    }
}