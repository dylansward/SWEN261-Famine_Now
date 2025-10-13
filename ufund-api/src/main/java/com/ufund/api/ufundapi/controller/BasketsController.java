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

import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("baskets")
public class BasketsController {
    
}
