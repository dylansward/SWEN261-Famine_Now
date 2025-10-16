package com.ufund.api.ufundapi.controller;

import java.io.IOException;
import java.util.logging.Logger;
import java.util.logging.Level;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.ufund.api.ufundapi.persistence.BasketsDAO;
import com.ufund.api.ufundapi.model.Basket;
import com.ufund.api.ufundapi.model.Need;

import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("baskets")
public class BasketsController {
    private static final Logger LOG = Logger.getLogger(BasketsController.class.getName());
    private BasketsDAO basketsDAO;

    public BasketsController(BasketsDAO basketsDAO) {
        this.basketsDAO = basketsDAO;
    }

    @PostMapping("")
    public ResponseEntity<Basket> createBasket(@RequestBody Basket basket) {
        LOG.info("POST /baskets " + basket);

        try {
            Basket newBasket = basketsDAO.createBasket(basket);
            return new ResponseEntity<Basket>(newBasket, HttpStatus.CREATED);
        } catch(IOException e) {
            LOG.log(Level.SEVERE, e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Basket> deleteBasket(@PathVariable int id) {
        LOG.info("DELETE /baskets/" + id);

        try {
            Basket removedBasket = basketsDAO.deleteBasket(id);
            if(removedBasket != null) return new ResponseEntity<Basket>(removedBasket, HttpStatus.OK);
            else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (IOException e) {
            LOG.log(Level.SEVERE, e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("")
    public ResponseEntity<Basket[]> getBaskets() {
        LOG.info("GET /baskets");

        try {
            Basket[] baskets = basketsDAO.getBaskets();
            return new ResponseEntity<Basket[]>(baskets,HttpStatus.OK);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Basket> getBaskets(@PathVariable int id) {
        LOG.info("GET /baskets/" + id);

        try {
            Basket basket = basketsDAO.getBasket(id);
            if(basket != null) return new ResponseEntity<Basket>(basket,HttpStatus.OK);
            else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<Basket[]> searchBaskets(@RequestParam String user) {
        LOG.info("GET /baskets?user=" + user);

        try {
            Basket[] baskets = basketsDAO.searchBaskets(user);
            return new ResponseEntity<Basket[]>(baskets,HttpStatus.OK);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("")
    public ResponseEntity<Basket> updateBasket(@RequestBody Basket basket) {
        LOG.info("PUT /baskets " + basket);
        try {
            basket = basketsDAO.updateBasket(basket);
            if (basket != null) {
                return new ResponseEntity<Basket>(basket, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } 
        catch (IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
