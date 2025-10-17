package com.ufund.api.ufundapi.controller;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.File;
import java.io.IOException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ufund.api.ufundapi.model.Basket;
import com.ufund.api.ufundapi.model.Need;
import com.ufund.api.ufundapi.persistence.BasketsDAO;
import com.ufund.api.ufundapi.persistence.BasketsFileDAO;

@Tag("Controller-tier")
public class BasketControllerTest {
    BasketsDAO dao;
    BasketsController controller;
    ObjectMapper mockObjectMapper;
    Need[] testNeeds;
    Basket[] testBaskets;
    

    @BeforeEach
    public void setupCupboardController() throws IOException {
        mockObjectMapper = mock(ObjectMapper.class);
        
        testNeeds = new Need[4];
        testNeeds[0] = new Need(0, "Need 1", 10, 3);
        testNeeds[1] = new Need(1, "Another Need", 4, 1);
        testNeeds[2] = new Need(2, "Testing sure is fun", 5, 2);
        testNeeds[3] = new Need(3, "Thing 4", 2, 1);

        testBaskets = new Basket[2];
        testBaskets[0] = new Basket(0, "The Haver", testNeeds);
        testBaskets[1] = new Basket(1, "The Not Haver", null);

        when(mockObjectMapper.readValue(new File(""), Basket[].class)).thenReturn(testBaskets);
        dao = new BasketsFileDAO("", mockObjectMapper);
        controller = new BasketsController(dao);
    }

    @Test
    public void testCreateBasket() {
        Basket test = new Basket(2, "Created Basket", testNeeds);
        ResponseEntity<Basket> result = controller.createBasket(test);
        
        assertEquals(HttpStatus.CREATED, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertArrayEquals(test.getContents(), result.getBody().getContents());
    }

    @Test
    public void testDeleteBasket() {
        Basket test = testBaskets[0];
        ResponseEntity<Basket> result = controller.deleteBasket(0);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertArrayEquals(test.getContents(), result.getBody().getContents());

        result = controller.deleteBasket(0);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

    @Test 
    public void testGetBaskets() {
        ResponseEntity<Basket[]> result = controller.getBaskets();

        assertEquals(HttpStatus.OK, result.getStatusCode());
        for (int i = 0; i < testBaskets.length; i++){
            assertEquals(testBaskets[i].getId(), result.getBody()[i].getId());
            assertEquals(testBaskets[i].getUser(), result.getBody()[i].getUser());
            assertArrayEquals(testBaskets[i].getContents(), result.getBody()[i].getContents());
        }
    }

    @Test 
    public void testGetBasketsByID() {
        Basket test = testBaskets[0];
        ResponseEntity<Basket> result = controller.getBaskets(0);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertArrayEquals(test.getContents(), result.getBody().getContents());

        result = controller.getBaskets(-1);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

    @Test
    public void testSearchBaskets() {
        ResponseEntity<Basket[]> result = controller.searchBaskets("Haver");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        for (int i = 0; i < testBaskets.length; i++){
            assertEquals(testBaskets[i].getId(), result.getBody()[i].getId());
            assertEquals(testBaskets[i].getUser(), result.getBody()[i].getUser());
            assertArrayEquals(testBaskets[i].getContents(), result.getBody()[i].getContents());
        }

        result = controller.searchBaskets("Not");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(testBaskets[1].getId(), result.getBody()[0].getId());
        assertEquals(testBaskets[1].getUser(), result.getBody()[0].getUser());
        assertArrayEquals(testBaskets[1].getContents(), result.getBody()[0].getContents());
    }

    @Test
    public void testUpdateBasket() {
        Basket test = new Basket(0, "HE NO LONGER HAS!!!", null);
        ResponseEntity<Basket> result = controller.updateBasket(test);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertArrayEquals(test.getContents(), result.getBody().getContents());

        test = new Basket(100, "a secret new basket?", testNeeds);
        result = controller.updateBasket(test);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

}