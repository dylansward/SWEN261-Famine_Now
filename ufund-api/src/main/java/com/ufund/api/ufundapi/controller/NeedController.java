package com.ufund.api.ufundapi.controller;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ufund.api.ufundapi.model.Need;

public class NeedController {
    // @DeleteMapping("/{id}")
    // public ResponseEntity<Need> deleteHero(@PathVariable int id) {
    //     LOG.info("DELETE /heroes/" + id);

    //     try{
    //         Need[] heroes = heroDao.getHeroes();
    //         for(Hero hero : heroes){
    //             if(hero.getId() == id){
    //                 return new ResponseEntity<>(hero, HttpStatus.OK);
    //             }
    //         }
            
    //     }
    //     catch(IOException e ){

    //     }
    //     return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    // }
}
