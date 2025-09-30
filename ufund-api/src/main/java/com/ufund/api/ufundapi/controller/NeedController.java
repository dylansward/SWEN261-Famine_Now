package com.ufund.api.ufundapi.controller;

import java.io.IOException;
import java.util.logging.Logger;
import java.util.logging.Level;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.ufund.api.ufundapi.persistence.NeedDAO;
import com.ufund.api.ufundapi.model.Need;

@RestController
@RequestMapping("needs")
public class NeedController {
    private static final Logger LOG = Logger.getLogger(NeedController.class.getName());
    private NeedDAO needDAO;

    public NeedController(NeedDAO needDAO) {
        this.needDAO = needDAO;
    }

    @PostMapping("")
    public ResponseEntity<Need> createNeed(@RequestBody Need need) {
        LOG.info("POST /needs " + need);

        try {
            Need newNeed = needDAO.createNeed(need);
            return new ResponseEntity<Need>(newNeed, HttpStatus.CREATED);
        } catch (IOException e) {
            LOG.log(Level.SEVERE, e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("")
    public ResponseEntity<Need[]> getNeeds() {
        LOG.info("GET /needs");

        try {
            Need[] needs = needDAO.getNeeds();
            return new ResponseEntity<Need[]>(needs,HttpStatus.OK);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Need> getNeed(@PathVariable int id) {
        LOG.info("GET /needs/" + id);
        try {
            Need need = needDAO.getNeed(id);
            if (need != null)
                return new ResponseEntity<Need>(need,HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/")
    public ResponseEntity<Need[]> searchNeeds(@RequestParam String name) {
        LOG.info("GET /needs/?name="+name);

        try {
            Need[] needs = needDAO.searchNeeds(name);
            return new ResponseEntity<Need[]>(needs,HttpStatus.OK);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("")
    public ResponseEntity<Need> updateNeed(@RequestBody Need need) {
        LOG.info("PUT /needs " + need);
        try {
            need = needDAO.updateNeed(need);
            if (need != null) {
                return new ResponseEntity<Need>(need, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<Need>(need, HttpStatus.NOT_FOUND);
            }
        } 
        catch (IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
