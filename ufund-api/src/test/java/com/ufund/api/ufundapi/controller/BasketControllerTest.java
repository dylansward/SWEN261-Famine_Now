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
        testNeeds[0] = new Need(0, "Need 1", 10, 3, "Here");
        testNeeds[1] = new Need(1, "Another Need", 4, 1, "There");
        testNeeds[2] = new Need(2, "Testing sure is fun", 5, 2, "Everywhere");
        testNeeds[3] = new Need(3, "Thing 4", 2, 1, "Nowhere");

        String testStyle = "style";
        testBaskets = new Basket[2];
        testBaskets[0] = new Basket(0, "The Haver", 5, testNeeds, new String[]{testStyle}, testStyle, testStyle, testStyle, testStyle, testStyle, testStyle);
        testBaskets[1] = new Basket(1, "The Not Haver", 0, null, null, "", "", "", "", "", "");

        when(mockObjectMapper.readValue(new File(""), Basket[].class)).thenReturn(testBaskets);
        dao = new BasketsFileDAO("", mockObjectMapper);
        controller = new BasketsController(dao);
    }

    @Test
    public void testCreateBasket() {
        Basket test = new Basket(2, "Created Basket", 0, testNeeds, new String[]{"default"}, "default", "default", "default", "default", "default", "default");
        ResponseEntity<Basket> result = controller.createBasket(test);
        
        assertEquals(HttpStatus.CREATED, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertEquals(test.getSpent(), result.getBody().getSpent());
        assertEquals(test.getSel_background(), result.getBody().getSel_background());
        assertEquals(test.getSel_header(), result.getBody().getSel_header());
        assertEquals(test.getSel_subheader(), result.getBody().getSel_subheader());
        assertEquals(test.getSel_text(), result.getBody().getSel_text());
        assertEquals(test.getSel_input(), result.getBody().getSel_input());
        assertEquals(test.getSel_button(), result.getBody().getSel_button());
        assertArrayEquals(test.getStyles(), result.getBody().getStyles());
        assertArrayEquals(test.getContents(), result.getBody().getContents());
    }

    @Test
    public void testDeleteBasket() {
        Basket test = testBaskets[0];
        ResponseEntity<Basket> result = controller.deleteBasket(0);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertEquals(test.getSpent(), result.getBody().getSpent());
        assertEquals(test.getSel_background(), result.getBody().getSel_background());
        assertEquals(test.getSel_header(), result.getBody().getSel_header());
        assertEquals(test.getSel_subheader(), result.getBody().getSel_subheader());
        assertEquals(test.getSel_text(), result.getBody().getSel_text());
        assertEquals(test.getSel_input(), result.getBody().getSel_input());
        assertEquals(test.getSel_button(), result.getBody().getSel_button());
        assertArrayEquals(test.getStyles(), result.getBody().getStyles());
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
            assertEquals(testBaskets[i].getSpent(), result.getBody()[i].getSpent());
            assertEquals(testBaskets[i].getSel_background(), result.getBody()[i].getSel_background());
            assertEquals(testBaskets[i].getSel_header(), result.getBody()[i].getSel_header());
            assertEquals(testBaskets[i].getSel_subheader(), result.getBody()[i].getSel_subheader());
            assertEquals(testBaskets[i].getSel_text(), result.getBody()[i].getSel_text());
            assertEquals(testBaskets[i].getSel_input(), result.getBody()[i].getSel_input());
            assertEquals(testBaskets[i].getSel_button(), result.getBody()[i].getSel_button());
            assertArrayEquals(testBaskets[i].getStyles(), result.getBody()[i].getStyles());
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
        assertEquals(test.getSpent(), result.getBody().getSpent());
        assertEquals(test.getSel_background(), result.getBody().getSel_background());
        assertEquals(test.getSel_header(), result.getBody().getSel_header());
        assertEquals(test.getSel_subheader(), result.getBody().getSel_subheader());
        assertEquals(test.getSel_text(), result.getBody().getSel_text());
        assertEquals(test.getSel_input(), result.getBody().getSel_input());
        assertEquals(test.getSel_button(), result.getBody().getSel_button());
        assertArrayEquals(test.getStyles(), result.getBody().getStyles());
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
            assertEquals(testBaskets[i].getSpent(), result.getBody()[i].getSpent());
            assertEquals(testBaskets[i].getSel_background(), result.getBody()[i].getSel_background());
            assertEquals(testBaskets[i].getSel_header(), result.getBody()[i].getSel_header());
            assertEquals(testBaskets[i].getSel_subheader(), result.getBody()[i].getSel_subheader());
            assertEquals(testBaskets[i].getSel_text(), result.getBody()[i].getSel_text());
            assertEquals(testBaskets[i].getSel_input(), result.getBody()[i].getSel_input());
            assertEquals(testBaskets[i].getSel_button(), result.getBody()[i].getSel_button());
            assertArrayEquals(testBaskets[i].getStyles(), result.getBody()[i].getStyles());
            assertArrayEquals(testBaskets[i].getContents(), result.getBody()[i].getContents());
        }

        result = controller.searchBaskets("Not");

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(testBaskets[1].getId(), result.getBody()[0].getId());
        assertEquals(testBaskets[1].getUser(), result.getBody()[0].getUser());
        assertEquals(testBaskets[1].getSpent(), result.getBody()[0].getSpent());
        assertEquals(testBaskets[1].getSel_background(), result.getBody()[0].getSel_background());
        assertEquals(testBaskets[1].getSel_header(), result.getBody()[0].getSel_header());
        assertEquals(testBaskets[1].getSel_subheader(), result.getBody()[0].getSel_subheader());
        assertEquals(testBaskets[1].getSel_text(), result.getBody()[0].getSel_text());
        assertEquals(testBaskets[1].getSel_input(), result.getBody()[0].getSel_input());
        assertEquals(testBaskets[1].getSel_button(), result.getBody()[0].getSel_button());
        assertArrayEquals(testBaskets[1].getStyles(), result.getBody()[0].getStyles());
        assertArrayEquals(testBaskets[1].getContents(), result.getBody()[0].getContents());
    }

    @Test
    public void testUpdateBasket() {
        Basket test = new Basket(0, "HE NO LONGER HAS!!!", 0, new Need[0], new String[0], "", "", "", "", "", "");
        ResponseEntity<Basket> result = controller.updateBasket(test);

        assertEquals(HttpStatus.OK, result.getStatusCode());
        assertEquals(test.getId(), result.getBody().getId());
        assertEquals(test.getUser(), result.getBody().getUser());
        assertEquals(test.getSpent(), result.getBody().getSpent());
        assertEquals(test.getSel_background(), result.getBody().getSel_background());
        assertEquals(test.getSel_header(), result.getBody().getSel_header());
        assertEquals(test.getSel_subheader(), result.getBody().getSel_subheader());
        assertEquals(test.getSel_text(), result.getBody().getSel_text());
        assertEquals(test.getSel_input(), result.getBody().getSel_input());
        assertEquals(test.getSel_button(), result.getBody().getSel_button());
        assertArrayEquals(test.getStyles(), result.getBody().getStyles());
        assertArrayEquals(test.getContents(), result.getBody().getContents());

        test = new Basket(100, "a secret new basket?", 3.14, testNeeds, new String[]{"secret"}, "secret", "secret", "secret", "secret", "secret", "secret");
        result = controller.updateBasket(test);

        assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
    }

}