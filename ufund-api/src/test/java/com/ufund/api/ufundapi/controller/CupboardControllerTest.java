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
import com.ufund.api.ufundapi.persistence.BasketsFileDAO;
import com.ufund.api.ufundapi.persistence.CupboardFileDAO;
import com.ufund.api.ufundapi.persistence.NeedDAO;

/*@Tag("Controller-tier")
public class CupboardControllerTest {
    NeedDAO dao;
    CupboardController controller;
    ObjectMapper mockObjectMapper;
    Need[] testNeeds;


    @BeforeEach
    public void setupCupboardController() throws IOException {
        mockObjectMapper = mock(ObjectMapper.class);

        testNeeds = new Need[4];
        testNeeds[0] = new Need(0, "Need 1", 10, 3);
        testNeeds[1] = new Need(1, "Another Need", 4, 1);
        testNeeds[2] = new Need(2, "Testing sure is fun", 5, 2);
        testNeeds[3] = new Need(3, "Thing 4", 2, 1);

        when(mockObjectMapper.readValue(new File(""), Need[].class)).thenReturn(testNeeds);
        dao = new CupboardFileDAO("", mockObjectMapper);
        controller = new CupboardController(dao);
    }

    @Test
    public void testCreateNeed() {
        Need test = new Need(4, "Created Need", 1, 1);
        ResponseEntity<Need> result = controller.createNeed(test);
        
        assertEquals(HttpStatus.CREATED, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getName(), result.getBody().getName());
        assertEquals(test.getCost(), result.getBody().getCost());
        assertEquals(test.getQuantity(), result.getBody().getQuantity());
    }

    @Test
    public void testDeleteNeed() {
        Need test = testNeeds[3];
        ResponseEntity<Need> result = controller.deleteNeed(3);
        
        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getName(), result.getBody().getName());
        assertEquals(test.getCost(), result.getBody().getCost());
        assertEquals(test.getQuantity(), result.getBody().getQuantity());

        result = controller.deleteNeed(3);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

    @Test
    public void testGetNeeds() {
        ResponseEntity<Need[]> result = controller.getNeeds();

        assertEquals(HttpStatus.OK, result.getStatusCode());
        for (int i = 0; i < testNeeds.length; i++) {
            assertEquals(testNeeds[i].getId(), result.getBody()[i].getId());
            assertEquals(testNeeds[i].getName(), result.getBody()[i].getName());
            assertEquals(testNeeds[i].getCost(), result.getBody()[i].getCost());
            assertEquals(testNeeds[i].getQuantity(), result.getBody()[i].getQuantity());
        }
    }

    @Test
    public void testGetNeedByID() {
        Need test = testNeeds[0];
        ResponseEntity<Need> result = controller.getNeed(0);
        
        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getName(), result.getBody().getName());
        assertEquals(test.getCost(), result.getBody().getCost());
        assertEquals(test.getQuantity(), result.getBody().getQuantity());

        result = controller.getNeed(testNeeds.length);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

    @Test
    public void testSearchNeeds() {
        ResponseEntity<Need[]> result = controller.searchNeeds("Need");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        for (int i = 0; i < 2; i++) {
            assertEquals(testNeeds[i].getId(), result.getBody()[i].getId());
            assertEquals(testNeeds[i].getName(), result.getBody()[i].getName());
            assertEquals(testNeeds[i].getCost(), result.getBody()[i].getCost());
            assertEquals(testNeeds[i].getQuantity(), result.getBody()[i].getQuantity());
        }

        result = controller.searchNeeds("Thing");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(testNeeds[3].getId(), result.getBody()[0].getId());
        assertEquals(testNeeds[3].getName(), result.getBody()[0].getName());
        assertEquals(testNeeds[3].getCost(), result.getBody()[0].getCost());
        assertEquals(testNeeds[3].getQuantity(), result.getBody()[0].getQuantity());

        result = controller.searchNeeds("abcdefghijklmnopqrstuvwxyz");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(0, result.getBody().length);
    }

    @Test
    public void testUpdateNeed() {
        Need test = testNeeds[0];
        test.setName("Updated Name");
        ResponseEntity<Need> result = controller.updateNeed(test);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getName(), result.getBody().getName());
        assertEquals(test.getCost(), result.getBody().getCost());
        assertEquals(test.getQuantity(), result.getBody().getQuantity());
    }
}*/