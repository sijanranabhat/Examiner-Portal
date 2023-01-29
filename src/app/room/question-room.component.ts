import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'question-room.component.html' })

export class RoomComponent implements  OnInit{


    user: User | null;
    pause:boolean= false;
    success:boolean=true;
    progress:number = 0;
    options: Array<string> = [];

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.options = ['Yes', 'No']
    }

    answer(index: number){

    }

    goNext(){

    }
}