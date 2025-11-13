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
        testNeeds[0] = new Need(0, "Taco", 9.99, 3, "My stomach");
        testNeeds[1] = new Need(1, "Chips", 3.99, 1, "My stomach");
        testNeeds[2] = new Need(2, "Salsa", 1.99, 1, "My stomach");
        testNeeds[3] = new Need(3, "Soda", 4.99, 1, "My stomach");
        // I'm very hungry
    }

    @Test
    public void testId() {
        int expectedId = 0;
        Basket basketTest = new Basket(expectedId, "Albin", 15, testNeeds, new String[0], "", "", "", "", "", "");
        assertEquals(expectedId, basketTest.getId(), "Failure in Basket constructor or Basket.getId()");
    }

    @Test
    public void testUser() {
        String expectedUser = "Albin";
        Basket basketTest = new Basket(0, expectedUser, 15, testNeeds, new String[0], "", "", "", "", "", "");
        assertEquals(expectedUser, basketTest.getUser(), "Failure in Basket.getUser() or Basket constructor");

        basketTest.setUser(expectedUser+" Jr");
        assertEquals(expectedUser+" Jr", basketTest.getUser(), "Failure in Basket.getUser() or Basket.setUser(String)");
    }

    @Test
    public void testContents() {
        Basket basketTest = new Basket(0, "Albin", 15, null, new String[0], "", "", "", "", "", "");
        assertNull((Object) basketTest.getContents(), "Failure in Basket constructor or Basket.getContents()");

        basketTest.setContents(testNeeds);
        assertArrayEquals(testNeeds, basketTest.getContents(), "Failure in Basket.setContents(Need[]) or Basket.getContents");
    }

    @Test
    public void testSpent() {
        double expectedSpent = 15;
        Basket basketTest = new Basket(0, "Albin", expectedSpent, testNeeds, new String[0], "", "", "", "", "", "");
        assertEquals(expectedSpent, basketTest.getSpent());

        basketTest.setSpent(expectedSpent+0.99);
        assertEquals(expectedSpent+0.99, basketTest.getSpent());
    }

    @Test
    public void testStyles() {
        String expectedStyle = "default";
        Basket basketTest = new Basket(0, "Albin", 15, testNeeds, new String[]{expectedStyle}, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle);
        assertEquals(expectedStyle, basketTest.getSel_background());
        assertEquals(expectedStyle, basketTest.getSel_header());
        assertEquals(expectedStyle, basketTest.getSel_subheader());
        assertEquals(expectedStyle, basketTest.getSel_text());
        assertEquals(expectedStyle, basketTest.getSel_input());
        assertEquals(expectedStyle, basketTest.getSel_background());
        assertArrayEquals(new String[]{expectedStyle}, basketTest.getStyles());

        String newStyle = "special";
        basketTest.setStyles(new String[] {expectedStyle, newStyle});
        basketTest.setSel_background(newStyle);
        basketTest.setSel_header(newStyle);
        basketTest.setSel_subheader(newStyle);
        basketTest.setSel_text(newStyle);
        basketTest.setSel_input(newStyle);
        basketTest.setSel_button(newStyle);
        assertEquals(newStyle, basketTest.getSel_background());
        assertEquals(newStyle, basketTest.getSel_header());
        assertEquals(newStyle, basketTest.getSel_subheader());
        assertEquals(newStyle, basketTest.getSel_text());
        assertEquals(newStyle, basketTest.getSel_input());
        assertEquals(newStyle, basketTest.getSel_background());
        assertArrayEquals(new String[]{expectedStyle, newStyle}, basketTest.getStyles());
    }

    @Test
    public void testToString() {
        int expectedId = 0;
        String expectedUser = "Albin";
        double expectedSpent = 15;
        String expectedStyle = "Albin style";
        Basket basketTest = new Basket(expectedId, expectedUser, expectedSpent, testNeeds, new String[]{"default", expectedStyle}, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle);

        String expectedContents = "[";
        for(int i = 0; i<testNeeds.length-1; i++) {
            expectedContents += testNeeds[i].toString() + ", ";
        }
        expectedContents += testNeeds[testNeeds.length-1];
        expectedContents += "]";

        String expectedStyles = "[default, Albin style]";

        String expectedString = String.format(Basket.STRING_FORMAT, expectedId, expectedUser, expectedSpent, expectedContents, expectedStyles, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle, expectedStyle);

        assertEquals(expectedString, basketTest.toString());
    }
}