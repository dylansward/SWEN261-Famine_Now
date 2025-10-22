package com.ufund.api.ufundapi.model;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

@Tag("Model-tier")
public class BasketTest {
    Need[] testNeeds;

    @BeforeEach
    public void setupBasket() {
        testNeeds = new Need[4];
        testNeeds[0] = new Need(0, "Taco", 9.99, 3);
        testNeeds[1] = new Need(1, "Chips", 3.99, 1);
        testNeeds[2] = new Need(2, "Salsa", 1.99, 1);
        testNeeds[3] = new Need(3, "Soda", 4.99, 1);
        // I'm very hungry
    }

    @Test
    public void testId() {
        int expectedId = 0;
        Basket basketTest = new Basket(expectedId, "Albin", testNeeds);
        assertEquals(expectedId, basketTest.getId(), "Failure in Basket constructor or Basket.getId()");
    }

    @Test
    public void testUser() {
        String expectedUser = "Albin";
        Basket basketTest = new Basket(0, expectedUser, testNeeds);
        assertEquals(expectedUser, basketTest.getUser(), "Failure in Basket.getUser() or Basket constructor");

        basketTest.setUser(expectedUser+" Jr");
        assertEquals(expectedUser+" Jr", basketTest.getUser(), "Failure in Basket.getUser() or Basket.setUser(String)");
    }

    @Test
    public void testContents() {
        Basket basketTest = new Basket(0, "Albin", null);
        assertNull((Object) basketTest.getContents(), "Failure in Basket constructor or Basket.getContents()");

        basketTest.setContents(testNeeds);
        assertArrayEquals(testNeeds, basketTest.getContents(), "Failure in Basket.setContents(Need[]) or Basket.getContents");
    }

    @Test
    public void testToString() {
        int expectedId = 0;
        String expectedUser = "Albin";
        Basket basketTest = new Basket(expectedId, expectedUser, testNeeds);

        String expectedContents = "[";
        for(int i = 0; i<testNeeds.length-1; i++) {
            expectedContents += testNeeds[i].toString() + ", ";
        }
        expectedContents += testNeeds[testNeeds.length-1];
        expectedContents += "]";

        String expectedString = String.format(Basket.STRING_FORMAT, expectedId, expectedUser, expectedContents);

        assertEquals(expectedString, basketTest.toString());
    }
}
